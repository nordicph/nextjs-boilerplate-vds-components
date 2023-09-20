import React, { useEffect, useRef } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "./obs_code/package.json";

function ObservableChart() {
  const chartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "chart") {
        return new Inspector(chartRef.current);
      }
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chartRef}></div>
    </>
  );
}

export default ObservableChart;
