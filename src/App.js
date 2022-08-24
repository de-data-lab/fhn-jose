import logo from "./logo.svg";
import React, { useEffect, useState } from "react";

import BarChartPay from "./components/BarChartPay";
import BarChartSpend from "./components/BarChartSpend";
import "./App.css";


import fhnData from "./data/39.csv";
import fhnDataSpend from "./data/36.csv";
import { csv, reduce } from "d3";

function App() {
  const [data, setData] = useState(null);
  const [keys, setKeys] = useState([]);
  const [data2, setData2] = useState(null);
  const [keys2, setKeys2] = useState([]);
  const colors = {
    'Pay all of our bills on time': 'red',
    'Pay nearly all of our bills on time': 'blue',
    'Pay most of our bills on time': 'green',
    'Pay some of our bills on time': 'yellow',
    'Pay very few of our bills on time': 'purple',
  };
  const colors2 = {
    'Spending was much less than income': 'red',
    'Spending was a little less than income': 'blue',
    'Spending was about equal to income': 'green',
    'Spending was a little more than income': 'yellow',
    'Spending was much more than income': 'purple',
  };

  useEffect(() => {
    csv(fhnData).then((data) => {
      setData(data);
      setKeys(data.columns.slice(1));
    });
  }, []);

  useEffect(() => {
    csv(fhnDataSpend).then((data) => {
      setData2(data);
      setKeys2(data.columns.slice(1));
    });
  }, []);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  return (
    <>
      <div className="container">
        <div className="chart-container mb-5">
          <h2 className="text-center">How did you pay your bills last year</h2>
          <BarChartPay keys={keys} data={data} colors={colors} />
        </div>
        <div className="">
        <h2 className="text-center">Did you spend more than your income</h2>
          <BarChartSpend keys={keys2} data={data2} colors={colors2} />
        </div>
      
      </div>
    </>
  );
}

export default App;
