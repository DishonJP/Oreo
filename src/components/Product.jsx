import React from "react";
import products from "../assets/product.json";
import { Container } from "react-bootstrap";
import { ShoppingCart, Add } from "@material-ui/icons";

const Product = () => {
  return (
    <Container className="margin-top" fluid>
      {products.map((product) => {
        return (
          <div className="product" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt="I" />
              <div>
                <button>
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

export default Product;
