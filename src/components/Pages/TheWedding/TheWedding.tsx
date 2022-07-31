import React, { FunctionComponent } from "react";
import { Header } from "../../ReusableComponents/Header";
import { Footer } from "../../ReusableComponents/Footer";
import "./the-wedding.css";
import backgroundImage from "../../../assets/images/backgroundImage.jpeg";

export const TheWedding: FunctionComponent = () => {
  return (
    <div className={"page-container"}>
      <Header />

      <div className="page-body" id="wedding-page">
        <div
          className="date"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h2>03&nbsp;&nbsp;11&nbsp;&nbsp;23</h2>
        </div>
        <div className="wedding-event">
          <h3>THE WEDDING</h3>
          <p>Antigua, Guatemala</p>
          <p>{"03 11 2023"}</p>
          <p>Formal Attire</p>
        </div>
        <div className="wedding-event">
          <h3>THE CEREMONY</h3>
          <p>Convento Santa Clara</p>
          <p>Av. Sur at 6 Calle Oriente 2, Antigua, Guatemala</p>
          <p>Ceremony begins at four o'clock</p>
        </div>
        <div className="wedding-event" style={{ borderBottom: "none" }}>
          <h3>THE RECEPTION</h3>
          <p>Pensativo House Hotel</p>
          <p>4 Avenida Sur, Antigua, Guatemala</p>
          <p>
            Shuttle service will be provided from the ceremony to the reception
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
};
