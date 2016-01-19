
    var velibDataResult = Stapes.subclass({
        constructor: function () {
            var that = this;

            this.$el = $('#locator');
            this.map;
            this.infowindow;
            this.velibMarkers;

        },

        // faire une méthode générique pour l'ajout des templates
        getTemplate: function(templateSRC, element) {
            if (arguments.length == 3) {
                var data = arguments[2];
            } else {
                data = [];
            }
            var out = templates[templateSRC](data);
            $(element).append(out);
        },

        initTemplate: function(contracts) {
            var that = this;

            var context = {contracts: contracts};
            this.getTemplate('bikelocator',that.$el, context);

            var min = 0;
            var max = 100;
            $('#min-available-bike').slider(
            {
                range: true,
                values: [min, max],
                min: min,
                max: max,
                step: 1,
                slide: function( e, ui ) {
                    $('#min-available-bike-value').val(ui.values[0]);
                    $('#max-available-bike-value').val(ui.values[1]);
                }
            });
            $('#min-available-bike-value').val(min);
            $('#max-available-bike-value').val(max);

            $('#min-free-stand').slider(
            {
                range: true,
                values: [min, max],
                min: min,
                max: max,
                step: 1,
                slide: function( e, ui ) {
                    $('#min-free-stand-value').val(ui.values[0]);
                    $('#max-free-stand-value').val(ui.values[1]);
                }
            });
            $('#min-free-stand-value').val(min);
            $('#max-free-stand-value').val(max);

            var autocomplete = new google.maps.places.Autocomplete(
                (document.getElementById('search-location')), {types: ['geocode']});

            google.maps.event.addListener(autocomplete, 'place_changed', function() {});

        },

        mapView: function(stations) {
            var that = this;
            var myLatlng;
            var options;
            var marker;

            that.velibMarkers = [];

            if($('#map-canvas').length) {
                $('#map-canvas').empty();
            }

            var mapOptions = {
                zoom: 5
            };

            that.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            var bounds = new google.maps.LatLngBounds();
            that.infowindow = new google.maps.InfoWindow();
            var mcOptions = {
                gridSize: 50,
                maxZoom: 15
            };
            var mc = new MarkerClusterer(that.map, [], mcOptions);

            $.each(stations, function(index, value) {
                myLatlng = new google.maps.LatLng(value.position.lat,value.position.lng);

                marker = new google.maps.Marker({
                    position: myLatlng,
                    title: value.name
                });
                that.velibMarkers[value.number] = marker;

                google.maps.event.addListener(that.velibMarkers[value.number], 'click', function(e) {
                    that.closeDetailStation();
                    that.infowindow.setContent('Bike station: '  + value.name);
                    that.infowindow.open(that.map, this);
                    that.$el.trigger('showDetail', [value.number, value.contract_name]);
                    google.maps.event.addListener(that.infowindow,'closeclick',function(){
                        that.$el.trigger('listView');
                    });
                });
                google.maps.event.addListener(that.velibMarkers[value.number], 'clickDetail', function(e) {
                    //if(map.getZoom() >= mc.getMaxZoom()) {
                    that.closeDetailStation();
                    myLatlng = new google.maps.LatLng(value.position.lat,value.position.lng);
                    that.infowindow.setContent('Bike station: '  + value.name);
                    that.infowindow.setPosition(myLatlng);
                    that.infowindow.open(that.map, this);
                    google.maps.event.addListener(that.infowindow,'closeclick',function(){
                        that.$el.trigger('listView');
                    });
                    //}
                });

                marker.setMap(that.map);
                mc.addMarker(marker , true);

                bounds.extend(myLatlng);

            });

            //mc.addMarkers(that.velibMarkers , true);

            that.map.fitBounds(bounds);

        },

        listView: function(stations) {
            var that = this;
            this.$list = $('#list-velib');

            this.$list.empty();

            var context = {stations: stations};
            this.getTemplate('stationlist',that.$list, context);
        },

        detailView: function(station) {
            var that = this;
            this.$stationsListPanel = $('#stations-list-panel');

            this.$stationsListPanel.hide();
            var context = {station: station};
            this.getTemplate('stationdetail',that.$list, context);

        },

        emptyResultView: function() {
            var that = this;
            this.$list = $('#list-velib');

            if(that.$list.length) {
                that.$list.empty();
            }

            if($('#map-canvas').length) {
                $('#map-canvas').empty();
                $('#map-canvas').css('background-color','rgb(255,255,255)');
            }
            var context = {};
            this.getTemplate('emptyresult',that.$list, context);
        },

        closeInfoWindow: function() {
            this.infowindow.close();
        },

        closeDetailStation: function() {
            var that = this;
            this.$stationsListPanel = $('#stations-list-panel');
            this.$detailStation = $('#detail-station');

            this.$detailStation.remove();
            this.$stationsListPanel.show();
        },

        renderSpinner: function() {
            this.$el.trigger('startSpinner');
        },
        removeSpinner: function() {
            this.$el.trigger('stopSpinner');
        }
    });