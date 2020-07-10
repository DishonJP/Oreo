import React, { useState } from "react";
import { connect } from "react-redux";
import { Home, Person } from "@material-ui/icons";
import DrawerOreo from "./DrawerOreo";
import DrawerUser from "./DrawerUser";
import { handleDrawer } from "../../actions/actionCreator";

const Drawer = (props) => {
  const [current, setCurrent] = useState(true);

  return (
    <div id="drawer" onClick={(event) =>{
      if (event.target.id==="drawer") {
        props.closeDrawer()
      }
    }} className={props.openDrawer ? "drawer-cover-container" : "drawer-cover-container drawer-cover-open"}>
      <div
        className={
          !props.openDrawer ? "drawer-container open-drawer" : "drawer-container drawer-close"
        }
      >
        <div className="nav-buttons">
          <button
            onClick={() => setCurrent(true)}
            className={current ? " active" : ""}
          >
            <Home />
          Oreo
        </button>
          <button
            onClick={() => setCurrent(false)}
            className={current ? "" : " active"}
          >
            <Person />
          User
        </button>
        </div>
        <DrawerOreo current={current} />
        <DrawerUser current={current} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    openDrawer: state.openDrawer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeDrawer: () => dispatch(handleDrawer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
