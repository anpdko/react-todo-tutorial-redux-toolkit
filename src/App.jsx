import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import {useDispatch} from 'react-redux'
import {addTodo} from './store/todoStice'

function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}));
    setText('')
  }

  return (
    <div className="App">
      <InputField 
        text={text} 
        handleInput={setText} 
        handleSubmit={addTask}
      />
      <br/>
      <TodoList/>
    </div>
  );
}

export default App;
