import React from "react";
import Layout from "./Layout";
import ProductReport from "../components/dashboard/ProductReport";
import ProductAnalize from "../components/dashboard/ProductAnalize";

const Dashboard = () => {
  return (
    <Layout>
      <div style={{ top: "-110px", position: "relative" }}>
        <ProductReport />
        <ProductAnalize/>
      </div>
    </Layout>
  );
};

export default Dashboard;
