import {createSlice} from '@reduxjs/toolkit'


const todoSlice = createSlice({
   name: 'todos',
   initialState: {
      todos: []
   },
   reducers: {
      addTodo(state, action) {
         state.todos.push({
            id: Date.now(),
            text: action.payload.text,
            complete: false
         })
      },
      removeTodo(state, action){
         state.todos = state.todos.filter(todo => {
            return todo.id !== action.payload.todoId
         })
      },
      toggleTodoComplete(state, action){
         const todo = state.todos.find(todo => {
            return todo.id === action.payload.todoId
         })
         todo.complete = !todo.complete
      }
   }
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer; // для подключения в стор