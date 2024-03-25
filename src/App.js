import "./App.css";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Checkbox from "./objects/Checkbox";

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
    </main>
  );
}

export default App;
