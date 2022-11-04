import React, { FunctionComponent } from "react";
import { Header } from "../../ReusableComponents/Header";
import { Footer } from "../../ReusableComponents/Footer";
import "./the-wedding.css";

export const TheWedding: FunctionComponent = () => {
  return (
    <div className={"page-container"}>
      <Header />
      <div className="real-page-body">
        <div
          className="sub-header"
          style={{
            backgroundImage: `url("https://the-schaguilars.s3.us-east-2.amazonaws.com/backgroundImage.jpeg")`,
          }}
        >
          <h1>03&nbsp;&nbsp;11&nbsp;&nbsp;23</h1>
        </div>
        <div className="page-body" id="wedding-page">
          <div className="wedding-events">
            <div className="wedding-event">
              <h3>THE WEDDING</h3>
              <p>
                Antigua, Guatemala
                <br />
                March 11, 2023
                <br />
                Formal Attire
              </p>
            </div>
            <div className="wedding-event">
              <h3>THE CEREMONY</h3>
              <p>
                Convento Santa Clara
                <br />
                Ceremony begins at three o'clock
              </p>
            </div>
            <div className="wedding-event" style={{ borderBottom: "none" }}>
              <h3>THE RECEPTION</h3>
              <p>
                Pensativo House Hotel
                <br />
                Reception begins at five o'clock
              </p>
            </div>
          </div>

          <Footer pageSize="large" />
        </div>
      </div>
    </div>
  );
};
