import React, { FunctionComponent, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "./nav-menu.css";

interface Link {
  displayName: string;
  url: string;
  class: string;
}

const links: Link[] = [
  { displayName: "Home Page", url: "/", class: "nav-home" },
  { displayName: "RSVP", url: "/rsvp", class: "nav-rsvp" },
  { displayName: "The Wedding", url: "/wedding", class: "nav-wedding" },
  { displayName: "Events", url: "/events", class: "nav-events" },
  {
    displayName: "Travel Information",
    url: "/travel-information",
    class: "nav-travel",
  },
  { displayName: "Hotels", url: "/hotels", class: "nav-hotels" },
  { displayName: "About Antigua", url: "/about-antigua", class: "nav-antigua" },
  { displayName: "Registry", url: "/registry", class: "nav-registry" },
  { displayName: "FAQs", url: "/faqs", class: "nav-faqs" },
  { displayName: "Things To Do", url: "/things-to-do", class: "nav-things" },
];
export interface Props {
  onNavigate: () => void;
}

export const NavMenu: FunctionComponent<Props> = ({ onNavigate }) => {
  function generateNavLinks(): ReactNode[] {
    return links.map((link) => (
      <li key={link.url}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `selected ${link.class}` : link.class
          }
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
