import React, { useState } from 'react';
import { Todo } from './modal';
import { AiFillEdit,AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './style.css'
interface Props{
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo,todos,setTodos}:Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState(todo.todo);
    const handleDone=(id:number)=>{
        todos.map((todo)=>todo.id ===id?{...todo,isDone:!todo.isDone}:todo)

    }
    return (
        <div className='single-todo'>
            
            <span className='single-todo-text'>
                {todo.todo}
            </span>
            <div>
                <span className='icon'>
                <AiFillEdit />
                </span>
           <span className='icon' onClick={()=>handleDone(todo.id)}>
           <MdDone />
           </span>
           <span className='icon'>
           <AiFillDelete />
           </span>
         
           
            </div>
        </div>
    );
};

export default SingleTodo;



{/* <div className='single-todo'>
            <span className='single-todo-text'>
                {todo.todo}
            </span>
            <div>
                <span className='icon'>
                <AiFillEdit />
                </span>
           <span className='icon' onClick={()=>handleDone(todo.id)}>
           <MdDone />
           </span>
           <span className='icon'>
           <AiFillDelete />
           </span>
         
           
            </div>
        </div> */}