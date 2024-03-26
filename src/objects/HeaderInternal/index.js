import React from "react";
import Logo from "../Logo";
import AboutLink from "../AboutLink";
import IconClose from "../IconClose";
import "./styles.css";

const HeaderInternal = () => {
  return (
    <header className="header-internal">
      <Logo className="-light" />
      <AboutLink className="-light" />
      <IconClose />
    </header>
  );
};

export default HeaderInternal;
