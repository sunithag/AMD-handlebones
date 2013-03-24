define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'templates',
    'models/product/productModel',
    'collections/product/productCollection'
], function($, _, Backbone, handlebars, templates, productModel, productCollection){


    var productView = Backbone.View.extend({

        el: $("#product"),

    /*    initialize:function() {

            var that = this;

            var onDataHandler = function(collection) {
                that.render();
            }

            that.collection = new productCollection([]);
            that.collection.fetch({ success : onDataHandler, dataType: "jsonp" });

        },*/

        render: function(){

            var model = new productModel({});
            var template = Handlebars.templates['product/index'] ;
            var output = template(model);
            this.$el.html(output);

        }

    });
    return productView;
});