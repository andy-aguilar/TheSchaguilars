import React, {
  FunctionComponent,
  useEffect,
  useState,
  createContext,
  ReactElement,
} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Pages/HomePage/HomePage";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "./components/Menu/Menu";
import { TheWedding } from "./components/Pages/TheWedding/TheWedding";
import { Events } from "./components/Pages/Events/Events";
import { Faqs } from "./components/Pages/Faqs/faqs";
import { TravelInformation } from "./components/Pages/TravelInformation/TravelInformation";
import { AboutAntigua } from "./components/Pages/AboutAntigua/AboutAntigua";
import { Registry } from "./components/Pages/Registry/registry";
import { Hotels } from "./components/Pages/Hotels/Hotels";
import { ThingsToDo } from "./components/Pages/ThingsToDo/ThingsToDo";
import { AboutUs } from "./components/Pages/About Us/AboutUs";
import { useLocation } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import { Rsvp } from "./components/Pages/Rsvp/Rsvp";
import { AdminComponent } from "./components/Admin/Admin";
import { VolcanoHike } from "./components/Pages/VolcanoHike/volcano-hike";

export const ErrorContext = createContext({
  errorMessages: [""],
  setErrorMessages: (error: string[]) => {},
});

export const App: FunctionComponent = () => {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  function getErrorMessages(): ReactElement[] {
    return errorMessages.map((message, index) => (
      <Alert severity="error" key={index}>
        {message}
      </Alert>
    ));
  }

  return (
    <ErrorContext.Provider value={{ errorMessages, setErrorMessages }}>
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

        {/* Error Messages */}

        <Snackbar
          open={errorMessages.length > 0}
          autoHideDuration={6000}
          onClose={() => setErrorMessages([])}
        >
          <div>{getErrorMessages()}</div>
        </Snackbar>

        <Routes>
          <Route
            path="/"
            element={<HomePage setIsMenuOpen={setIsMenuOpen} />}
          />
          <Route path="/wedding" element={<TheWedding />} />
          <Route path="/the-weekend" element={<Events />} />
          <Route path={"/travel-information"} element={<TravelInformation />} />

          <Route path={"/hotels"} element={<Hotels />} />
          <Route path={"/about-antigua"} element={<AboutAntigua />} />
          <Route path={"/registry"} element={<Registry />} />
          <Route path={"/rsvp"} element={<Rsvp />} />
          <Route path={"/rsvp/:rsvpId"} element={<Rsvp />} />
          <Route path={"/faqs"} element={<Faqs />} />
          <Route path={"/things-to-do"} element={<ThingsToDo />} />
          <Route path={"/about-us"} element={<AboutUs />} />
          <Route path={"/volcano-hike"} element={<VolcanoHike />} />
          <Route
            path={"/los-schaguilares/admin"}
            element={<AdminComponent />}
          />
        </Routes>
      </div>
    </ErrorContext.Provider>
  );
};
