;(function($) {
    'use strict';

    var velibSearchController = Stapes.subclass({
        constructor: function () {
            this.$el = $('#locator');

            this.model = new velibDataRequest();
            this.model.requestContracts();

            this.view = new velibDataResult();

            this.event();

        },

        initDeferredSearch: function() {
            var that = this;1

            this.geocodingEvent = $.Deferred();
            this.listStationsEvent = $.Deferred();
            $.when(this.geocodingEvent, this.listStationsEvent).done(function(){

                that.model.sortByDistanceBikeAndStand();
            });
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

            this.initDeferredSearch();

            that.$el.on('geocoded', function(e) {
                that.geocodingEvent.resolve();
            });

            that.$el.on('requested', function(e) {
                that.listStationsEvent.resolve();
            });

            that.$el.on('showListMap', function(e) {
                if(that.model.stations.length == 0) {
                    that.view.emptyResultView();
                } else {
                    that.view.listView(that.model.stations);
                    that.view.mapView(that.model.stations);
                }
                that.initDeferredSearch();

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

    });