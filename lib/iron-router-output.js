    var _config = IronRouter.prototype.configure;
    IronRouter.prototype.configure = function(options){
        var obj = _config(options);

        if(options.routesUri){
            Router.map(function(){
               this.route('_router_uri', {
                  path: options.routesUri,
                  controller: 'IronRouterUriController',
                  action: 'index'
               });
            });
        }
        return obj;
    };

    window.IronRouterUriController = RouteController.extend({
        template: 'iron-router-uri-route',

        index: function(){
            this.data = Router.routes;
            this.render();
        }
    });