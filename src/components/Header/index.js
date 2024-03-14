import Logo from "../../objects/Logo";
import Sobre from "../../objects/Sobre";
import Menu from "../../objects/Menu";

function Header() {
  return (
    <header>
      <Logo />
      <Sobre />
      <Menu />
    </header>
  );
}

export default Header;
