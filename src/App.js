import logo from "./logo.svg";
import React, { useEffect, useState } from "react";

import Chart from "./components/Chart";
import StackedBarChart from "./components/StackedBarChart";
import "./App.css";


import fhnData from "./data/39.csv";
import { csv, reduce } from "d3";

function App() {
  const [data, setData] = useState(null);
  const [keys, setKeys] = useState([]);
  const colors = {
    'Pay all of our bills on time': 'red',
    'Pay nearly all of our bills on time': 'blue',
    'Pay most of our bills on time': 'green',
    'Pay some of our bills on time': 'yellow',
    'Pay very few of our bills on time': 'purple',
  };

  useEffect(() => {
    csv(fhnData).then((data) => {
      setData(data);
      setKeys(data.columns.slice(1));
    });
  }, []);

  if (!data) {
    return <pre>Loading..</pre>;
  }

  return (
    <>
        <StackedBarChart keys={keys} data={data} colors={colors} />
    </>
  );
}

export default App;
