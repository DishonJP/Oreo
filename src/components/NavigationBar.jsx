import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import Logo from "../assets/logo.svg";
import {
  SyncAlt,
  CalendarToday,
  Email,
  ContactPhone,
  Notifications,
  Flag,
  Search,
  PowerSettingsNew,
  Settings,
} from "@material-ui/icons";
import { connect } from "react-redux";
import { handleDrawer, search } from "../actions/actionCreator";

const NavigationBar = (props) => {
  return (
    <Navbar className="nav-container">
      <div className="flex">
        <Image className="logo" src={Logo} alt="logo" />
        <h2>OREO</h2>
        <i onClick={props.handleDrawer}>
          <SyncAlt />
        </i>
        <i>
          <CalendarToday />
        </i>
        <i>
          <Email />
        </i>
        <i>
          <ContactPhone />
        </i>
        <i>
          <Notifications />
        </i>
        <i>
          <Flag />
        </i>
        <div className="search-box">
          <input placeholder="Search..." value={props.search} onChange={(e)=>{
            console.log(e.target.value);
            props.handleSearch(e.target.value)
          }} />
          <i>
            <Search />
            
          </i>
        </div>
      </div>
      <div className="flex">
        <i>
          <PowerSettingsNew />
        </i>
        <i>
          <Settings className="spinner" />
        </i>
      </div>
    </Navbar>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleDrawer: () => dispatch(handleDrawer()),
    handleSearch:(value)=>dispatch(search(value))
  };
};

const mapStateToProps=(state)=>{
  return{
    search:state.search
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
