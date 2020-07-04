import React, { useState } from "react";
import { connect } from "react-redux";
import { Home, Person, Apps,ShoppingCart,Layers } from "@material-ui/icons";
import { Container } from "react-bootstrap";
import DrawerContent from "./DrawerContent";

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
      <Container>
        <span className="font-size">--MAIN</span>
        <DrawerContent icon={<Home />} name="Dashboard" />
        <DrawerContent icon={<Apps />} name="App" />
        <DrawerContent icon={<ShoppingCart />} name="Ecommerce" />
        <DrawerContent icon={<Layers />} name="User Interface (UI)" />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    openDrawer: state.openDrawer,
  };
};

export default connect(mapStateToProps)(Drawer);
