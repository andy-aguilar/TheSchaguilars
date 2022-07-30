import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../App";
import { BrowserRouter } from "react-router-dom";

test("renders the wedding website h1", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const heading = screen.getByText(/Kristin and Andy/i);
  expect(heading).toBeInTheDocument();
});
