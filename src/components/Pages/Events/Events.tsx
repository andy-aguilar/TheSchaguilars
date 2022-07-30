import React, { FunctionComponent } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";

export const Events: FunctionComponent = () => {
  return (
    <div className="page-container">
      <Header />
      <div className={"page-body"}>Events</div>
      <Footer />
    </div>
  );
};
