import Header from "./components/Header";
import Tabuleiro from "./objects/Tabuleiro";
import Player from "./objects/Player";

function App() {
  return (
    <>
      <Header />
      <Tabuleiro />
      <Player escolha="X"/>
    </>
  );
}

export default App;
