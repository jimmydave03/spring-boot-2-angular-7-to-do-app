import { Component, OnInit } from '@angular/core';
import { ToDo } from './todo.model';
import { ToDoService } from './todo.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from "@angular/forms";
declare var $: any;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class ToDoComponent implements OnInit {

	todo: ToDo = new ToDo();
	todosList: ToDo[] = [];
	required: boolean = false;
	loading: boolean = false;
	min: Date = new Date;
	public dateTime: Date;
	todoId: any;
	selectedAll: boolean = false;

	//FormGroup for add todo.
	todoForm = new FormGroup({
    title: new FormControl("", Validators.required),
    createdDate: new FormControl(this.dateTime , Validators.required),
    description: new FormControl("", Validators.required),
    selected: new FormControl(),
  	});

	constructor(private todoService : ToDoService) {}

	ngOnInit() {
		this.getAllTodos();
	}

	//Get all todos from server.
	getAllTodos() {

		this.todoService.getTodoList().subscribe((res: ToDo[]) => {
            this.todosList = res;
            console.log(this.todosList);
          },
          (error: any) => {
            
          }
        );
	}

	//Open to do modal pop-up.
	openTodoModal() {
		this.resetTodoModal();
		$("#todoModal").modal({ backdrop: "static" });
	}

	//Reset variables.
	resetTodoModal() {
		this.required = false;
		this.loading = false;
		this.todo = new ToDo();
	}

	//Save To-Do form. This function will use to update To-Do as well.
	onToDoFormSubmit() {

		//Update todo if Id present otherwise Save a new Todo.
		if(this.todo.id !== undefined && this.todo.id > 0) {
			this.todoService.updateTodoItem(this.todo).subscribe((res: Response) => {
            	console.log("To-do updated");
            	
            	//Refresh table with deleted todo item.
            	this.getAllTodos();
            	this.resetTodoModal();
            	$("#todoModal").modal("hide");
	        },(error: any) => {
	          	console.log("update", error);  
	          }
	        );
		} else {
			this.todoService.saveTodoItem(this.todo).subscribe((res: Response) => {
            	console.log("To-do Added");
            	
            	//Refresh table with added todo item.
            	this.getAllTodos();
            	this.resetTodoModal();
				$("#todoModal").modal("hide");
	        },(error: any) => {
	          	console.log("Added", error);  
	          }
	        );
		}

		this.selectedAll = false;
	}

	//Open modal to update To-Do item.
	updateTodo(id) {
		this.todoService.getTodoItem(id).subscribe((res: ToDo) => {
        	console.log("Get To-Do.");
        	
        	this.resetTodoModal();
        	this.todo = Object.assign({}, res);
        	this.todo.createdDate = new Date(res.createdDate);
			$("#todoModal").modal({ backdrop: "static" });
        },(error: any) => {
          	console.log("To-Do item", error);  
        });
	}

	//Open modal to delete single To-Do.
	deleteTodo(id) {
		this.todoId = id;
		$("#deleteTodoModal").modal({ backdrop: "static" });
	}

	//Delete Single To-Do item.
	deleteTodoSure() {
		this.todoService.deleteTodoItems(this.todoId).subscribe((res: Response) => {
        	console.log("To-do Deleted");
        	this.getAllTodos();
        	$("#deleteTodoModal").modal("hide");
        },(error: any) => {
          	console.log("Deleted", error);  
          }
        );
	}

	//Select all text box.
	selectAll() {
		this.selectedAll = !this.selectedAll;
	    for (var i = 0; i < this.todosList.length; i++) {
	      this.todosList[i].selected = this.selectedAll;
	    }
  	}

  	//Enable delete all button.
  	selectOne() {
  		var isAnySelected = false;
  		for (var i = 0; i < this.todosList.length; i++) {
		    if(this.todosList[i].selected && !this.selectedAll) {
	      		this.selectedAll = !this.selectedAll;
	      	};
	    }
  	}

  	//Open modal to delete All To-Do.
  	deleteAllTodo() {
		$("#deleteAllTodoModal").modal({ backdrop: "static" });
	}

	//Delete All selected To-Do items.
	deleteAllTodoSure() {
		let ids = [];
		this.todosList.forEach(todo => {
			if(todo.selected) {
				ids.push(todo.id);
			}    
		});

		console.log(ids);
		let tempIds = ids.toString();
		this.todoService.deleteTodoItems(tempIds).subscribe((res: Response) => {
        	console.log("Multiple To-do Deleted");
        	this.getAllTodos();
        	$("#deleteAllTodoModal").modal("hide");
        	this.selectedAll = false;
        },(error: any) => {
          	console.log("Multiple Deleted", error);  
          }
        );
	}

	isFieldValid(field: string) {
	    // let fieldValid: boolean = this.signupForm.get(field).valid && this.signupForm.get(field).touched;
	    let fieldValid = (this.todoForm.get(field).valid);
	    console.log("isFieldValid for " + field + " returning " + fieldValid);
	    return fieldValid;
  	}
  	displayFieldCss(field: string) {
	    console.log("in displayFieldCss for field " + field);
	    let fieldValid: boolean = this.isFieldValid(field);

	    if(this.required) {
		    return {
		      'is-invalid': !fieldValid, 
		      'is-valid': fieldValid
		    }	
	    }
  	}
}