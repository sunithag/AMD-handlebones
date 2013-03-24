define([
    'jquery',
    'underscore',
    'backbone',
    'models/product/productModel'
], function($, _, Backbone, productModel){
    var productCollection = Backbone.Collection.extend({

        model: productModel,

        initialize : function(models, options) {},

        url : function() {
            return 'http://localhost:8000/json/product.json';
        },

        parse : function(data) {
            return data;
        }


    });

    return productCollection;

});