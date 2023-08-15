export default function Todo({toggleTodo, deleteTodo, todo}) {
    return (
        <li key={todo.id}>
            <label>
                <input type="checkbox" checked={todo.checked} onChange={(e => toggleTodo(todo.id, e.target.checked))}></input>
                {todo.title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    )
}