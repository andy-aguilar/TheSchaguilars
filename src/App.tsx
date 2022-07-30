import React, { FunctionComponent, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Pages/HomePage/HomePage";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Menu } from "./components/Menu/Menu";
import { TheWedding } from "./components/Pages/TheWedding/TheWedding";
import { Events } from "./components/Pages/Events/Events";
import { Faqs } from "./components/Pages/Faqs/faqs";
import { Rsvp } from "./components/Pages/Rsvp/Rsvp";
import { TravelInformation } from "./components/Pages/TravelInformation/TravelInformation";
import { AboutAntigua } from "./components/Pages/AboutAntigua/AboutAntigua";
import { Registry } from "./components/Pages/Registry/registry";

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
        <Route path="/events" element={<Events />} />
        <Route path={"/travel-information"} element={<TravelInformation />} />
        <Route path={"/about-antigua"} element={<AboutAntigua />} />
        <Route path={"/registry"} element={<Registry />} />
        <Route path={"/rsvp"} element={<Rsvp />} />
        <Route path={"/faqs"} element={<Faqs />} />
      </Routes>
    </div>
  );
};
