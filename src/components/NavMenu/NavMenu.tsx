import React, { FunctionComponent, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "./nav-menu.css";

const links: { displayName: string; url: string }[] = [
  { displayName: "Home Page", url: "/" },
  { displayName: "RSVP", url: "/rsvp" },
  { displayName: "The Wedding", url: "/wedding" },
  { displayName: "Events", url: "/events" },
  { displayName: "Travel Information", url: "/travel-information" },
  { displayName: "Hotels", url: "/hotels" },
  { displayName: "About Antigua", url: "/about-antigua" },
  { displayName: "Registry", url: "/registry" },
  { displayName: "FAQs", url: "/faqs" },
  { displayName: "Things To Do", url: "/things-to-do" },
];
export interface Props {
  onNavigate: () => void;
}

export const NavMenu: FunctionComponent<Props> = ({ onNavigate }) => {
  function generateNavLinks(): ReactNode[] {
    return links.map((link) => (
      <li key={link.url}>
        <NavLink
          className={({ isActive }) => (isActive ? "selected" : undefined)}
          onClick={onNavigate}
          to={link.url}
        >
          <span>{link.displayName}</span>
        </NavLink>
      </li>
    ));
  }

  return (
    <div id="nav-menu">
      <ul>{generateNavLinks()}</ul>
    </div>
  );
};
