'use client'
import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown";

function Vdspdptemplatebreakdown() {
  const chart6Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name: string) => { // Explicitly specify the type
      if (name === "chart6" && chart6Ref.current) {
        return new Inspector(chart6Ref.current);
      }
    });
    return () => runtime.dispose();
  }, []);

  return <div ref={chart6Ref}></div>;
}

export default Vdspdptemplatebreakdown;

