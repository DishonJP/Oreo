import React from "react";
import { ArrowRightAlt } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const DrawerSubContent = (props) => {
  return (
    <div className={props.color} onClick={props.setColor}>
      <NavLink to={props.link}>
        <i className="icon-space">
          <ArrowRightAlt />
        </i>
        <span>{props.name}</span>
      </NavLink>
    </div>
  );
};

export default DrawerSubContent;
