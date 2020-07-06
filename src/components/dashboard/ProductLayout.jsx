import React from "react";
import { Container } from "react-bootstrap";
import { MoreHoriz, Close } from "@material-ui/icons";

const ProductLayout = (props) => {
  return (
    <div className="container-style">
      <div className="container-div">
        <div className="text">
          <span className="text-span">{props.name} </span>
          <span>{props.surName}</span>
        </div>
        <div>
          <i>
            <MoreHoriz />
          </i>
          <i>
            <Close />
          </i>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default ProductLayout;
