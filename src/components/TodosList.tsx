import React from 'react';
import { Todo } from './modal';
type Props={
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodosList:React.FC<Props> = ({todos,setTodos}) => {
    return (
        <div>
            
        </div>
    );
};

export default TodosList;