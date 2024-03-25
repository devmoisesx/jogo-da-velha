import React from "react";
import "./styles.css";
import Label from "../Label";

const Input = ({ id, value, content, type = "checkbox"}) => {
  return (
    <>
      <input type={type} id={id} value={value} />
      <Label htmlFor={id} content={content} />
    </>
  );
};

export default Input;
