import React, { useState } from 'react'
import { Container } from "react-bootstrap";
import DrawerContent from "./DrawerContent";
import DrawerSubContent from "./DrawerSubContent";
import { Home, Apps, ShoppingCart, Layers } from "@material-ui/icons";

const DrawerOreo = (props) => {
    const [color, setColor] = useState("c");
    const [contentColor, setContentColor] = useState("l");
    const contentChangeColor = (index) => {
      if (contentColor === index) {
        return "drawer-content content-height active";
      }
      return "drawer-content content-height";
    };
    const changeColor = (index) => {
      if (color === index) {
        return "drawer-content active";
      }
      return "drawer-content";
    };
    return (
        <Container className={props.current?"drawer-Oreo":"drawer-Oreo display"}>
        <span className="font-size">--MAIN</span>
        <DrawerContent
          color={changeColor("a")}
          setColor={() => setColor("a")}
          icon={<Home />}
          name="Dashboard"
        >
          <DrawerSubContent
            color={contentChangeColor("a")}
            setColor={() => setContentColor("a")}
            name="Main"
            link="/dashboard"
          />
          <DrawerSubContent
            color={contentChangeColor("b")}
            setColor={() => setContentColor("b")}
            name="RTL"
            link="/dashboard"
          />
          <DrawerSubContent
            color={contentChangeColor("c")}
            setColor={() => setContentColor("c")}
            name="Horizontal"
            link="/dashboard"
          />
          <DrawerSubContent
            color={contentChangeColor("d")}
            setColor={() => setContentColor("d")}
            name="Ecommerce"
            link="/dashboard"
          />
          <DrawerSubContent
            color={contentChangeColor("e")}
            setColor={() => setContentColor("e")}
            name="Blog"
            link="/dashboard"
          />
        </DrawerContent>
        <DrawerContent
          color={changeColor("b")}
          setColor={() => setColor("b")}
          icon={<Apps />}
          name="App"
        >
          <DrawerSubContent
            color={contentChangeColor("f")}
            setColor={() => setContentColor("f")}
            name="Inbox"
            link="/dashboard"
          />
          <DrawerSubContent
            color={contentChangeColor("g")}
            setColor={() => setContentColor("g")}
            name="Chat"
            link="/dashboard"
          />
          <DrawerSubContent
            color={contentChangeColor("h")}
            setColor={() => setContentColor("h")}
            name="Calendar"
            link="/dashboard"
          />
          <DrawerSubContent
            color={contentChangeColor("i")}
            setColor={() => setContentColor("i")}
            name="File Manager"
            link="/dashboard"
          />
          <DrawerSubContent
            color={contentChangeColor("j")}
            setColor={() => setContentColor("j")}
            name="Contact List"
            link="/dashboard"
          />
          <DrawerSubContent
            color={contentChangeColor("k")}
            setColor={() => setContentColor("k")}
            name="Blog"
            link="/dashboard"
          />
        </DrawerContent>
        <DrawerContent
          color={changeColor("c")}
          setColor={() => setColor("c")}
          icon={<ShoppingCart />}
          name="Ecommerce"
        >
          <DrawerSubContent
            color={contentChangeColor("l")}
            setColor={() => setContentColor("l")}
            name="Dashboard"
            link="/dashboard"
          />
          <DrawerSubContent
            color={contentChangeColor("m")}
            setColor={() => setContentColor("m")}
            name="Product"
            link="/product"
          />
          <DrawerSubContent
            color={contentChangeColor("n")}
            setColor={() => setContentColor("n")}
            name="Product List"
            link="/dashboard"
          />
          <DrawerSubContent
            color={contentChangeColor("o")}
            setColor={() => setContentColor("o")}
            name="Product detail"
            link="/dashboard"
          />
        </DrawerContent>
        <DrawerContent
          color={changeColor("d")}
          setColor={() => setColor("d")}
          icon={<Layers />}
          name="User Interface (UI)"
        ></DrawerContent>
      </Container>
    )
}

export default DrawerOreo
