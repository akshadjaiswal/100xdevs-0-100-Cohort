import TextComponent from "./TextComponent";

function App() {
  return (
    <div>
      <Cardwrapper children={<TextComponent title={"Akshad"} />} />
      <Cardwrapper>
        {" "}
        <h1>Hi there its me full stack developer</h1>
      </Cardwrapper>
      <Cardwrapper>
        <MoreText />
      </Cardwrapper>
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

function MoreText() {
  return <div>More About me</div>;
}
export default App;
