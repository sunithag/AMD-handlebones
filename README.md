AMD-handlebones (AMD + backbone + handlebars)
===============

In order to update the templates, run:

    handlebars templates >> templates.js

Any file in the templates directory will be available in the `Handlebars.templates` hash.

    Handlebars.templates['index']

   Look at these files in this order to understand AMD.

    1. index.html  - add only require.js file to your index.html file.
    <!--<!-- data-main attribute tells require.js to load
                 js/main.js  after require.js loads.  This sets the baseUrl to the "js" directory, and
        loads a script that will have a module ID of 'main'-->
    	<script data-main="js/main" src="js/libs/require.js"></script>


    2.  js/main.js  -  initialize your app here

    3. js/app.js  -  Pass Router module and call it's initialize function.

    4. js/router.js  - define your dependency array and router object, return your function to define. Same as in app.js



