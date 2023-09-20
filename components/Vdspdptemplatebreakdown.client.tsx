'use client'
import React, { useEffect } from "react";

function Vdspdptemplatebreakdown() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
    script.type = "module";

    script.onload = () => {
      import("https://api.observablehq.com/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@470.js?v=3").then((module) => {
        const { Runtime, Inspector } = module.default;
        const define = module.define;

        new Runtime().module(define, (name: string) => {
          if (name === "chart6") {
            new Inspector(document.querySelector("#observablehq-chart6-67bdaa66"));
          }
        });
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id="observablehq-chart6-67bdaa66"></div>
      <p>
        Credit:{" "}
        <a href="https://observablehq.com/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@470">
          Untitled by Sergiy Vasyletskyy&#039;s Workspace
        </a>
      </p>
    </>
  );
}

export default Vdspdptemplatebreakdown;
