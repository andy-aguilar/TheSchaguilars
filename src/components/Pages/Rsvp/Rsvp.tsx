import React, { FunctionComponent } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";

export const Rsvp: FunctionComponent = () => {
  return (
    <div className="page-container">
      <Header />
      <div className={"page-body"}>
        <h1>RSVP</h1>
        <h1>COMING SOON</h1>
      </div>
      <Footer />
    </div>
  );
};
