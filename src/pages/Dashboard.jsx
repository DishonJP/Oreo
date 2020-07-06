import React from "react";
import Layout from "./Layout";
import ProductReport from "../components/dashboard/ProductReport";

const Dashboard = () => {
  return (
    <Layout>
      <div style={{ top: "-90px", position: "relative" }}>
        <ProductReport />
      </div>
    </Layout>
  );
};

export default Dashboard;
