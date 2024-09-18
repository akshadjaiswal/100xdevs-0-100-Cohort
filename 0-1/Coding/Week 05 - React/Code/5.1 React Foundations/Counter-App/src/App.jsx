import { useState } from "react";

// _todo Application
// _todo {
//   _todos: [{ title: "todo1", description: "First TODO", completed: "flase" }]
// }
function App() {
  const [todos, setTodos] = useState([{
    title: "Todo1",
    description: "GO to Gym at 6",
    completed: true
  }, {
    title: "Todo2",
    description: "Lear DSA at 9pm",
    completed: false
  }, {
    title: "Todo3",
    description: "Sleep at 2 am",
    completed: false
  }]);
  function addTodo() {
    setTodos([...todos, {
      title: "Todo4",
      description: "Wake up at 5 am",
      completed: true
    }])
  }
  return (
    <div>
      {/* <Todo title={todos[0].title} description={todos[0].description} ></Todo>
      <Todo title={todos[1].title} description={todos[1].description} ></Todo> */}
      <button onClick={addTodo}>Add New Todo</button>
      {
        todos.map(function (todo) {
          return <Todo key={todo.title} title={todo.title} description={todo.description}></Todo>
        })
      }
    </div>
  )


}
function Todo(props) {

  return (
    <div>
      <ul>
        <h1>Todo</h1>
        <li>{props.title}</li>
        <li>{props.description}</li>
      </ul>
    </div>
  )
}

export default App;
