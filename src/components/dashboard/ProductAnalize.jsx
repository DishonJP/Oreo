import React from "react";
import ProductLayout from "./ProductLayout";
import { Line } from "react-chartjs-2";

const ProductAnalize = () => {
  const data = {
    labels: ["", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [3, 2, 5, 3, 3, 6, 3, 5, 0],
        fill: true,
        backgroundColor: "rgb(140,153,224,.5)",
        lineTension: 0,
      },
    ],
  };
  const legend = {
    display: false,
  };

  const options = {
    title: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: { display: false },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: { display: false },
          gridLines: {
            display: false,
            drawBorder: false,
          },
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
        radius: 1,
      },
    },
  };
  return (
    <div className="analize-container">
      <ProductLayout name="Orders" surName="Received" width="32%" close>
        <div className="analize-text">
          <h2>47,012</h2>
          <span>23% Average</span>
        </div>
        <Line height="80px" data={data} legend={legend} options={options} />
      </ProductLayout>
      <ProductLayout name="Total" surName="Received" width="32%" close>
        <div className="analize-text">
          <h2>512</h2>
          <span>18% Average</span>
        </div>
        <Line height="80px" data={data} legend={legend} options={options} />
      </ProductLayout>
      <ProductLayout name="Revenue" width="32%" close>
        <div className="analize-text">
          <h2>1,612</h2>
          <span>13% Average</span>
        </div>
        <Line height="80px" data={data} legend={legend} options={options} />
      </ProductLayout>
    </div>
  );
};

export default ProductAnalize;
