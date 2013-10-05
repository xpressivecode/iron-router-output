Package.describe({
    summary: "Route output module for iron-router"
});

Package.on_use(function(api){
    api.use([
    'iron-router', 'templating'
    ], 'client');

    api.add_files([
        'license.js',
        'lib/views/route.html',
        'lib/iron-router-output.js'
    ], 'client');
});

Package.on_test(function(api){
   api.use(['iron-router', 'templating', 'iron-router-output', 'tinytest', 'test-helpers']);

   api.add_files('tests/iron-router-output-test.js', 'client');
});