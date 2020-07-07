import React from "react";
import ProductLayout from "./ProductLayout";
import { Line, Doughnut } from "react-chartjs-2";

const ProductAnnualAndTotal = () => {
  const data = {
    labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017"],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: "rgba(255, 192, 203,0.9)",
      },
      {
        data: [18, 41, 30, 59, 76, 57, 95],
        backgroundColor: "rgba(255,213,154,0.9)",
      },
    ],
  };
  const options = {
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    title: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {},
        },
      ],
    },
    layout: {
      padding: {
        top: 20,
        left: 15,
        right: 15,
      },
    },
    elements: {
      point: {
        radius: 2,
      },
    },
  };

  const legend = {
    display: false,
  };
  const donutOptions = {
    cutoutPercentage: 85,
    title: {
      display: false,
    },
    layout: {
      padding: {
        top: 20,
        left: 15,
        right: 15,
      },
    },
  };
  const donutData = {
    labels: [""],
    datasets: [
      {
        data: [61],
        backgroundColor: ["#FFCE56"],
        hoverBackgroundColor: ["#FFCE56"],
      },
    ],
    text: "23%",
  };
  return (
    <div className="annual-container">
      <ProductLayout name="Annual" surName="Report" width="65%">
        <Line data={data} options={options} legend={legend} />
      </ProductLayout>
      <ProductLayout name="Total" surName="Revenue" width="31.5%">
        <Doughnut legend={legend} data={donutData} options={donutOptions} />
      </ProductLayout>
    </div>
  );
};

export default ProductAnnualAndTotal;
