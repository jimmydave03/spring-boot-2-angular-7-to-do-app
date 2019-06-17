package com.todo.service;

import java.util.List;

import com.todo.entity.TodoItem;

public interface TodoService {
	
	//Save todo item.
	void save(TodoItem todoItem);

	//Get all todo items.
	List<TodoItem> findAll();
	
	//Get single todo item by id.
	TodoItem findOne(int todoId);

	//Update Todo item.
	void update(TodoItem todo);
	
	//Delete single / multiple todo items.
	void delete(String todoIds);
}
