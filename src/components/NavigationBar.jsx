import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import Logo from "../assets/logo.svg";
import {SyncAlt,CalendarToday,Email,ContactPhone,Notifications,Flag} from '@material-ui/icons';

const NavigationBar = () => {
  return (
    <Navbar className="nav-container">
      <Image className="logo" src={Logo} alt="logo"/>
      <h2>OREO</h2>
      <i><SyncAlt /></i>
      <i><CalendarToday/></i>
      <i><Email/></i>
      <i><ContactPhone/></i>
      <i><Notifications/></i>
      <i><Flag/></i>
    </Navbar>
  );
};

export default NavigationBar;
