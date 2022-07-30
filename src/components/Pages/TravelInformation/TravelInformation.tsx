import React, { FunctionComponent } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";

export const TravelInformation: FunctionComponent = () => {
  return (
    <div className="page-container">
      <Header />
      <div className={"page-body"}>Travel Information</div>
      <Footer />
    </div>
  );
};
