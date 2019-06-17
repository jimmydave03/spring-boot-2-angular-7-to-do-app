This app is backend for the To-Do app developed using Java8, spring boot 2 and spring data. 

Please find database inside DB folder named todo_db.

To run the application:

1) Import database you will find in DB folder in repo.
2) Clone the project.
3) Run application with commnad: clean spring-boot:run
4) We got 5 endpoints for To-Do application.
	a) POST - /api/todo      | To save todo.
	b) GET - /api/todo       | To get list of todo.
	c) GET - /api/todo/id    | To get single todo item.
	d) PUT - /api/todo       | To update todo item.
	e) DELETE - /api/todo    | To delete single or multiple todo.
5) This app is running at this location: http://localhost:8096

These endpoints are open for front-end to manipulate data.

Thanks
