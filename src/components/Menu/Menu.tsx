import React, { FunctionComponent, useEffect, useState } from "react";
import "./menu.css";
import { CSSTransition } from "react-transition-group";

export interface Props {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const Menu: FunctionComponent<Props> = ({ setIsMenuOpen }) => {
  // State
  const [shouldShowDivs, setShouldShowDivs] = useState<boolean>(false);

  useEffect(() => {
    setShouldShowDivs(true);
  }, []);

  // TODO: add logic to navigate and close
  function closeMenu(): void {
    setIsMenuOpen(false);
  }

  return (
    <div id="menu-container">
      <div className="image-container">
        <CSSTransition
          in={shouldShowDivs}
          timeout={400}
          classNames={"image"}
          unmountOnExit
          onExited={closeMenu}
        >
          <div style={{ backgroundImage: `url(/backgroundImage.jpeg)` }}></div>
        </CSSTransition>
      </div>
      <div className={"nav-menu-container"}>
        <CSSTransition
          in={shouldShowDivs}
          timeout={400}
          classNames="nav-menu"
          unmountOnExit
          onExited={closeMenu}
        >
          <div>
            <button onClick={() => setShouldShowDivs(false)}></button>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};
