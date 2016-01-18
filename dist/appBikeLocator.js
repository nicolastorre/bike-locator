this["templates"] = this["templates"] || {};

this["templates"]["bikelocator"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <option value=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"search-box\" class=\"container\">\n    <div id=\"form-locator\" class=\"container well\">\n        <form>\n            <div class=\"form-group row\">\n                <div class=\"col-sm-2\">\n                    <label for=\"search-location\" class=\"form-control-label\">Location</label>\n                    <input type=\"text\" id=\"search-location\" name=\"location\" class=\"form-control\" >\n                </div>\n                <div class=\"col-sm-2\">\n                    <label for=\"distance\" class=\"form-control-label\">Distance</label>\n                    <select class=\"form-control\" id=\"distance\" name=\"distance\">\n                        <option value=\"none\">None</option>\n                        <option value=\"5\">5 km</option>\n                        <option value=\"10\">10 km</option>\n                        <option value=\"15\">15 km</option>\n                    </select>\n                </div>\n                <div class=\"col-sm-2\">\n                    <label for=\"contract\" class=\"form-control-label\">City</label>\n                    <select class=\"form-control\" id=\"contract\" name=\"contract\">\n                        <option value=\"all\" selected=\"selected\">All</option>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.contracts : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                    </select>\n                </div>\n                <button type=\"button\" id=\"search-button\" class=\"col-sm-2 btn btn-primary\">Search</button>\n            </div>\n            <div class=\"form-group row\">\n                <div class=\"col-sm-2\">\n                    <label for=\"min-available-bike\" class=\"form-control-label\">Min available bike</label>\n                </div>\n                <div class=\"col-sm-2\">\n                    <div id=\"min-available-bike\" class=\"slider\"></div>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <div class=\"col-sm-2\">\n                    <label for=\"min-free-stand\" class=\"form-control-label\">Min free stand</label>\n                </div>\n                <div class=\"col-sm-2\">\n                    <div id=\"min-free-stand\" class=\"slider\"></div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div id=\"list-velib\" class=\"col-sm-3\">\n        </div>\n        <div id=\"map-canvas\" class=\"col-sm-9\"></div>\n    </div>\n</div>";
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

    var velibSearchController = Stapes.subclass({
        constructor: function () {
            this.$el = $('#locator');

            this.model = new velibDataRequest();
            this.model.requestContracts();

            this.view = new velibDataResult();

            this.event();

        },

        event: function (data) { // séparer event model et event view
            var that = this;

            that.$el.on("requestedContracts", function(){
                that.view.initTemplate(that.model.contracts);
            });

            that.$el.on("click", '#search-button', function(){
                that.model.geocode();
                that.model.request();
            });

            var geocodingEvent = $.Deferred();
            var listStationsEvent = $.Deferred();

            that.$el.on('geocoded', function(e) {
                geocodingEvent.resolve();
            });

            that.$el.on('requested', function(e) {
                listStationsEvent.resolve();
            });

            $.when(listStationsEvent).done(function(){

                if(that.model.stations.length == 0) {
                    that.view.emptyResultView();
                } else {
                    that.view.listView(that.model.stations);
                    that.view.mapView(that.model.stations);
                }
            });

            that.$el.on("click", '.station', function(e){
                var $target = $(e.target);
                var id = $target.closest('.station').data('station');
                var contract = $target.closest('.station').data('contract');
                that.model.requestCurrentStation(id,contract);
                google.maps.event.trigger(that.view.velibMarkers[id], 'clickDetail');

            });

            that.$el.on("showDetail", function(e, id, contract){
                var $target = $(e.target);
                console.log(contract);
                that.model.requestCurrentStation(id,contract);

            });

            that.$el.on("requestedCurrentStation", function(){
                that.view.detailView(that.model.currentStation);
            });

            that.$el.on("click", '.btn-close', function(e){
                that.view.closeInfoWindow();
                that.view.closeDetailStation();
            });

            that.$el.on("listView", function(){
                that.view.closeInfoWindow();
                that.view.closeDetailStation();
            });

        }

    });;
var velibDataRequest = Stapes.subclass({
    constructor: function () {

        this.$el = $('#locator');

        this.velibURL = "https://api.jcdecaux.com/vls/v1/stations";
        this.contractURL = "https://api.jcdecaux.com/vls/v1/contracts";
        this.stationURL = "https://api.jcdecaux.com/vls/v1/stations/";

        this.location = null;

        this.apiKey = "15c9f9a03c7c9a67d4287fd82e04bf6d775719ad";

        this.stations = {};
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

    geocode: function () {
        var that = this;

        var geocoder = new google.maps.Geocoder();
        var address = $('#search-location').val();
        geocoder.geocode({'address': address}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                that.location = results[0].geometry.location;
                console.log("Position: lat: " + that.location.lat() + "lng: " + that.location.lat());
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
            that.$el.trigger('geocoded');
        });
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
});;
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
    });;
$( document ).ready(function() {
    var app = new velibSearchController();
});

})(jQuery);