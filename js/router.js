// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'templates',
    'views/home/homeView',
    'views/product/productView'
], function($, _, Backbone, handlebars, templates, homeView, productView) {

    var homeView = homeView;
    var productView = productView;


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
            homeView = new homeView();
            homeView.render();

        });

        app_router.on('route:productDetails', function () {

            productView = new productView();
            productView.render();
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});