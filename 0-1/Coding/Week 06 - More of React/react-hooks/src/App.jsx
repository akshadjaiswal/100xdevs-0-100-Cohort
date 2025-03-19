import TextComponent from "./TextComponent";

function App() {
  return (
    <div>
      <Cardwrapper children={<TextComponent title={"Akshad"} />} />
      <Cardwrapper children={<TextComponent title={"Full Stack developer"} />} />
    </div>
  );
}

function Cardwrapper({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: 20, margin: 20 }}>
      {children}
    </div>
  );
}
export default App;
