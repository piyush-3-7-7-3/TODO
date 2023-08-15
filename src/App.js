
function App() {
  return (
    <>
      <form classname="new-item-form">
        <div classname="form-row">
          <label htmlfor="item">New Item</label>
          <input type="text" id="item"></input>
        </div>
        <button classname="btn"> Add </button>
      </form>
      <h1 classname="header">
        TO-DO List
      </h1>
      <ul classname="list">
        <li>
          <label>
            <input type="checkbox"></input>
            Item1
          </label>
          <button classname="btn btn-danger">Delete</button>

        </li>
      </ul>
      <ul classname="list">
        <li>
          <label>
            <input type="checkbox"></input>
            Item2
          </label>
          <button classname="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
