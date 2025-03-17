import React, { useState } from "react";
import Header from "./Header";
import Todo from "./Todo";
// import HeaderWithButton from "./HeaderWithButton";

function App() {
  // const [title, setTitle] = useState("Akshad");
  const [todos, setTodos] = useState([
    {
      title: "Gym",
      description: "At 6 am",
    },
    {
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
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  };
  return (
    <div>
      {/* <HeaderWithButton></HeaderWithButton> */}
      {/* <button onClick={updateTitle}>Click to update Title</button>
      <Header title={title} />
      <Header title="Akshad jjj" />
      <Header title="Akshad jjj" />
      <Header title="Akshad jjj" /> */}
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <Todo title={todo.title} description={todo.description}></Todo>
          </div>
        );
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default App;
