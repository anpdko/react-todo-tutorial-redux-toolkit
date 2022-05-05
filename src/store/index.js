import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoStice';

export default configureStore({
   reducer: {
      todos: todoReducer,
   }
})