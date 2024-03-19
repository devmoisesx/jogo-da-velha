import React from "react";
import "./styles.css";
import Label from "../Label";

const Input = ({ id, value, content }) => {
  return (
    <>
      <input type="checkbox" id={id} value={value} />
      <Label htmlFor={id} content={content} />
    </>
  );
};

export default Input;
