import { ThemeProvider } from "@emotion/react";
import React, { FunctionComponent } from "react";
import { MainTheme } from "../../../MainTheme";
import { Header } from "../../ReusableComponents/Header";
import "./Rsvp.css";

export const Rsvp: FunctionComponent = () => {
  return (
    <ThemeProvider theme={MainTheme}>
      <div className="page-container">
        <Header />
        <div className="real-page-body">
          <div
            className="sub-header rsvp"
            style={{
              backgroundImage:
                'url("https://the-schaguilars.s3.us-east-2.amazonaws.com/backgroundImage.jpeg")',
            }}
          >
            <h1>RSVP</h1>
          </div>
          <div className={"page-body rsvp-page"}>
            <h2>The deadline to RSVP has passed</h2>
            <p>
              If you still plan to attend, please email us at{" "}
              <a href="mailto:thefutureaguilars@kristinandandy.com">
                TheFutureAguilars@kristinandandy.com
              </a>{" "}
              <b>immediately</b>,<br /> so that we can add you to the guest
              list!
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
