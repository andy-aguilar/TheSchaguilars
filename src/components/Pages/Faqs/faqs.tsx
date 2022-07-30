import React, { FunctionComponent } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";

export const Faqs: FunctionComponent = () => {
  return (
    <div className="page-container">
      <Header />
      <div className={"page-body"}>FAQs</div>
      <Footer />
    </div>
  );
};
