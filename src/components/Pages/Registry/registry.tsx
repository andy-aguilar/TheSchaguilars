import React, { FunctionComponent } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";
import { useMediaQuery } from "@mui/material";

export const Registry: FunctionComponent = () => {
  const short = useMediaQuery("(max-height:720px)");

  return (
    <div className="page-container">
      <Header />
      <div className="real-page-body">
        <div
          className="sub-header"
          style={{
            backgroundImage: `url("https://the-schaguilars.s3.us-east-2.amazonaws.com/backgroundImage.jpeg")`,
          }}
        >
          <h1>Registry</h1>
        </div>
        <div className={"page-body small"}>
          <p>Your presence is present enough, but if you must...</p>
          <a
            className={"directions-link"}
            href="https://www.zola.com/registry/theschaguilars"
            target="_blank"
            rel="noreferrer"
          >
            <span>Our Registry</span>
          </a>
        </div>
        <Footer pageSize={short ? "large" : "small"} />
      </div>
    </div>
  );
};
