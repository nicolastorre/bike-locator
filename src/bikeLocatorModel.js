
    var velibDataRequest = Stapes.subclass({
        constructor: function () {

            this.$el = $('#locator');

            this.velibURL = "https://api.jcdecaux.com/vls/v1/stations";
            this.contractURL = "https://api.jcdecaux.com/vls/v1/contracts";
            this.stationURL = "https://api.jcdecaux.com/vls/v1/stations/";

            this.apiKey = "15c9f9a03c7c9a67d4287fd82e04bf6d775719ad";

            this.stations = null;
            this.currentStation = null;
            this.contracts = null;

            this.ajaxStatus = false;

        },

        query: function() {
            var parameters = {};
            if($('#contract').val() != 'all') {
                parameters.contract = $('#contract').val()
            }
            parameters.apiKey = this.apiKey;

            return parameters;
        },

        request: function (data) {
            var parameters;
            var that = this;

            if(!this.ajaxStatus) {
                this.ajaxStatus = true;
                this.renderSpinner();

                parameters = this.query();
                $.ajax({
                    url: that.velibURL,
                    data: parameters,
                    success: function(data) {
                        that.stations = data;
                        that.sortByBikeAndStand();
                        that.$el.trigger('requested');
                        that.ajaxStatus = false;
                        that.removeSpinner();
                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        alert('Erreur API JC Decaux Velib!');
                    }
                });
            }
        },

        requestContracts: function() {
            var parameters;
            var that = this;

            if(!this.ajaxStatus) {
                this.ajaxStatus = true;
                this.renderSpinner();

                parameters = {
                    'apiKey': this.apiKey
                };
                $.ajax({
                    url: that.contractURL,
                    data: parameters,
                    success: function(data) {
                        that.contracts = data.sort(function(a, b) {
                            var labelA = a.name.toUpperCase();
                            var labelB = b.name.toUpperCase();
                            return (labelA < labelB) ? -1 : (labelA > labelB) ? 1 : 0;
                        });
                        that.$el.trigger('requestedContracts');
                        that.ajaxStatus = false;
                        that.removeSpinner();
                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        alert('Erreur API JC Decaux Velib!');
                    }
                });
            }
        },

        requestCurrentStation: function(id, contract) {
            var parameters;
            var currentStationURL;
            var that = this;

            if(!this.ajaxStatus) {
                this.ajaxStatus = true;
                this.renderSpinner();

                currentStationURL = that.stationURL + id;
                parameters = {
                    'contract': contract,
                    'apiKey': this.apiKey
                };
                $.ajax({
                    url: currentStationURL,
                    data: parameters,
                    success: function(data) {
                        that.currentStation = data;
                        that.$el.trigger('requestedCurrentStation');
                        that.ajaxStatus = false;
                        that.removeSpinner();
                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        alert('Erreur API JC Decaux Velib!');
                    }
                });
            }
        },

        sortByBikeAndStand: function() {
            var that = this;

            var min_available_bike = $('#min-available-bike').slider("value");
            var min_free_stand = $('#min-free-stand').slider("value");
            var new_stations = [];
            $.each(that.stations, function(index, value) {
                if(value.available_bikes >= min_available_bike && value.available_bike_stands >= min_free_stand ) {
                    new_stations.push(that.stations[index]);
                }

            });

            that.stations = new_stations;

        },

        renderSpinner: function() {
            this.$el.toggleClass('loading');
        },
        removeSpinner: function() {
            this.$el.removeClass('loading');
        }
    });