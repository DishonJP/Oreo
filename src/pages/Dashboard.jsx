import React from "react";
import Layout from "./Layout";
import ProductReport from "../components/dashboard/ProductReport";
import ProductAnalize from "../components/dashboard/ProductAnalize";
import ProductAnnualAndTotal from "../components/dashboard/ProductAnnualAndTotal";
import TopSellingCountry from "../components/dashboard/TopSellingCountry";
import CustomerProfile from "../components/dashboard/CustomerProfile";

const Dashboard = () => {
  return (
    <Layout>
        <div className="loading-page">
            <img src="../assets/logo.svg" alt="O"/>
        </div>
      <div style={{ top: "-110px", position: "relative" }}>
        <ProductReport />
        <ProductAnalize />
        <ProductAnnualAndTotal />
        <TopSellingCountry />
        <CustomerProfile/>
      </div>
    </Layout>
  );
};

export default Dashboard;
