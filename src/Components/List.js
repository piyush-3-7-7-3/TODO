import Todo from "./Todo"

export default function List({toggleTodo, deleteTodo, todos}) {

    return (
        <ul className="list">
            {todos.length === 0 && "No Todo"}
            {
                todos.map(todo => {
                    return (
                        <Todo toggleTodo={toggleTodo} deleteTodo={deleteTodo} todo={todo}/>
                    )
                })
            }
        </ul>
    )
}