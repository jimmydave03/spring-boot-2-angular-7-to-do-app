import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpService } from "../../app/http.service";
import { ToDo } from './todo.model';
import { of } from 'rxjs';

@Injectable()
export class ToDoService {

    api: string = environment.api;

    constructor(private httpService: HttpService) { }

    getTodoList(): any {
        return this.httpService.get(this.api + "/todo");
    }

    getTodoItem(id): any {
        return this.httpService.get(this.api + "/todo/" + id);
    }

    saveTodoItem(todo): any {
        return this.httpService.post(this.api + "/todo", todo);
    }

    updateTodoItem(todo): any {
        return this.httpService.put(this.api + "/todo", todo);
    }

    deleteTodoItems(ids): any {
        var param = {"todoIds" : ids};
        return this.httpService.delete(this.api + "/todo", param);
    }
}