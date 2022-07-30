import React, { FunctionComponent } from "react";
import './menu.css'

export interface Props {
    setIsMenuOpen:(isMenuOpen: boolean) => void
}

export const Menu: FunctionComponent<Props> = ({setIsMenuOpen}) => {
  return <div id='menu-container' onClick={() => setIsMenuOpen(false)}>Menu</div>;
};
