
import TypewriterComponent from 'typewriter-effect';
import './App.css';
import InputForm from './components/InputForm'
import React, { useState } from 'react';
import { Todo } from './components/modal';
import TodosList from './components/TodosList';

const App:React.FC=()=> {
  const [todo, setTodo] = useState<string>('');
  // console.log(todo)
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if (todo) {
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo('')
      
    }
    console.log(todos)
  }
  return (
    <div className="App">
    <span className='header'>
    <TypewriterComponent
  options={{
    strings: ['my note book'],
    autoStart: true,
    loop: true,
  }}
/>
    </span>
    <InputForm todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodosList todos={todos} setTodos={setTodos}></TodosList>


    {/* -----------------------------------
    {
      todos.map((todo)=>(
        <li key={todo.id}>
          {todo.todo}
        </li>
      ))
    }
    ---------------------------- */}

    </div>
  );
}

export default App;
