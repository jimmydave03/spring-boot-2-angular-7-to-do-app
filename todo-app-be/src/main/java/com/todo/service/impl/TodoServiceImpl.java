package com.todo.service.impl;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.entity.TodoItem;
import com.todo.repository.TodoRepository;
import com.todo.service.TodoService;

/**
 * Business logic for Todo services.
 * @author jimmydave
 *
 */
@Service
public class TodoServiceImpl implements TodoService {
	
	@Autowired
	private TodoRepository todoRepository;
	
	@Override
	public void save(TodoItem todoItem) {
		todoRepository.save(todoItem);
	}

	@Override
	public List<TodoItem> findAll() {
		return (List<TodoItem>) todoRepository.findAll();
	}

	@Override
	public TodoItem findOne(int todoId) {
		return todoRepository.findById(todoId).get();
	}

	@Override
	public void update(TodoItem todo) {
		TodoItem item = todoRepository.findById(todo.getId()).get();
		BeanUtils.copyProperties(todo, item);
		todoRepository.save(item);
	}

	@Override
	public void delete(String todoIds) {
		
		//Here I am checking if String has single Todo id or multiple.
		//If we are having single id convert to int and delete directly.
		//If not, then convert to int one by one and remove all at once by JPA query.
		if(todoIds.contains(",")) {
			String tempids[] = todoIds.split(",");
			int ids[] = new int[tempids.length];
			for(int i = 0; i < tempids.length ; i++) {
				ids[i] = Integer.parseInt(tempids[i]);
			}
			
			//Delete multiple to do items at once. 
			todoRepository.deleteMultipleTodoItems(ids);
		} else {
			//Delete single todo item.
			int id = Integer.parseInt(todoIds);
			todoRepository.deleteById(id);
		}
	}
}
