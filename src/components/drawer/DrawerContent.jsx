import React, { useState } from "react";
import { ChevronRight, ExpandMore } from "@material-ui/icons";

const DrawerContent = (props) => {
  const [moreMenu, setMoreMenu] = useState(true);
  return (
    <React.Fragment>
      <div
        className={props.color}
        onClick={() => {
          setMoreMenu(!moreMenu);
          props.setColor();
        }}
      >
        <div>
          <i className="icon-space">{props.icon}</i>
          <span>{props.name}</span>
        </div>
        <i>{moreMenu ? <ChevronRight /> : <ExpandMore />}</i>
      </div>
      <div className={moreMenu ? "sub-content hide-content" : "sub-content"}>{props.children}</div>
    </React.Fragment>
  );
};

export default DrawerContent;
