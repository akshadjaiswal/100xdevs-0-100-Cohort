import React, { useState } from "react";
import Header from "./Header";

const HeaderWithButton = () => {
  const [title, setTitle] = useState("Akshad");

  const updateTitle = () => {
    let newTitle = "My name is " + Math.random();
    setTitle(newTitle);
  };
  return (
    <div>
      <button onClick={updateTitle}>Click to update the title</button>
      <Header title={title}></Header>
    </div>
  );
};

export default HeaderWithButton;
