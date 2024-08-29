import { createContext, useReducer, useEffect } from "react";

export const TodoItems = createContext({
  todoList: [],
  addNewTodo: () => { },
  deleteTodoItem: () => { },
});

const todoItemsReducer = (currentTodoItem, action) => {
  switch (action.type) {
    case "NEW_ITEM":
      return [
        ...currentTodoItem, {
          name: action.payload.itemName,
          dueDate: action.payload.itemDate,
        }
      ];
    case "UPDATE_ITEM":
      return currentTodoItem.map(
        (todoItem) => todoItem.name === action.payload.itemName  ? { ...todoItem, name: action.payload.newItemName, dueDate: action.payload.itemDate } : todoItem
      );

    case "DELETE_ITEM":
      return currentTodoItem.filter(
        (todoItem) => todoItem.name !== action.payload.itemName
      );

    case "INIT_ITEM":
      return action.payload.todoList

    default:
      return currentTodoItem
  }
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoList, dispatchTodoItem] = useReducer(todoItemsReducer, []);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("task"))
    if (storedTodos && storedTodos.length > 0) {
      dispatchTodoItem({ type: "INIT_ITEM", payload: { todoList: storedTodos } })
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(todoList))
  }, [todoList]);

  const addNewTodo = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItem(newItemAction);
  };

  const updateTodoItem = (itemName, newItemName, itemDate) => {
    const updateItemAction = {
      type: "UPDATE_ITEM",
      payload: {
        itemName,
        newItemName,
        itemDate
      },
    };
    dispatchTodoItem(updateItemAction);
  };

  const deleteTodoItem = (todoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoName,
      },
    };
    dispatchTodoItem(deleteItemAction);
  };

  return (
    <TodoItems.Provider value={{ todoList, addNewTodo, updateTodoItem, deleteTodoItem }}>
      {children}
    </TodoItems.Provider>
  );
};

export default TodoItemsContextProvider;
