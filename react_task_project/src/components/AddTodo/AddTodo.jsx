import React, { useContext, useRef } from 'react';
import { MdAddBox } from "react-icons/md";
import styles from './AddTodo.module.css'
import { TodoItems } from '../../store/todo-items-store';



const AddTodo = () => {
    const { addNewTodo } = useContext(TodoItems)

    let todoElementName = useRef(0)
    let todoElementDate = useRef(0)

    const handleAddTodoItems = (e) => {
        e.preventDefault();
        let todoName = todoElementName.current.value;
        let dueDate = todoElementDate.current.value;
        addNewTodo(todoName, dueDate);
        todoElementName.current.value = ""
        todoElementDate.current.value = ""
    }

    return (
        <>
            <form onSubmit={handleAddTodoItems} className="row g-3 mb-4">
                <div className="col-lg-5">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Task"
                        ref={todoElementName}
                        rows="1" // Adjust number of rows for better UX
                        required />
                </div>
                <div className="col-lg-5">
                    <input
                        type="date"
                        className="form-control"
                        ref={todoElementDate}
                        required />
                </div>
                <div className="col-lg-2">
                    <button
                        type="submit"
                        className={`${styles.alignSet} btn btn-light w-100`}
                    >Add  <MdAddBox />
                    </button>
                </div>
            </form>
        </>

    );
}

export default AddTodo;
