import React from "react";
import products from "../assets/product.json";
import { Container } from "react-bootstrap";
import { ShoppingCart, Add } from "@material-ui/icons";
import { connect } from "react-redux";
import { setCurrentProduct, addProduct } from "../actions/actionCreator";
import { withRouter } from "react-router-dom";

const Products = (props) => {
  return (
    <Container className="margin-top" fluid>
      {products.map((product) => {
        return (
          <div className="product" key={product.id}>
            <div className="product-image">
              <img onClick={() => {
                props.handleClick(product.id);
                props.history.push("/productdetail")
              }} src={product.image} alt="I" />
              <div>
                <button onClick={()=>{props.handleAdd(product)}}>
                  <i>
                    <Add />
                  </i>
                </button>
                <button>
                  <i>
                    <ShoppingCart />
                  </i>
                </button>
              </div>
            </div>
            <h5>{product.name}</h5>
            <div className="product-price">
              <span>${product.price}</span>
              <span className="color-red">${product.discount}</span>
            </div>
          </div>
        );
      })}
    </Container>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    handleClick: (id) => dispatch(setCurrentProduct(id)),
    handleAdd:(product)=>dispatch(addProduct(product))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(Products));
