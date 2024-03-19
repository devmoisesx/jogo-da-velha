import React from "react";
import "./styles.css";

const Label = ({ content }) => {
  return (
      <label htmlFor="showEvents">{content}</label>
  );
};

export default Label;