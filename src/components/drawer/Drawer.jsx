import React, { useState } from "react";
import { connect } from "react-redux";
import { Home, Person } from "@material-ui/icons";
import DrawerOreo from "./DrawerOreo";
import DrawerUser from "./DrawerUser";

const Drawer = (props) => {
  const [current, setCurrent] = useState(true);

  return (
    <div
      className={
        props.openDrawer ? "drawer-container" : "drawer-container drawer-close"
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
  );
};

const mapStateToProps = (state) => {
  return {
    openDrawer: state.openDrawer,
  };
};

export default connect(mapStateToProps)(Drawer);
