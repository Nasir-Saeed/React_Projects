import React, { useContext } from 'react';
import AllTodos from '../AllTodos/AllTodos';
import { TodoItems } from '../../store/todo-items-store';



const AllTodoItems = () => {
    const { todoList } = useContext(TodoItems)

    return (

        <table className="table table-secondary table-striped container" >
            <thead>
                <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody >
                {todoList.map((todo, index) => (
                    <tr key={index}>
                        <AllTodos
                            todoName={todo.name}
                            dueDate={todo.dueDate}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default AllTodoItems;
