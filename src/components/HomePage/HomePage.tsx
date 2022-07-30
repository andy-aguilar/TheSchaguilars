import React from "react";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div
      id={"home-container"}
      style={{ backgroundImage: `url(/backgroundImage.jpeg)` }}
    >
      <div id={"home-content"}>
        <h1>
          Kristin <span>and</span> Andy
        </h1>
        <p>Antigua Guatemala</p>
        <p>03/11/23</p>
      </div>
    </div>
  );
};
