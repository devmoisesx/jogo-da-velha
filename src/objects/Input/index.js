import React from "react";
import "./styles.css";

const Input = ({ id, value, type = "checkbox" }) => {
  return (
    <>
      <input type={type} id={id} value={value} />
    </>
  );
};

export default Input;
