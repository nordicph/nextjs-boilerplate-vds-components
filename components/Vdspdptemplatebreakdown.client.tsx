'use client'
import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown";

function Vdspdptemplatebreakdown() {
  const chart6Ref = useRef<HTMLDivElement | null>(null); // Corrected line

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name: string) => {
      if (name === "chart6") return new Inspector(chart6Ref.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chart6Ref} />
      <p>Credit: by Sergiy Vasyletskyy&#039;s Workspace</a></p>
    </>
  );
}

export default Vdspdptemplatebreakdown;
