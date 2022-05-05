# Подсказки по Redux Toolkit
## Пример с официального сайта Redux
```javascript 

import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

store.subscribe(() => console.log(store.getState()))

store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}

```

## Пример с Todo

### > todosSlice.js

```javascript
import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    }
  }
})

export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer
```
### > store.js
```javascript
import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../store/todos/todosSlice'
import filtersReducer from '../store/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer
  }
})
```

### Получить состояние:
```javascript
import {useSelector} from 'react-redux'
// state.todos.todos - обрещение к state соединяющих редюсер
const todos = useSelector(state => state.todos.todos)
```
### Изменить состояние:
```javascript
import {useDispatch} from 'react-redux'
import { todoAdded} from '../store/todoStice';

const dispatch = useDispatch()

dispatch(todoAdded({id: id, text: text}))
```

