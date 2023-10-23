import React from 'react';
import './style.css'
interface Props{
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void

}

const InputForm = ({todo,setTodo,handleAdd}:Props) => {
    return (
        <form className='input-form' onSubmit={(e)=>{
            handleAdd(e)
        }}>
            <input type="input" className='input-form-field' placeholder='please enter your note here' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button type="submit" className='input-btn'>Add</button>
            
        </form>
    );
};

export default InputForm;