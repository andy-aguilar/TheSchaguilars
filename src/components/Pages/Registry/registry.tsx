import React, { FunctionComponent } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";

export const Registry: FunctionComponent = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="real-page-body">
        <div className={"page-body small"}>
          <h1>Registry</h1>
          <p>Your presence is present enough, but if you must...</p>
          <a
            className={"directions-link"}
            href="https://www.zola.com/registry/theschaguilars"
            target="_blank"
            rel="noreferrer"
          >
            <span>Our Registry</span>
          </a>
        </div>
      </div>
      <Footer pageSize="small" />
    </div>
  );
};
