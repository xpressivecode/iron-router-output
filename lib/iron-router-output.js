(function(){ 
    Router._configure = Router.configure;
    Router.configure = function(options){
        var obj = Router._configure(options);

        if(options.routesUri){
            Router.map(function(){
               this.route('_router_uri', {
                  path: options.routesUri,
                  controller: 'IronRouterUriController',
                  action: 'index',
                  data: false
               });
            });
        }
        return obj;
    };

    window.IronRouterUriController = RouteController.extend({
        template: 'iron-router-uri-route',

        index: function(){
            this.setData({
                Model: Router.routes
            });
            
            this.render();
        }
    });
})();