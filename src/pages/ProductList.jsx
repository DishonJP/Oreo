import React from "react";
import Layout from "./Layout";
import { Divider } from "@material-ui/core";
import products from "../assets/product.json";
import { Edit, Delete, ArrowBack, ArrowForward } from "@material-ui/icons";

const ProductList = () => {
  const setColor = (name) => {
    switch (name) {
      case "In Stock":
        return "green";
      case "Low Stock":
        return "warning";
      case "Out of Stock":
        return "danger";
      default:
        break;
    }
  };
  return (
    <Layout>
      <div className="list-container">
        <Divider />
        <div className="list-container-head">
          <h1>Image</h1>
          <h2>product Name</h2>
          <h3>Detail</h3>
          <h4>Amount</h4>
          <h5>Stock</h5>
          <h6>Action</h6>
        </div>
        <Divider />
        {products.map((product) => {
          return (
            <React.Fragment>
              <Divider />
              <div className="list-container-body">
                <div className="list-container-body-image">
                  <img src={product.image} alt="A" />
                </div>
                <h6>{product.name}</h6>
                <span className="detail-text">{product.detail}</span>
                <h5>${product.price}</h5>
                <span className={setColor(product.stock)}>{product.stock}</span>
                <div>
                  <i>
                    <Edit />
                  </i>
                  <i>
                    <Delete />
                  </i>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="bottom-nav">
        <i>
          <ArrowBack />
        </i>
        <div className="color">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <i>
          <ArrowForward />
        </i>
      </div>
    </Layout>
  );
};

export default ProductList;
