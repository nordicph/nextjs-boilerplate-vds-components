import React, { useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@474";

export default function Chart() {
const chartRef = React.useRef();

useEffect(() => {
const runtime = new Runtime();
runtime.module(notebook, (name) => {
if (name === "chart") {
return new Inspector(chartRef.current);
}
});
}, []);

return <div ref={chartRef}></div>;
}