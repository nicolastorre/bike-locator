
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

            $('.slider').slider(
                {
                    value: 0,
                    min: 0,
                    max: 50,
                    step: 5
                });

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
                    that.infowindow.setContent('Bike station: '  + value.name);
                    that.infowindow.open(that.map, this);
                    that.$el.trigger('showDetail', [value.number, value.contract_name]);
                    google.maps.event.addListener(that.infowindow,'closeclick',function(){
                        that.$el.trigger('listView');
                    });
                });
                google.maps.event.addListener(that.velibMarkers[value.number], 'clickDetail', function(e) {
                    //if(map.getZoom() >= mc.getMaxZoom()) {
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

            that.$list.empty();

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
            this.$el.toggleClass('loading');
        },
        removeSpinner: function() {
            this.$el.removeClass('loading');
        }
    });