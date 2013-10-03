#Iron Router Output

Automatically builds an [Iron-Router](https://github.com/EventedMind/iron-router) route that will output the routes currently registered in your application.

#Basics

Simple install the package `mrt add iron-router-output` and then navigate to `http://localhost:3000/router/output` (or whatever your apps url is).

#Example Output

```
Name	Path	Controller	Action
router-output	/router/output	IronRouterOutputController	index
items	/items	itemsController	index
edit-item	/items/edit/:id	itemsController	edit
show-item	/items/:id	itemsController	show
new-item	/items/new	itemsController	new
create-item	/items/create	itemsController	create
delete-item	/items/delete/:id	itemsController	delete
destroy-item	/items/destroy/:id	itemsController	destroy
```