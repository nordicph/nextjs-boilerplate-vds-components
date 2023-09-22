'use client'

import { useEffect, useRef, useState } from 'react';

export default function ObservableChart({ width = 600, src }) {
  const iframeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

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

    function onLoad() {
      setIsLoading(false);
    }

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', onLoad);
    }

    window.addEventListener("message", onMessage);
    return () => {
      if (iframe) {
        iframe.removeEventListener('load', onLoad);
      }
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <iframe 
        ref={iframeRef} 
        width={width} 
        frameborder="0" 
        style={{ backgroundColor: 'white' }} 
        src={src}
      ></iframe>
    </div>
  );
}

