// router.js has some depencies - jquery, underscore, backbone, handlebars, templates, homeview, productview.
// baseurl was set to 'js' in the index.html. load dependencies defined in the define() and pass them to the object
//definition in the same order.

//You may encounter some define() calls that include a name for the module as the first argument to define():

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'templates',
    'views/home/homeView',
    'views/product/productView'
], function($, _, Backbone, Handlebars, templates, homeView, productView) {
    //define router object here

    var that = this;

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            "": 'index',
            "product": 'productDetails'

        }
    });

    var initialize = function(){

        var app_router = new AppRouter;

        app_router.on('route:index', function(){
            // Call render on the module we loaded in via the dependency array

            var view = new homeView();
            view.render();

        });

        app_router.on('route:productDetails', function () {

            var view  = new productView();
            view.render();
        });

        Backbone.history.start();
    };

    //return a function to define js/router.js
    return {
        initialize: initialize
    };
});