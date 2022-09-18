import React, { FunctionComponent, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Pages/HomePage/HomePage";
import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
import { Menu } from "./components/Menu/Menu";
import { TheWedding } from "./components/Pages/TheWedding/TheWedding";
import { Events } from "./components/Pages/Events/Events";
import { Faqs } from "./components/Pages/Faqs/faqs";
// import { Rsvp } from "./components/Pages/Rsvp/Rsvp";
import { TravelInformation } from "./components/Pages/TravelInformation/TravelInformation";
import { AboutAntigua } from "./components/Pages/AboutAntigua/AboutAntigua";
import { Registry } from "./components/Pages/Registry/registry";
import { Hotels } from "./components/Pages/Hotels/Hotels";
import { ThingsToDo } from "./components/Pages/ThingsToDo/ThingsToDo";
import { AboutUs } from "./components/Pages/About Us/AboutUs";
import { useLocation } from "react-router-dom";
// import { RsvpSearchForm } from "./components/Pages/Rsvp/RsvpSearchForm";
import { RsvpComingSoon } from "./components/Pages/Rsvp/RsvpComingSoon";

export const App: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      {!isMenuOpen && (
        <header>
          {/* Menu Icon: */}
          <MenuIcon
            fontSize="large"
            className="header-icon"
            onClick={() => setIsMenuOpen(true)}
          />
        </header>
      )}

      {/* Menu */}
      {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}

      <Routes>
        <Route path="/" element={<HomePage setIsMenuOpen={setIsMenuOpen} />} />
        <Route path="/wedding" element={<TheWedding />} />
        <Route path="/the-weekend" element={<Events />} />
        <Route path={"/travel-information"} element={<TravelInformation />} />

        <Route path={"/hotels"} element={<Hotels />} />
        <Route path={"/about-antigua"} element={<AboutAntigua />} />
        <Route path={"/registry"} element={<Registry />} />
        {/* <Route path={"/rsvp"} element={<RsvpSearchForm />} /> */}
        <Route path={"/rsvp"} element={<RsvpComingSoon />} />
        {/* <Route path={"/rsvp/:rsvpId"} element={<Rsvp />} /> */}
        <Route path={"/faqs"} element={<Faqs />} />
        <Route path={"/things-to-do"} element={<ThingsToDo />} />
        <Route path={"/about-us"} element={<AboutUs />} />
      </Routes>
    </div>
  );
};
