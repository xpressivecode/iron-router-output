#Iron Router Output

Automatically builds an [Iron-Router](https://github.com/EventedMind/iron-router) route that will output the routes currently registered in your application.

#Basics

Simple install the package `mrt add iron-router-output` after, if you wish to view the routes registered to Iron-Router pass in the `routesUri` configuration option.

```
Router.config({
    ...
    routesUri: '_routes'
});
```

now you can navigate to `http://localhost:3000/_routes` (or whatever your apps url is).

#Example Output

```
Name	Path	Controller	Action
_router_uri	/_routes	IronRouterOutputController	index
items	/items	itemsController	index
edit-item	/items/edit/:id	itemsController	edit
show-item	/items/:id	itemsController	show
new-item	/items/new	itemsController	new
create-item	/items/create	itemsController	create
delete-item	/items/delete/:id	itemsController	delete
destroy-item	/items/destroy/:id	itemsController	destroy
```