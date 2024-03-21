import React from "react";

const AboutLists = ({ item, title, image, isReversed }) => {
  return (
    <div className="about-content-container">
      <div className={`about-text ${isReversed ? "reversed" : ""}`}>
        <h3>{title}</h3>
        <ul>
          {item.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong>
              {item.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="about-image">
        <div>
          <img src={image}></img>
        </div>
        <div
          className={`blue-square ${isReversed ? "" : "blue-square-left"}`}
        ></div>
      </div>
    </div>
  );
};

export default AboutLists;
