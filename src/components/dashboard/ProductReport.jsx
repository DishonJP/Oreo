import React from "react";
import { DataUsage, Assessment, LocalAtm } from "@material-ui/icons";
import ProductLayout from "./ProductLayout";

const ProductReport = () => {
  return (
    <ProductLayout>
      <div className="report">
        <div className="report-div">
          <i>
            <DataUsage />
          </i>
          <div>
            <span>Sales Report</span>
            <h1>$4,516</h1>
          </div>
        </div>
        <div className="report-div">
          <i>
            <Assessment />
          </i>
          <div>
            <span>Annual Revenue</span>
            <h1>$6,481</h1>
          </div>
        </div>
        <div className="report-div">
          <i>
            <LocalAtm />
          </i>
          <div>
            <span>Total Profit</span>
            <h1>$3,915</h1>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
};

export default ProductReport;
