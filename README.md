Welcome to My To-Do app. Screenshots are added into "screenshot" folder.

This application is devided into 2 parts. 

1) Front-end using Angular 7, Bootstrap 4.
2) Backend usgin Java 8, Spring boot 2, Spring data, MySql

Front end run on : http://localhost:4200
Back end run on: http://localhost:8096
Database: mysql. 

1) Front-end details:

This app is front-end for the To-Do app developed using Angular 7, Bootstrap 4. 

To run the application:

1) Clone the project.
2) install dependencies using: npm install
3) Run application run with commnad: ng serve
4) To generate build: ng build --prod
5) This app will run at this location: http://localhost:4200

These endpoints are open for front-end to manipulate data.

2) Back-end details.

This app is backend for the To-Do app developed using Java8, spring boot 2 and spring data. 

Please find database inside DB folder named todo_db.

To run the application:

1) Clone the project.
2) Import database you will find in DB folder in repo.
3) Run application with commnad: clean spring-boot:run
4) We got 5 endpoints for To-Do application.
	a) POST - /api/todo      | To save todo.
	b) GET - /api/todo       | To get list of todo.
	c) GET - /api/todo/id    | To get single todo item.
	d) PUT - /api/todo       | To update todo item.
	e) DELETE - /api/todo    | To delete single or multiple todo.
5) This app will run at this location: http://localhost:8096

These endpoints are open for front-end to manipulate data.

Thanks
