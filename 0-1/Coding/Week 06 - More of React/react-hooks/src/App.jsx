import React, { useState } from "react";
import Header from "./Header";
import Todo from "./Todo";
// import HeaderWithButton from "./HeaderWithButton";

let counter = 3;

function App() {
  // const [title, setTitle] = useState("Akshad");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Gym",
      description: "At 6 am",
    },
    {
      id: 2,
      title: "Code",
      description: "At 7 am",
    },
  ]);

  // const updateTitle = () => {
  //   let newTitle = "My name is " + Math.random();
  //   setTitle(newTitle);
  // };
  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
    console.log(todos)
  };
  return (
    <div>
      {/* <HeaderWithButton></HeaderWithButton> */}
      {/* <button onClick={updateTitle}>Click to update Title</button>
      <Header title={title} />
      <Header title="Akshad jjj" />
      <Header title="Akshad jjj" />
      <Header title="Akshad jjj" /> */}
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Todo title={todo.title} description={todo.description}></Todo>
          </div>
        );
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default App;
