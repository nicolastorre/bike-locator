this["templates"] = this["templates"] || {};

this["templates"]["bikelocator"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"search-box\" class=\"container\">\n    <div id=\"form-locator\" class=\"container well\">\n        <form>\n            <div class=\"form-group row\">\n                <div class=\"col-sm-2\">\n                    <label for=\"search-location\" class=\"form-control-label\">Location</label>\n                    <input type=\"text\" id=\"search-location\" name=\"location\" class=\"form-control\" >\n                </div>\n                <div class=\"col-sm-2\">\n                    <label for=\"distance\" class=\"form-control-label\">Distance</label>\n                    <select class=\"form-control\" id=\"distance\" name=\"distance\">\n                        <option value=\"none\">None</option>\n                        <option value=\"0.5\">0.5 km</option>\n                        <option value=\"1\">1 km</option>\n                        <option value=\"5\">5 km</option>\n                        <option value=\"10\">10 km</option>\n                        <option value=\"15\">15 km</option>\n                    </select>\n                </div>\n                <div class=\"col-sm-2\">\n                    <label for=\"contract\" class=\"form-control-label\">City</label>\n                    <select class=\"form-control\" id=\"contract\" name=\"contract\">\n                        <option value=\"all\" selected=\"selected\">All</option>\n                    </select>\n                </div>\n                <button type=\"button\" id=\"search-button\" class=\"col-sm-2 btn btn-primary\">Search</button>\n            </div>\n            <div class=\"form-group row\">\n                <div class=\"col-sm-2\">\n                    <label for=\"min-available-bike\" class=\"form-control-label\">Available bike</label>\n                </div>\n                <div class=\"col-sm-1 col-slider-value\">\n                    <input id=\"min-available-bike-value\" class=\"form-control slider-value\" readonly=\"readonly\"/>\n                </div>\n                <div class=\"col-sm-2\">\n                    <div id=\"min-available-bike\" class=\"slider\"></div>\n                </div>\n                <div class=\"col-sm-1 col-slider-value\">\n                    <input id=\"max-available-bike-value\" class=\"form-control slider-value\" readonly=\"readonly\"/>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <div class=\"col-sm-2\">\n                    <label for=\"min-free-stand\" class=\"form-control-label\">Free stand</label>\n                </div>\n                <div class=\"col-sm-1 col-slider-value\">\n                    <input id=\"min-free-stand-value\" class=\"form-control slider-value\" readonly=\"readonly\"/>\n                </div>\n                <div class=\"col-sm-2\">\n                    <div id=\"min-free-stand\" class=\"slider\"></div>\n                </div>\n                <div class=\"col-sm-1 col-slider-value\">\n                    <input id=\"max-free-stand-value\" class=\"form-control slider-value\" readonly=\"readonly\"/>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div id=\"list-velib\" class=\"col-sm-3\">\n        </div>\n        <div id=\"map-canvas\" class=\"col-sm-9\"></div>\n    </div>\n</div>";
},"useData":true});

this["templates"]["contractoptions"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.contracts : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["templates"]["emptyresult"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"stations-list-panel\" class=\"panel panel-default stations-list-panel\">\n    <div class=\"panel-heading\">\n        <h3>0 bike stations</h3>\n    </div>\n    <div class=\"panel-body stations-list\">\n    </div>\n</div>";
},"useData":true});

this["templates"]["stationdetail"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div id=\"detail-station\" class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Details<button type=\"button\" class=\"btn-close btn btn-danger btn-xs\"><span class=\"glyphicon glyphicon-remove\"></span></button></h3>\n    </div>\n    <div class=\"detail panel-body\">\n        <h4>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.station : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h4>\n        <address>\n            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.station : depth0)) != null ? stack1.address : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.station : depth0)) != null ? stack1.city : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.station : depth0)) != null ? stack1.country : stack1), depth0))
    + "\n        </address>\n        <p>Bike stands: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.station : depth0)) != null ? stack1.bike_stands : stack1), depth0))
    + "</p>\n        <p>Available bikes: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.station : depth0)) != null ? stack1.available_bikes : stack1), depth0))
    + "</p>\n        <p>Available bike stands: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.station : depth0)) != null ? stack1.available_bike_stands : stack1), depth0))
    + "</p>\n    </div>\n</div>";
},"useData":true});

this["templates"]["stationlist"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <li data-station=\""
    + alias2(alias1((depth0 != null ? depth0.number : depth0), depth0))
    + "\" data-contract=\""
    + alias2(alias1((depth0 != null ? depth0.contract_name : depth0), depth0))
    + "\" class=\"station\">\n                <strong>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</strong>\n						<span>\n							"
    + alias2(alias1((depth0 != null ? depth0.address : depth0), depth0))
    + " <br/> "
    + alias2(alias1((depth0 != null ? depth0.postcode : depth0), depth0))
    + " "
    + alias2(alias1((depth0 != null ? depth0.city : depth0), depth0))
    + " <br/>\n							<!--<a href='#' class='directions'>Get directions</a>-->\n						</span>\n                <hr/>\n            </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"stations-list-panel\" class=\"panel panel-default stations-list-panel\">\n    <div class=\"panel-heading\">\n        <h3>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.stations : depth0)) != null ? stack1.length : stack1), depth0))
    + " bike stations</h3>\n    </div>\n    <div class=\"panel-body stations-list\">\n        <ul id=\"stations-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.stations : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n</div>";
},"useData":true});;;(function($) {
    'use strict';

    /**
     * main controller of bike locator widget
     */
    var bikeLocatorController = Stapes.subclass({
        constructor: function () {

            // main selector
            this.$el = $('#locator');

            // init the model
            this.model = new bikeLocatorModel();
            this.model.requestContracts();

            // init the view
            this.view = new bikeLocatorView();
            this.view.init();

            // init the spinner
            this.initSpinner();

            // init the events
            this.modelEvent();
            this.viewEvent();

        },

        /**
         * waiting geocoding AND request of station list DONE
         * execute sort of the data
         */
        initDeferredSearch: function() {
            var that = this;1

            this.geocodingEvent = $.Deferred();
            this.listStationsEvent = $.Deferred();
            $.when(this.geocodingEvent, this.listStationsEvent).done(function(){

                that.model.sortByDistanceBikeAndStand();
            });
        },

        /**
         * model event
         */
        modelEvent: function () {
            var that = this;

            /**
             * click on search button
             * execute geocoding and request of station list
             */
            this.$el.on("click", '#search-button', function () {
                that.model.geocode();
                that.model.requestStationList();
            });

            /**
             * waiting geocoding AND request of station list DONE
             * execute sort of the data
             */
            this.initDeferredSearch();

            /**
             * geocoding DONE
             */
            this.$el.on('geocoded', function (e) {
                that.geocodingEvent.resolve();
            });

            /**
             * request of station list DONE
             */
            this.$el.on('requested', function (e) {
                that.listStationsEvent.resolve();
            });

            /**
             * click on station
             * execute request of the current clicked station
             */
            this.$el.on("click", '.station', function (e) {
                var $target = $(e.target);
                var id = $target.closest('.station').data('station');
                var contract = $target.closest('.station').data('contract');
                that.model.requestCurrentStation(id, contract);
                google.maps.event.trigger(that.view.velibMarkers[id], 'clickDetail');

            });

            /**
             * click on station marker map
             * execute request of the current clicked station
             */
            this.$el.on("showDetail", function (e, id, contract) {
                var $target = $(e.target);
                that.model.requestCurrentStation(id, contract);

            });

        },

        /**
         * view event
         */
        viewEvent: function() {
            var that = this;

            /**
             * init contracts select view
             */
            this.$el.on("requestedContracts", function(){
                that.view.initContractOptions(that.model.contracts);
            });

            /**
             * show station list and map
             */
            this.$el.on('showListMap', function(e) {
                if(that.model.stations.length == 0) {
                    that.view.emptyResultView();
                } else {
                    that.view.listView(that.model.stations);
                    that.view.mapView(that.model.stations);
                }
                that.initDeferredSearch();

            });

            /**
             * show the current clicked station
             */
            this.$el.on("requestedCurrentStation", function(){
                that.view.detailView(that.model.currentStation);
            });

            /**
             * close the current station details and infowindow after clicking on infowindow close button
             */
            this.$el.on("click", '.btn-close', function(e){
                that.view.closeInfoWindow();
                that.view.closeDetailStation();
            });

            /**
             * close the current station details and infowindow after clicking on detail close button
             */
            this.$el.on("listView", function(){
                that.view.closeInfoWindow();
                that.view.closeDetailStation();
            });

            /**
             * start the spinner
             */
            this.$el.on("startSpinner", function() {
                that.spinner.spin(document.getElementById('locator'));
            });

            /**
             * stop the spinner
             */
            this.$el.on("stopSpinner", function() {
                that.spinner.stop();
            });

        },

        /**
         * initialisation du spinner
         */
        initSpinner: function() {
            var opts = {
                lines: 9 // The number of lines to draw
                , length: 20 // The length of each line
                , width: 8 // The line thickness
                , radius: 20 // The radius of the inner circle
                , scale: 1 // Scales overall size of the spinner
                , corners: 1 // Corner roundness (0..1)
                , color: '#000' // #rgb or #rrggbb or array of colors
                , opacity: 0.25 // Opacity of the lines
                , rotate: 0 // The rotation offset
                , direction: 1 // 1: clockwise, -1: counterclockwise
                , speed: 1 // Rounds per second
                , trail: 60 // Afterglow percentage
                , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
                , zIndex: 2e9 // The z-index (defaults to 2000000000)
                , className: 'spinner' // The CSS class to assign to the spinner
                , top: '50%' // Top position relative to parent
                , left: '50%' // Left position relative to parent
                , shadow: false // Whether to render a shadow
                , hwaccel: false // Whether to use hardware acceleration
                , position: 'absolute' // Element positioning
            }

            this.spinner = new Spinner(opts);
        },

    });;    /**
     * bike locator model
     */
    var bikeLocatorModel = Stapes.subclass({
        constructor: function () {

            // main selector
            this.$el = $('#locator');

            // API KEY
            this.apiKey = "15c9f9a03c7c9a67d4287fd82e04bf6d775719ad";

            // API URL
            this.velibURL = "https://api.jcdecaux.com/vls/v1/stations";
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
                    url: that.velibURL,
                    data: parameters,
                    success: function(data) {
                        that.stations = data;
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
    });;    /**
     * bike locator view
     */
    var bikeLocatorView = Stapes.subclass({
        constructor: function () {
            var that = this;

            this.$el = $('#locator');
            this.map;
            this.infowindow;
            this.velibMarkers;

        },

        /**
         * add template
         *
         * @param templateSRC
         * @param element
         */
        getTemplate: function(templateSRC, element) {
            if (arguments.length == 3) {
                var data = arguments[2];
            } else {
                data = [];
            }
            var out = templates[templateSRC](data);
            $(element).append(out);
        },

        /**
         * initialisation du template bikelocator
         */
        init: function() {
            var that = this;

            var context = {};
            this.getTemplate('bikelocator',that.$el, context);

            // range slider
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

            // autocomplete location input
            var autocomplete = new google.maps.places.Autocomplete(
                (document.getElementById('search-location')), {types: ['geocode']});

            google.maps.event.addListener(autocomplete, 'place_changed', function() {});

        },

        /**
         * init the contract options
         *
         * @param contracts
         */
        initContractOptions: function(contracts) {
            this.$contractOptions = $('#contract');
            var context = {contracts: contracts};
            this.getTemplate('contractoptions',this.$contractOptions, context);
        },

        /**
         * display the map
         *
         * @param stations
         */
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

        /**
         * display the station list
         *
         * @param stations
         */
        listView: function(stations) {
            var that = this;
            this.$list = $('#list-velib');

            this.$list.empty();

            var context = {stations: stations};
            this.getTemplate('stationlist',that.$list, context);
        },

        /**
         * display the current station details
         *
         * @param station
         */
        detailView: function(station) {
            var that = this;
            this.$stationsListPanel = $('#stations-list-panel');

            this.$stationsListPanel.hide();
            var context = {station: station};
            this.getTemplate('stationdetail',that.$list, context);

        },

        /**
         * display no results
         */
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

        /**
         * close infowindow
         */
        closeInfoWindow: function() {
            this.infowindow.close();
        },

        /**
         * close current station details
         */
        closeDetailStation: function() {
            var that = this;
            this.$stationsListPanel = $('#stations-list-panel');
            this.$detailStation = $('#detail-station');

            this.$detailStation.remove();
            this.$stationsListPanel.show();
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
    });;
$( document ).ready(function() {
    var app = new bikeLocatorController();
});

})(jQuery);