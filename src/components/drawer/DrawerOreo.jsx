import React, { useState } from "react";
import { Container } from "react-bootstrap";
import DrawerContent from "./DrawerContent";
import DrawerSubContent from "./DrawerSubContent";
import { Home, Apps, ShoppingCart, Layers } from "@material-ui/icons";
import { connect } from "react-redux";
import { activeContent, activeSubContent } from "../../actions/actionCreator";

const DrawerOreo = (props) => {
  const contentChangeColor = (index) => {
    if (props.subContent === index) {
      return "drawer-content content-height active";
    }
    return "drawer-content content-height";
  };
  const changeColor = (index) => {
    if (props.content === index) {
      return "drawer-content active";
    }
    return "drawer-content";
  };
  return (
    <Container
      className={props.current ? "drawer-Oreo" : "drawer-Oreo display"}
    >
      <span className="font-size">--MAIN</span>
      <DrawerContent
        color={changeColor("a")}
        setColor={() => props.changeContent("a")}
        icon={<Home />}
        name="Dashboard"
      >
        <DrawerSubContent
          color={contentChangeColor("a")}
          setColor={() => props.changeSubContent("a")}
          name="Main"
          link="/dashboard"
        />
        <DrawerSubContent
          color={contentChangeColor("b")}
          setColor={() => props.changeSubContent("b")}
          name="RTL"
          link="/dashboard"
        />
        <DrawerSubContent
          color={contentChangeColor("c")}
          setColor={() => props.changeSubContent("c")}
          name="Horizontal"
          link="/dashboard"
        />
        <DrawerSubContent
          color={contentChangeColor("d")}
          setColor={() => props.changeSubContent("d")}
          name="Ecommerce"
          link="/dashboard"
        />
        <DrawerSubContent
          color={contentChangeColor("e")}
          setColor={() => props.changeSubContent("e")}
          name="Blog"
          link="/dashboard"
        />
      </DrawerContent>
      <DrawerContent
        color={changeColor("b")}
        setColor={() => props.changeContent("b")}
        icon={<Apps />}
        name="App"
      >
        <DrawerSubContent
          color={contentChangeColor("f")}
          setColor={() => props.changeSubContent("f")}
          name="Inbox"
          link="/dashboard"
        />
        <DrawerSubContent
          color={contentChangeColor("g")}
          setColor={() => props.changeSubContent("g")}
          name="Chat"
          link="/dashboard"
        />
        <DrawerSubContent
          color={contentChangeColor("h")}
          setColor={() => props.changeSubContent("h")}
          name="Calendar"
          link="/dashboard"
        />
        <DrawerSubContent
          color={contentChangeColor("i")}
          setColor={() => props.changeSubContent("i")}
          name="File Manager"
          link="/dashboard"
        />
        <DrawerSubContent
          color={contentChangeColor("j")}
          setColor={() => props.changeSubContent("j")}
          name="Contact List"
          link="/dashboard"
        />
        <DrawerSubContent
          color={contentChangeColor("k")}
          setColor={() => props.changeSubContent("k")}
          name="Blog"
          link="/dashboard"
        />
      </DrawerContent>
      <DrawerContent
        color={changeColor("c")}
        setColor={() => props.changeContent("c")}
        icon={<ShoppingCart />}
        name="Ecommerce"
      >
        <DrawerSubContent
          color={contentChangeColor("l")}
          setColor={() => props.changeSubContent("l")}
          name="Dashboard"
          link="/dashboard"
        />
        <DrawerSubContent
          color={contentChangeColor("m")}
          setColor={() => props.changeSubContent("m")}
          name="Product"
          link="/product"
        />
        <DrawerSubContent
          color={contentChangeColor("n")}
          setColor={() => props.changeSubContent("n")}
          name="Product List"
          link="/dashboard"
        />
        <DrawerSubContent
          color={contentChangeColor("o")}
          setColor={() => props.changeSubContent("o")}
          name="Product detail"
          link="/dashboard"
        />
      </DrawerContent>
      <DrawerContent
        color={changeColor("d")}
        setColor={() => props.changeContent("d")}
        icon={<Layers />}
        name="User Interface (UI)"
      ></DrawerContent>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    content: state.drawer.content,
    subContent: state.drawer.subContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeContent: (index) => dispatch(activeContent(index)),
    changeSubContent: (index) => dispatch(activeSubContent(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerOreo);
