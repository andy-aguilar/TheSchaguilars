import React from "react";
import { render } from "@testing-library/react";
import { App } from "../App";
import { BrowserRouter } from "react-router-dom";

test("renders the wedding website h1", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
