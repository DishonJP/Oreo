import React from "react";
import { ArrowRightAlt } from "@material-ui/icons";

const DrawerSubContent = (props) => {
  return (
    <div className={props.color} onClick={props.setColor}>
      <div>
        <i className="icon-space">
          <ArrowRightAlt />
        </i>
        <span>{props.name}</span>
      </div>
    </div>
  );
};

export default DrawerSubContent;
