import React from "react";
import Label from "../Label";
import Input from "../Input";
import "./styles.css";

const Checkbox = ({ id, value, content }) => {
  return (
    <>
      <Input id={id} value={value} content={content} type={"checkbox"} />
      <Label classname="checkbox" htmlFor={id} content={content} />
    </>
  );
};

export default Checkbox;
