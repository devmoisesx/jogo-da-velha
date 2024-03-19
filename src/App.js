import "./App.css";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Input from "./objects/Input";

function App() {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Input
        id={"showEvents"}
        value={"showEvents"}
        content={"Mostrar eventos"}
      />
    </main>
  );
}

export default App;
