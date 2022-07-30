import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../App";

test("renders the wedding website h1", () => {
  render(<App />);
  const heading = screen.getByText(/Kristin and Andy/i);
  expect(heading).toBeInTheDocument();
});
