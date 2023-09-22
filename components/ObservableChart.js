'use client'
import { useEffect, useRef } from 'react';

export default function ObservableChart({ width = 600 }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    function onMessage(message) {
      if (!iframeRef.current || message.source !== iframeRef.current.contentWindow) return;

      let {data} = message;

      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch (ignore) {
          return;
        }
      }

      if (data.context !== "iframe.resize") return;

      if (iframeRef.current) {
        iframeRef.current.style.height = `${data.height}px`;
      }
    }

    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    <div>
      <iframe ref={iframeRef} width={width} frameborder="0" src="https://observablehq.com/embed/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@474?cells=chart"></iframe>
    </div>
  );
}