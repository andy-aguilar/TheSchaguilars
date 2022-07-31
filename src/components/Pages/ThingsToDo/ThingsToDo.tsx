import React, { FunctionComponent } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";

export const ThingsToDo: FunctionComponent = () => {
  return (
    <div className="page-container">
      <Header />
      <div className={"page-body"}></div>
      <Footer size="small" />
    </div>
  );
};
