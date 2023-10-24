import React from 'react';
import { Todo } from './modal';
import SingleTodo from './SingleTodo';
import './style.css'
type Props={
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodosList:React.FC<Props> = ({todos,setTodos}) => {
    return (
        <div className='todo-list'>
           {
            todos.map((todo)=>(<SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>))
           }
            
        </div>
    );
};

export default TodosList;