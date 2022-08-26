import logo from "./logo.svg";
import React, { useEffect, useState } from "react";

import BarChartPay from "./components/BarChartPay";
import BarChartSpend from "./components/BarChartSpend";
import NavBar from "./components/NavBar";
import Narrative from "./components/Narrative";
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
    Healthy: "#3b8de0",
    Coping: "#733089",
    Vulnerable: "#f88d2b",
  };

  // Tech Impact colors
  // #0057B8 blue
  // #78BE20 green
  // #ED8B00 orange
  // #C1C6C8 gray

  const allKeys = ["Healthy", "Coping", "Vulnerable"];

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
      <NavBar />
      <div className="container">
        <div className="chart-container my-3">
          <h2 className="text-center">How did you pay your bills last year?</h2>
          <BarChartPay keys={keys} data={data} colors={colors} />
          <div className="fields mt-5">
            {allKeys.map((key) => (
              <div key={key} className="field">
                <input
                  id={key}
                  type="checkbox"
                  checked={keys.includes(key)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setKeys(Array.from(new Set([...keys2, key])));
                    } else {
                      setKeys(keys.filter((_key) => _key !== key));
                    }
                  }}
                />
                <label htmlFor={key} className='pl-2' style={{ color: colors[key] }}>
                  {key}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="chart-container mb-3">
          <h2 className="text-center">Did you spend more than your income?</h2>
          <BarChartSpend keys={keys2} data={data2} colors={colors} />
          <div className="fields mt-5">
            {allKeys.map((key) => (
              <div key={key} className="field">
                <input
                  id={key}
                  type="checkbox"
                  checked={keys2.includes(key)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setKeys2(Array.from(new Set([...keys, key])));
                    } else {
                      setKeys2(keys2.filter((_key) => _key !== key));
                    }
                  }}
                />
                <label htmlFor={key} className='pl-2' style={{ color: colors[key] }}>
                  {key}
                </label>
              </div>
            ))}
          </div>
        </div>
        <Narrative />
      </div>
    </>
  );
}

export default App;
