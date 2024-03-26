import React from "react";
import "./styles.css";
import Photo from "../Photo";
import SocialNetworks from "../SocialNetworks";

const About = () => {
  return (
    <article className="about">
      <Photo />
      <h2>Moisés Xavier</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        venenatis consequat turpis non hendrerit. Orci varius natoque penatibus
      </p>
      <SocialNetworks />
    </article>
  );
};

export default About;
