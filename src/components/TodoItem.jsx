import React from 'react';
import {useDispatch} from 'react-redux'
import { removeTodo, toggleTodoComplete } from '../store/todoStice';

const TodoItem = ({todo}) => {
   const dispatch = useDispatch()

   return (
      <li>
         <input 
            type="checkbox" 
            checked={todo.complete} 
            onChange={()=>dispatch(toggleTodoComplete({todoId: todo.id}))}
         />
         <span>{todo.text}</span>
         <span 
            onClick={()=>dispatch(removeTodo({todoId: todo.id}))}
            className="delete"
         >&times;</span>
      </li>
   );
};

export default TodoItem;