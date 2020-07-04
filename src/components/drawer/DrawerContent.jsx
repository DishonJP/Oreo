import React, { useState } from "react";
import { ChevronRight, ExpandMore } from "@material-ui/icons";

const DrawerContent = (props) => {
  const [moreMenu, setMoreMenu] = useState(true);
  return (
    <div className="drawer-content" onClick={() => setMoreMenu(!moreMenu)}>
      <div>
      <i className="icon-space">{props.icon}</i>
      <span>{props.name}</span>
      </div>
      <i>{moreMenu ? <ChevronRight /> : <ExpandMore />}</i>
    </div>
  );
};

export default DrawerContent;
