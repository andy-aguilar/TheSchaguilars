import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import './nav-menu.css'

export interface Props {
  onNavigate: () => void
}

export const NavMenu: FunctionComponent<Props> = ({onNavigate}) => {

  return <div id='nav-menu'>
    <ul>
      <li><NavLink onClick={onNavigate} to={'/'}>Home Page</NavLink></li>
      <li><NavLink onClick={onNavigate} to={'/wedding'} >The Wedding</NavLink></li>
      <li><NavLink onClick={onNavigate} to={'/travel-information'} >Travel Information</NavLink></li>
      <li><NavLink onClick={onNavigate} to={'/about-antigua'} >About Antigua</NavLink></li>
      <li><NavLink onClick={onNavigate} to={'/registry'} >Registry</NavLink></li>
      <li><NavLink onClick={onNavigate} to={'/rsvp'} >RSVP</NavLink></li>
      <li><NavLink onClick={onNavigate} to={'/faqs'} >FAQs</NavLink></li>
    </ul>

  </div>;
};
