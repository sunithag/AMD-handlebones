// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'templates',
    'views/home/homeView',
    'views/product/productView'
], function($, _, Backbone, Handlebars, templates, homeView, productView) {

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
    return {
        initialize: initialize
    };
});