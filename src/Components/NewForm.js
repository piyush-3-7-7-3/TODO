import { useState } from "react";

export default function NewForm(props) {

    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if(newItem !== "")
        {
            props.addTodo(newItem, false);
        }
        setNewItem("");
    }

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input type="text" id="item" value={newItem} onChange={e => setNewItem(e.target.value)}></input>
            </div>
            <button className="btn"> Add </button>
        </form>
    )

}