define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'templates',
    'models/home/homeModel',
    'collections/home/homeCollection'
], function($, _, Backbone, handlebars, templates, homeModel, homeCollection){


        var homeView = Backbone.View.extend({

            el: $("#content"),


            render: function(){

                var model = new homeModel({});
                var template = Handlebars.templates['home/index'] ;
                var output = template(model);
                this.$el.html(output);

             }

        });
        return homeView;
});