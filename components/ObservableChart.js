'use client'
// components/ObservableChart.js

import React, { useEffect } from "react";

const loadObservableChart = async () => {
  // Fetch the Observable chart code
  const response = await fetch(
    "https://api.observablehq.com/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@470.js?v=3"
  );
  const chartCode = await response.text();

  // Create a script element and set the chart code as its content
  const script = document.createElement("script");
  script.type = "module";
  script.textContent = chartCode;
  
  <Script src="https://api.observablehq.com/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@470?v=3"></Script>

  // Append the script to the document
  document.body.appendChild(script);
};

const ObservableChart = () => {
  useEffect(() => {
    // Load the Observable chart when the component mounts
    loadObservableChart();
  }, []);

  return (
    <div id="observablehq-chart-32e484a1">
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            by Sergiy Vasyletskyy
          </p>
    </div>
  );
};

export default ObservableChart;
