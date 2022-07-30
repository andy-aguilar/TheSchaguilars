import React, { FunctionComponent } from "react";
import "./HomePage.css";

export interface Props {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const HomePage: FunctionComponent<Props> = ({ setIsMenuOpen }) => {
  return (
    <div
      id={"home-container"}
      style={{ backgroundImage: `url(/backgroundImage.jpeg)` }}
    >
      <div id={"home-content"}>
        <img
          onClick={() => setIsMenuOpen(true)}
          src={"/kristin-and-andy.png"}
          alt={"kristin and andy, antigua, guatemala, 03, 11, 23"}
        ></img>
      </div>
    </div>
  );
};
