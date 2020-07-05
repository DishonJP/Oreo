import React, { useState } from 'react'
import { Container } from "react-bootstrap";
import DrawerContent from "./DrawerContent";
import DrawerSubContent from "./DrawerSubContent";
import { Home, Apps, ShoppingCart, Layers } from "@material-ui/icons";

const DrawerOreo = (props) => {
    const [color, setColor] = useState("a");
    const [contentColor, setContentColor] = useState(null);
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
          />
          <DrawerSubContent
            color={contentChangeColor("b")}
            setColor={() => setContentColor("b")}
            name="RTL"
          />
          <DrawerSubContent
            color={contentChangeColor("c")}
            setColor={() => setContentColor("c")}
            name="Horizontal"
          />
          <DrawerSubContent
            color={contentChangeColor("d")}
            setColor={() => setContentColor("d")}
            name="Ecommerce"
          />
          <DrawerSubContent
            color={contentChangeColor("e")}
            setColor={() => setContentColor("e")}
            name="Blog"
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
          />
          <DrawerSubContent
            color={contentChangeColor("g")}
            setColor={() => setContentColor("g")}
            name="Chat"
          />
          <DrawerSubContent
            color={contentChangeColor("h")}
            setColor={() => setContentColor("h")}
            name="Calendar"
          />
          <DrawerSubContent
            color={contentChangeColor("i")}
            setColor={() => setContentColor("i")}
            name="File Manager"
          />
          <DrawerSubContent
            color={contentChangeColor("j")}
            setColor={() => setContentColor("j")}
            name="Contact List"
          />
          <DrawerSubContent
            color={contentChangeColor("k")}
            setColor={() => setContentColor("k")}
            name="Blog"
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
          />
          <DrawerSubContent
            color={contentChangeColor("m")}
            setColor={() => setContentColor("m")}
            name="Product"
          />
          <DrawerSubContent
            color={contentChangeColor("n")}
            setColor={() => setContentColor("n")}
            name="Product List"
          />
          <DrawerSubContent
            color={contentChangeColor("o")}
            setColor={() => setContentColor("o")}
            name="Product detail"
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
