import React, { FunctionComponent } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";

export const AboutAntigua: FunctionComponent = () => {
  return (
    <div className="page-container">
      <Header />
      <div className={"page-body"}>About Antigua</div>
      <Footer />
    </div>
  );
};
