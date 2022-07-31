import React, { FunctionComponent } from "react";
import "./HomePage.css";
import backgroundImage from "../../../assets/images/backgroundImage.jpeg";
import kristinAndAndy from "../../../assets/images/kristin-and-andy.png";

export interface Props {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const HomePage: FunctionComponent<Props> = ({ setIsMenuOpen }) => {
  return (
    <div
      id={"home-container"}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div id={"home-content"}>
        <img
          onClick={() => setIsMenuOpen(true)}
          src={kristinAndAndy}
          alt={"kristin and andy, antigua, guatemala, 03, 11, 23"}
        ></img>
      </div>
    </div>
  );
};
