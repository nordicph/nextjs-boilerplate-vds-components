'use client'
// components/ObservableChart.js

import React, { useEffect } from "react";

const ObservableChart = () => {
  useEffect(() => {
    import("@observablehq/runtime").then(({ Runtime, Inspector }) => {
      import("https://api.observablehq.com/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@470.js?v=3").then((define) => {
        new Runtime().module(define.default, (name) => {
          if (name === "chart") {
            return new Inspector(document.querySelector("#observablehq-chart-32e484a1"));
          }
        });
      });
    });
  }, []);

  return (
    <div id="observablehq-chart-32e484a1">
      <p>
        Credit:{" "}
        <a href="https://observablehq.com/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@470">
          Untitled by Sergiy Vasyletskyy's Workspace
        </a>
      </p>
    </div>
  );
};

export default ObservableChart;
