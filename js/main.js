// Require.js allows us to configure shortcut alias
//use require() to load any other scripts you need to run:

require.config({
    paths: {
        jquery: 'libs/jquery-min',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min',
        handlebars: 'libs/handlebars',
        templates: '../templates'
    }

});

require([
    // Load our app module and pass it to our definition function
    'app'

], function(App){
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});