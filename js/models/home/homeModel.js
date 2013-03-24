define([
    'underscore',
    'backbone'
], function(_, Backbone) {

    var homeModel = Backbone.Model.extend({

            greeting: 'Hello'

    });


  /*
  var homeModel = Backbone.Model.extend({
        defaults : {
            query : "unknown"
        },

        initialize: function( options ) {
            this.query = options.query;
        },

        url : function() {
            return 'http://localhost:8000/json/TVs';
        },

        parse : function(res) {
            return res.data;
        }
    });*/
    return homeModel;

});