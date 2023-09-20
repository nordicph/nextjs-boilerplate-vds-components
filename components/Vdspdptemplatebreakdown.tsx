import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown";

function Vdspdptemplatebreakdown() {
  const chart6Ref = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart6") return new Inspector(chart6Ref.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chart6Ref} />
      <p>Credit: <a href="https://observablehq.com/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@470">Untitled by Sergiy Vasyletskyy&#039;s Workspace</a></p>
    </>
  );
}

export default Vdspdptemplatebreakdown;