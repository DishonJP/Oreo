import React from "react";
import { DataUsage, Assessment, LocalAtm } from "@material-ui/icons";
import ProductLayout from "./ProductLayout";
import { Bar } from "react-chartjs-2";

const ProductReport = () => {
  const mobile = [1, 2, 6, 5, 5, 5, 6, 9, 0, 6, 6, 2];
  const laptop = [0, 1, 3, 5, 1, 2, 2, 3, 4, 6, 6, 5];
  const tablet = [1, 2, 3, 4, 1, 2, 2, 4, 4, 4, 4, 4];
  const version = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const data = {
    labels: version,
    datasets: [
      {
        label: "Mobile",
        data: mobile,
        backgroundColor: "slategrey"
      },
      {
        label: "Laptop",
        data: laptop,
        backgroundColor: "#f3c623"
      },
      {
        label: "Tablet",
        data: tablet,
        backgroundColor: "#8c99e0",
      },
    ]
  };
  const option = {
    animation: {
      duration: 10,
    },
    scales: {
      xAxes: [
        {
          stacked: true,
          gridLines: { display: false },
          barPercentage:.4
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
    legend: { display: true },
  };
  return (
    <ProductLayout name="Product" surName="Report">
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
      <div style={{
        padding:"20px"
      }}>
      <Bar height="130px" data={data} options={option} />
      </div>
    </ProductLayout>
  );
};

export default ProductReport;
