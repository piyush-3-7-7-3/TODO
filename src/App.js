import { useState } from "react";
import NewForm from "./Components/NewForm";
import List from "./Components/List";
import { useEffect } from "react";

function App() {

  const [todos, setTodos] = useState(() => {
    const localValues = localStorage.getItem("ITEMS")
    if (localValues == null) {
      return []
    }
    return JSON.parse(localValues)
  }
  );

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title, completed) {
    setTodos(currentItem => {
      return [
        ...currentItem, { id: crypto.randomUUID(), title, completed },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodo => {
      return currentTodo.map(todo => {
        if (todo.id == id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewForm addTodo={addTodo} />
      <h1 className="header">
        TO-DO List
      </h1>
      <List toggleTodo={toggleTodo} deleteTodo={deleteTodo} todos={todos} />
    </>
  );
}

export default App;
