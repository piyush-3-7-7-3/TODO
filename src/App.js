import { useState } from "react";
import NewForm from "./Components/NewForm";

function App() {

  const [todos, setTodos] = useState([]);

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
      <ul className="list">
        {todos.length === 0 && "No Todo"}
        {
          todos.map(todo => {
            return (
              <li key={todo.id}>
                <label>
                  <input type="checkbox" checked={todo.checked} onChange={(e => toggleTodo(todo.id, e.target.checked))}></input>
                  {todo.title}
                </label>
                <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>

              </li>
            )
          })
        }

      </ul>
    </>
  );
}

export default App;
