import "./App.css";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import Input from "./objects/Input";
import Label from "./objects/Label";

function App() {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Input id={"showEvents"} value={"showEvents"} />
      <Label htmlFor={"showEvents"} content={"Mostrar eventos"} />
    </main>
  );
}

export default App;
