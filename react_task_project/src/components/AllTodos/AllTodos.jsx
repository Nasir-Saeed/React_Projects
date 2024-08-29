import React, { useContext, useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import styles from './AllTodos.module.css'
import { TodoItems } from '../../store/todo-items-store';


const AllTodos = ({ todoName, dueDate }) => {
    const { todoList, deleteTodoItem, updateTodoItem } = useContext(TodoItems);

    // State to manage the input values
    const [newTaskName, setNewTaskName] = useState(todoName);

    const [newDueDate, setNewDueDate] = useState(dueDate);


    // State to manage edit mode
    const [isEditing, setIsEditing] = useState(false);

    // Handler functions for input changes
    const handleNameChange = (e) => setNewTaskName(e.target.value);
    const handleDateChange = (e) => setNewDueDate(e.target.value);

    // Update task with new name and due date
    const handleUpdate = () => {
        if (isEditing) {
            // If currently editing, save the update
            updateTodoItem(todoName, newTaskName, newDueDate);
        }
        // Toggle edit mode
        setIsEditing(!isEditing);
    };

    return (
        <>

            <td>
                <textarea
                    value={newTaskName}
                    onChange={handleNameChange}
                    className={`form-control ${isEditing ? styles.highlight : ''}`} // Conditionally add highlight class
                    readOnly={!isEditing} // Make textarea read-only if not editing
                    rows="1" // Adjust number of rows for better UX
                >
                </textarea>
            </td>

            <td>
                <input
                    type="date"
                    value={newDueDate}
                    onChange={handleDateChange}
                    className={`form-control ${isEditing ? styles.highlight : ''}`} // Conditionally add highlight class
                    readOnly={!isEditing} // Make input read-only if not editing
                />
            </td>
            <td>
                <div className={styles.action}>
                    <button
                        type="button"
                        className={`${styles.alignSet} btn btn-success`}
                        onClick={handleUpdate}
                    >
                        {isEditing ? 'Update' : 'Edit'}
                    </button>
                    <button
                        type="button"
                        className={`${styles.alignSet} btn btn-danger`}
                        onClick={() => deleteTodoItem(todoName)}
                    >
                        Delete <MdDeleteForever />
                    </button>
                </div>
            </td>

        </>


    );
}

export default AllTodos;
