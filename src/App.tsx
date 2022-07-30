import React, { FunctionComponent, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Pages/HomePage/HomePage";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Menu } from "./components/Menu/Menu";
import { TheWedding } from "./components/Pages/TheWedding/TheWedding";

export const App: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="App">
      <header>
        {/* Menu Icon: */}
        {!isMenuOpen && (
          <MenuIcon
            fontSize="large"
            className="header-icon"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
        {/* Close Icon: */}
        {isMenuOpen && (
          <CloseIcon
            fontSize="large"
            className="header-icon"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </header>

      {/* Menu */}
      {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wedding" element={<TheWedding />} />
        <Route path="/events" element={<h1>Events</h1>} />
        <Route
          path={"/travel-information"}
          element={<h1>Travel Information</h1>}
        />
        <Route path={"/about-antigua"} element={<h1>About Antigua</h1>} />
        <Route path={"/registry"} element={<h1>Registry</h1>} />
        <Route path={"/rsvp"} element={<h1>RSVP</h1>} />
        <Route path={"/faqs"} element={<h1>FAQs</h1>} />
      </Routes>
    </div>
  );
};
