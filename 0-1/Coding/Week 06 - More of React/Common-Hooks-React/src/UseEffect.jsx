import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/todos").then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
      console.log(todos);
    });
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <ul key={todo.id}>
          <span>Todo No:{todo.id}</span>
          <li>{todo.todo}</li>
        </ul>
      ))}
    </div>
  );
};

export default UseEffect;
