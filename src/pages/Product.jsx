import Products from "../components/Products";
import React from "react";
import Layout from "./Layout";

const Product = () => {
  return (
    <Layout>
      <div className="loading-page">
        <img src="../assets/logo.svg" alt="O" />
      </div>
      <Products />
    </Layout>
  );
};

export default Product;
