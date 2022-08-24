import logo from "./logo.svg";
import React, { useEffect, useState } from "react";

import BarChartPay from "./components/BarChartPay";
import BarChartSpend from "./components/BarChartSpend";
import "./App.css";


import fhnData from "./data/39rework.csv";
import fhnDataSpend from "./data/36rework.csv";
import { csv } from "d3";

function App() {
  const [data, setData] = useState(null);
  const [keys, setKeys] = useState([]);
  const [data2, setData2] = useState(null);
  const [keys2, setKeys2] = useState([]);
  const colors = {
    'Healthy': 'green',
    'Coping': 'blue',
    'Vulnerable': 'red'
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
          <h2 className="text-center">How did you pay your bills last year?</h2>
          <BarChartPay keys={keys} data={data} colors={colors} />
        </div>
        <div className="">
        <h2 className="text-center">Did you spend more than your income?</h2>
          <BarChartSpend keys={keys2} data={data2} colors={colors} />
        </div>
      
      </div>
    </>
  );
}

export default App;
