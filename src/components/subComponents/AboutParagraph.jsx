import React from "react";

const AboutParagraph = ({ item, image }) => {
  return (
    <div className="about-content-container">
      <div className="about-image">
        <div>
          <img src={image}></img>
        </div>
        <div className="blue-square"></div>
      </div>
      <div className="about-text">
        {item.map((item) => (
          <h3>{item.title}</h3>
        ))}
        {item.map((item) => (
          <p>{item.description}</p>
        ))}
      </div>
    </div>
  );
};

export default AboutParagraph;
