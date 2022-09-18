import "./Rsvp.css";
import React, { FunctionComponent } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";

export const RsvpComingSoon: FunctionComponent = () => {
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
          <h1>RSVP</h1>
        </div>
        <div className={"page-body small"}>
          <h1>Coming Soon</h1>
        </div>
        <Footer pageSize="small" />
      </div>
    </div>
  );
};
