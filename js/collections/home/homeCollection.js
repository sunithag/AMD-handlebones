define([
    'jquery',
    'underscore',
    'backbone',
    'models/home/homeModel'
], function($, _, Backbone, homeModel){
    var homeCollection = Backbone.Collection.extend({

        model: homeModel,

        initialize: function(){


        }

    });

    return homeCollection;
});