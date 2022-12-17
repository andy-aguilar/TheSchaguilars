import React, { FunctionComponent } from "react";
import { Header } from "../../ReusableComponents/Header";
import { Footer } from "../../ReusableComponents/Footer";
import "./volcano-hike.css";

export const VolcanoHike: FunctionComponent = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="real-page-body">
        <div
          className="sub-header"
          style={{
            backgroundImage:
              'url("https://the-schaguilars.s3.us-east-2.amazonaws.com/backgroundImage.jpeg")',
          }}
        >
          <h1>Volcano Hike</h1>
        </div>
        <div className={"page-body large volcano"}>
          <p>
            Join us on Friday, March 10 for a hike to the top of Pacaya Volcano!
            We will be departing in shuttles Pensativo House Hotel and Porta
            Hotel to the base of the volcano, then doing a 1.5 hour hike to the
            top, where we may be able to roast some marshmallows over lava.
          </p>
          <h3>Instructions for booking tour</h3>
          <ol className="volcano-instructions">
            <li>
              Follow{" "}
              <a
                href={
                  "https://antiguatours.net/weddings/aguilar-schallhorn-wedding/"
                }
                target="_blank"
                rel="noreferrer"
              >
                this link
              </a>
              .
            </li>
            <li>
              At the bottom of that page, click "Private Volcano Climb of
              Pacaya."
            </li>
            <li>
              A modal should pop up where you can select number of tickets.
            </li>
            <li>Select your number of tickets and click "Add to cart."</li>
            <li>Go to your cart and checkout.</li>
            <li>
              Pack your hiking shoes (or really any comfortable shoes, it should
              be an easy hike).
            </li>
          </ol>
        </div>
        <Footer />
      </div>
    </div>
  );
};
