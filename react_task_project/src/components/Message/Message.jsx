import React, { useContext } from 'react';
import { TodoItems } from '../../store/todo-items-store';

const Message = () => {
    const { todoList } = useContext(TodoItems)
    console.log(todoList)
    return (
        <h3 className='mt-4 text-white'>{
            todoList.length === 0 ? "Please Add Your Task" : "Your Task List"
        }</h3>
    );
}

export default Message;
