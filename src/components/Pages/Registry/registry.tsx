import React, { FunctionComponent } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";

export const Registry: FunctionComponent = () => {
  return (
    <div className="page-container">
      <Header />
      <div className={"page-body small"}>
        <h1>Registry</h1>
        <p>Your presence is present enough, but if you must...</p>
        {/* TODO: Add correct link for registry */}
        <a
          className={"directions-link"}
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          <span>Our Registry</span>
        </a>
      </div>
      <Footer pageSize="small" />
    </div>
  );
};
