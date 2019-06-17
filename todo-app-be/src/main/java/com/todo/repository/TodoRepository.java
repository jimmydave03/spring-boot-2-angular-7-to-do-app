package com.todo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.todo.entity.TodoItem;
/**
 * Todo repository.
 * @author jimmydave
 *
 */
@Repository
public interface TodoRepository extends CrudRepository<TodoItem, Integer> {
	
	//Delete multiple to do items.
	@Transactional
	@Modifying
	@Query("DELETE FROM TodoItem ti where ti.id IN ?1")
	void deleteMultipleTodoItems(int[] ids);

}
