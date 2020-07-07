import React from "react";
import Layout from "./Layout";
import ProductReport from "../components/dashboard/ProductReport";
import ProductAnalize from "../components/dashboard/ProductAnalize";
import ProductAnnualAndTotal from "../components/dashboard/ProductAnnualAndTotal";

const Dashboard = () => {
  return (
    <Layout>
      <div style={{ top: "-110px", position: "relative" }}>
        <ProductReport />
        <ProductAnalize/>
        <ProductAnnualAndTotal/>
      </div>
    </Layout>
  );
};

export default Dashboard;
