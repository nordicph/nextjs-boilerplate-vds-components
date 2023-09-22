'use client'
import React, { useEffect, useRef } from "react";

function EmbedlyIframe({ src }) {
const iframeRef = useRef();

useEffect(() => {
function onMessage(message) {
// The same logic as in your script tag
}

// Attach the listener for the message from the iframe
window.addEventListener("message", onMessage);

// Return a cleanup function that removes the listener
return () => {
window.removeEventListener("message", onMessage);
};
}, []);

return <iframe id="embed" ref={iframeRef} src={src}></iframe>;
}

export default EmbedlyIframe;
