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
  { displayName: "The Wedding", url: "/wedding", class: "nav-wedding" },
  { displayName: "The Weekend", url: "/the-weekend", class: "nav-events" },
  {
    displayName: "Travel Information",
    url: "/travel-information",
    class: "nav-travel",
  },
  { displayName: "Hotels", url: "/hotels", class: "nav-hotels" },
  { displayName: "About Antigua", url: "/about-antigua", class: "nav-antigua" },
  { displayName: "Registry", url: "/registry", class: "nav-registry" },
  { displayName: "RSVP", url: "/rsvp", class: "nav-rsvp" },
  { displayName: "FAQs", url: "/faqs", class: "nav-faqs" },
  { displayName: "Kristin and Andy", url: "/about-us", class: "nav-about-us" },
];
export interface Props {
  onNavigate: () => void;
}

export const NavMenu: FunctionComponent<Props> = ({ onNavigate }) => {
  function generateNavLinks(): ReactNode[] {
    return links.map((link) => (
      <li key={link.url} className={"nav-li"}>
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
