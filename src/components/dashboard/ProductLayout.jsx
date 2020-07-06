import React from 'react'
import { Container } from "react-bootstrap";
import {
  MoreHoriz,
  Close
} from "@material-ui/icons";

const ProductLayout = (props) => {
    return (
        <Container className="container-style">
        <div className="container-div">
          <div className="text">
          <span className="text-span">Product </span>
          <span>Report</span>
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
      </Container>
    )
}

export default ProductLayout
