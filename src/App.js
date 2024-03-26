import "./App.css";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Checkbox from "./objects/Checkbox";
import About from "./objects/About";
import HeaderInternal from "./objects/HeaderInternal";

function App() {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Checkbox
        id={"showEvents"}
        value={"showEvents"}
        content={"Mostrar eventos"}
      />
      <About>
        <HeaderInternal />
      </About>
    </main>
  );
}

export default App;
