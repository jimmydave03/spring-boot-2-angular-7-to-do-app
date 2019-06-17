package com.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.todo.entity.TodoItem;
import com.todo.service.TodoService;

/**
 * Request handlers to manage Todos.
 * @author jimmydave
 *
 */
@RestController
@RequestMapping("/api/todo")
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	/**
	 * Save todo item to db.
	 * @param todo
	 * @return
	 * @throws Exception
	 */
	@PostMapping
	public ResponseEntity<?> saveTodoItem(@RequestBody TodoItem todo) throws Exception {
		todoService.save(todo);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	/**
	 * Get all todo items from database.
	 * @return
	 * @throws Exception
	 */
	@GetMapping
	public ResponseEntity<?> getAllTodoItems() throws Exception {
		List<TodoItem> todoItems = todoService.findAll();
		return new ResponseEntity<List<TodoItem>>(todoItems, HttpStatus.OK);
	}
	
	/**
	 * Get single todo item by todo id.
	 * @param todoId
	 * @return
	 * @throws Exception
	 */
	@GetMapping("/{todoId}")
	public ResponseEntity<?> getTodoItem(@PathVariable int todoId) throws Exception {
		TodoItem todoItem = todoService.findOne(todoId);
		return new ResponseEntity<TodoItem>(todoItem, HttpStatus.OK);
	}
	
	/**
	 * Update a todo item.
	 * @param todo
	 * @return
	 * @throws Exception
	 */
	@PutMapping
	public ResponseEntity<?> updateTodoItem(@RequestBody TodoItem todo) throws Exception {
		todoService.update(todo);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	/**
	 * Delete single/multiple Todo item.
	 * As we can see I am getting Todo ids in String format. 
	 * That is because I am using single endpoint to delete single or multiple Todo.
	 * So From front-end I will send todo ids in comma separated string and will convert it again to Integer.
	 * @param todoIds
	 * @return
	 * @throws Exception
	 */
	@DeleteMapping
	public ResponseEntity<?> DeleteTodoItem(@RequestParam String todoIds) throws Exception {
		todoService.delete(todoIds);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
}
