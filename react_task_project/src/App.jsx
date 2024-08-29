import AddTodo from "./components/AddTodo/AddTodo"
import AllTodoItems from "./components/AllTodoItems/AllTodoItems";
import Container from "./components/Container/Container"
import Message from "./components/Message/Message";
import TodoItemsContextProvider from "./store/todo-items-store"


function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <Container>
          <AddTodo />
          <Message />
          <AllTodoItems />
        </Container>
      </TodoItemsContextProvider>

    </>
  )
}

export default App
