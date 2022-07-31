import React, { FunctionComponent } from "react";
import "./HomePage.css";

export interface Props {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const HomePage: FunctionComponent<Props> = ({ setIsMenuOpen }) => {
  return (
    <div
      id={"home-container"}
      style={{
        backgroundImage: `url("https://the-schaguilars.s3.us-east-2.amazonaws.com/backgroundImage.jpeg")`,
      }}
    >
      <div id={"home-content"}>
        <img
          onClick={() => setIsMenuOpen(true)}
          src="https://the-schaguilars.s3.us-east-2.amazonaws.com/kristin-and-andy.png"
          alt="kristin and andy, antigua, guatemala, 03, 11, 23"
        ></img>
      </div>
    </div>
  );
};
