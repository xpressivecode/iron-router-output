Tinytest.add('Iron Router Output - routesUri config setting maps route', function(test){
    Router.configure({
        routesUri: '_routes'
    });

    test.equal(Router.routes.length, 1);
});