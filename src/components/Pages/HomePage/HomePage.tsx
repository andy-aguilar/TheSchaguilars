import React, { FunctionComponent } from "react";
import "./HomePage.css";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface Props {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const narrowLogo: string =
  "https://the-schaguilars.s3.us-east-2.amazonaws.com/kristinandandynarrowlogo.png";
const wideLogo: string =
  "https://the-schaguilars.s3.us-east-2.amazonaws.com/kristin-and-andy.png";

export const HomePage: FunctionComponent<Props> = ({ setIsMenuOpen }) => {
  const narrow = useMediaQuery("(max-width:768px)");

  function generateImageUrl(): string {
    return narrow ? narrowLogo : wideLogo;
  }

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
          src={generateImageUrl()}
          alt="kristin and andy, antigua, guatemala, 03, 11, 23"
        ></img>
      </div>
    </div>
  );
};
