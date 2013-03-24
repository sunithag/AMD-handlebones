define([
    'underscore',
    'backbone'
], function(_, Backbone) {

    var productModel = Backbone.Model.extend({

        product: 'product 1'

    });



    return productModel;

});