;(function($) {
    'use strict';

    /**
     * main controller du widget bike locator
     */
    var velibSearchController = Stapes.subclass({
        constructor: function () {

            // main selector
            this.$el = $('#locator');

            // init the model
            this.model = new velibDataRequest();
            this.model.requestContracts();

            // init the view
            this.view = new velibDataResult();

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
            that.$el.on("click", '#search-button', function () {
                that.model.geocode();
                that.model.request();
            });

            /**
             * waiting geocoding AND request of station list DONE
             * execute sort of the data
             */
            this.initDeferredSearch();

            /**
             * geocoding DONE
             */
            that.$el.on('geocoded', function (e) {
                that.geocodingEvent.resolve();
            });

            /**
             * request of station list DONE
             */
            that.$el.on('requested', function (e) {
                that.listStationsEvent.resolve();
            });

            /**
             * click on station
             * execute request of the current clicked station
             */
            that.$el.on("click", '.station', function (e) {
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
            that.$el.on("showDetail", function (e, id, contract) {
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
            that.$el.on("requestedContracts", function(){
                that.view.initTemplate(that.model.contracts);
            });

            /**
             * show station list and map
             */
            that.$el.on('showListMap', function(e) {
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
            that.$el.on("requestedCurrentStation", function(){
                that.view.detailView(that.model.currentStation);
            });

            /**
             * close the current station details and infowindow after clicking on infowindow close button
             */
            that.$el.on("click", '.btn-close', function(e){
                that.view.closeInfoWindow();
                that.view.closeDetailStation();
            });

            /**
             * close the current station details and infowindow after clicking on detail close button
             */
            that.$el.on("listView", function(){
                that.view.closeInfoWindow();
                that.view.closeDetailStation();
            });

            /**
             * start the spinner
             */
            that.$el.on("startSpinner", function() {
                that.spinner.spin(document.getElementById('locator'));
            });

            /**
             * stop the spinner
             */
            that.$el.on("stopSpinner", function() {
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

    });