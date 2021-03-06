    /**
     * bike locator model
     */
    var bikeLocatorModel = Stapes.subclass({
        constructor: function () {

            // main selector
            this.$el = $('#locator');

            // API KEY
            this.apiKey = "15c9f9a03c7c9a67d4287fd82e04bf6d775719ad";

            // API URL
            this.contractURL = "https://api.jcdecaux.com/vls/v1/contracts";
            this.stationURL = "https://api.jcdecaux.com/vls/v1/stations/";

            // contract options
            this.contracts = null;

            // geocoded location
            this.location = null;

            // station list
            this.stations = {};

            // current station
            this.currentStation = null;

            // ajax flag
            this.ajaxStatus = false;

        },

        /**
         * request the contract options
         */
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

        /**
         * request the geocoded position from the location input using the Google geocoding API
         */
        geocode: function () {
            var that = this;

            var geocoder = new google.maps.Geocoder();
            var address = $('#search-location').val();
            if(address.length > 0) {
                geocoder.geocode({'address': address}, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        that.location = results[0].geometry.location;
                        console.log("Position: lat: " + that.location.lat() + "lng: " + that.location.lat());
                    } else {
                        alert('Geocode was not successful for the following reason: ' + status);
                    }
                    that.$el.trigger('geocoded');
                });
            } else {
                that.$el.trigger('geocoded');
            }
        },

        /**
         * construct query parameters for the requestStationList method
         */
        queryStationList: function() {
            var parameters = {};
            if($('#contract').val() != 'all') {
                parameters.contract = $('#contract').val()
            }
            parameters.apiKey = this.apiKey;

            return parameters;
        },

        /**
         * request the station list
         */
        requestStationList: function () {
            var parameters;
            var that = this;

            if(!this.ajaxStatus) {
                this.ajaxStatus = true;
                this.renderSpinner();

                parameters = this.queryStationList();
                $.ajax({
                    url: that.stationURL,
                    data: parameters,
                    success: function(data) {
                        that.stations = data;
                        that.$el.trigger('requestedStationList');
                        that.ajaxStatus = false;
                        that.removeSpinner();
                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        alert('Erreur API JC Decaux Velib!');
                    }
                });
            }
        },

        /**
         * request the current station
         *
         * @param id
         * @param contract
         */
        requestCurrentStation: function(id, contract) {
            var parameters;
            var currentStationURL;
            var that = this;

            if(!this.ajaxStatus) {
                this.ajaxStatus = true;

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
                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        alert('Erreur API JC Decaux Velib!');
                    }
                });
            }
        },

        /**
         *  Conversion angle degré -> radian
         *
         * @param v
         * @returns {number}
         */
        toRadian: function(v) {
            return v * (Math.PI / 180);
        },

        /**
         * Calcul la différence entre deux angles en degré
         *
         * @param v1
         * @param v2
         * @returns {number}
         */
        diffRadian: function(v1, v2) {
            return this.toRadian(v2) - this.toRadian(v1);
        },

        /**
         * Calculate distance between two points with lat and lng coordinates
         *
         * @param lat1
         * @param lng1
         * @param lat2
         * @param lng2
         * @returns {number}
         */
        distance: function(lat1, lng1, lat2, lng2) {
            var earthRadiusInKilometers = 6367.0;
            return earthRadiusInKilometers * 2 * Math.asin( Math.min(1, Math.sqrt( ( Math.pow(Math.sin((this.diffRadian(lat1, lat2)) / 2.0), 2.0) + Math.cos(this.toRadian(lat1)) * Math.cos(this.toRadian(lat2)) * Math.pow(Math.sin((this.diffRadian(lng1, lng2)) / 2.0), 2.0) ) ) ) );
        },

        /**
         * sort station list by selected distance, available bike and free stand
         */
        sortByDistanceBikeAndStand: function() {
            var that = this;

            var distance = $('#distance').val();
            var min_available_bike = $('#min-available-bike').slider("values", 0);
            var max_available_bike = $('#min-available-bike').slider("values", 1);
            var min_free_stand = $('#min-free-stand').slider("values", 0);
            var max_free_stand = $('#min-free-stand').slider("values", 1);
            var new_stations = [];
            if("none" != distance && null != that.location) {
                $.each(that.stations, function (index, value) {
                    if (that.distance(value.position.lat, value.position.lng, that.location.lat(), that.location.lng()) <= distance
                        && value.available_bikes >= min_available_bike && value.available_bike_stands >= min_free_stand
                        && value.available_bikes <= max_available_bike && value.available_bike_stands <= max_free_stand) {
                        new_stations.push(that.stations[index]);
                    }

                });
            } else {
                $.each(that.stations, function (index, value) {
                    if (value.available_bikes >= min_available_bike && value.available_bike_stands >= min_free_stand) {
                        new_stations.push(that.stations[index]);
                    }

                });
            }

            that.stations = new_stations;

            that.$el.trigger('showListMap');

        },

        /**
         * trigger start spinner
         */
        renderSpinner: function() {
            this.$el.trigger('startSpinner');
        },

        /**
         * trigger stop spinner
         */
        removeSpinner: function() {
            this.$el.trigger('stopSpinner');
        }
    });