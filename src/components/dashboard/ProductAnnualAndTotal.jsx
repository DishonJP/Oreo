import React from "react";
import ProductLayout from "./ProductLayout";
import { Line, Doughnut } from "react-chartjs-2";
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function () {
    originalDoughnutDraw.apply(this, arguments);

    var chart = this.chart.chart;
    var ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;

    var fontSize = (height / 110).toFixed(1);
    ctx.font = fontSize + "em Verdana";
    ctx.textBaseline = "middle";

    var text = chart.config.data.text,
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;

    ctx.fillText(text, textX, textY);
  }
});

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
        data: [61, 39],
        backgroundColor: ["#000"],
        hoverBackgroundColor: ["#000"],
      },
    ],
    text: "61%",
  };
  return (
    <div className="annual-container">
      <ProductLayout name="Annual" surName="Report" width="65%">
        <Line data={data} options={options} legend={legend} />
      </ProductLayout>
      <ProductLayout name="Total" surName="Revenue" width="31.5%">
        <div className="donut">
        <h2>Total Sale</h2>
        <h6>2,45,124</h6>
        <Doughnut legend={legend} data={donutData} options={donutOptions} />
        <h5>SATISFICATION RATE</h5>
        <span>47% Average</span>
        </div>
      </ProductLayout>
    </div>
  );
};

export default ProductAnnualAndTotal;
