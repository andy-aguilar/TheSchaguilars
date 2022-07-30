import React, { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainBody from "./components/MainBody/MainBody";

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <h1>Kristin and Andy's Wedding Website</h1>
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="testroute" element={<h1>It worked</h1>} />
      </Routes>
    </div>
  );
};
