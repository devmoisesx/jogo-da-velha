import React from "react";
import "./styles.css";

const Label = ({ htmlFor, content }) => {
  return <label htmlFor={htmlFor}>{content}</label>;
};

export default Label;
