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