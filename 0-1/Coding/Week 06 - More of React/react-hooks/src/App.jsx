import React, { useState } from "react";
import Header from "./Header";
// import HeaderWithButton from "./HeaderWithButton";

function App() {
  const [title, setTitle] = useState("Akshad");

  const updateTitle = () => {
    let newTitle = "My name is " + Math.random();
    setTitle(newTitle);
  };
  return (
    <div>
      {/* <HeaderWithButton></HeaderWithButton> */}
      <button onClick={updateTitle}>Click to update Title</button>
      <Header title={title} />
      <Header title="Akshad jjj" />
      <Header title="Akshad jjj" />
      <Header title="Akshad jjj" />
    </div>
  );
}

export default App;
