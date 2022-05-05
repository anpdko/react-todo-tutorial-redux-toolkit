import React from 'react';
import TodoItem from './TodoItem';
import {useSelector} from 'react-redux'

const TodoList = () => {
   const todos = useSelector(state => state.todos.todos)
   // state.todos.todos - обрещение к state соединяющих редюсер
   return (
      <ul>
         {todos.map((todo) => 
            <TodoItem 
               key={todo.id} 
               todo={todo} 
            />
         )}
      </ul>
   );
};

export default TodoList;