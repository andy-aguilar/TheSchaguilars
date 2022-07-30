import React, { FunctionComponent, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Menu } from "./components/Menu/Menu";

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
        <Route path="testroute" element={<h1>It worked</h1>} />
      </Routes>
    </div>
  );
};
