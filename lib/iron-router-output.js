if(Meteor.isClient){
    Router.map(function(){
        this.route('router-output', {
            path: '/router/output',
            controller: 'IronRouterOutputController',
            action: 'index'
        });
    });

    window.IronRouterOutputController = RouteController.extend({
        template: 'iron-router-output-route',

        index: function(){
            this.data = Router.routes;
            this.render();
        }
    });
}