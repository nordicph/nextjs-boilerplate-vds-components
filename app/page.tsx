'use client'

import Image from 'next/image'
import React from "react";
import { useEffect, useRef, useState } from 'react';
import $ from 'jquery';


export default function Home() {
  const [isSpinnerAdded, setIsSpinnerAdded] = useState(false); // This state flag is for the spinner

  useEffect(() => {
    $(() => {
      $("iframe.observable-iframe").each((_: number, element: HTMLElement) => {
        // Previously, there were code snippets here related to the spinner
        // We've removed them to get rid of the spinner functionality
      });
    });
  }, []);

  useEffect(() => {
    const iframe = document.querySelector('.observable-iframe') as HTMLIFrameElement;

    if (!iframe) return; // Exit if iframe is null or undefined

    // Assuming you have a .loader class in your CSS for styling the spinner
    const spinner = document.createElement('div');
    spinner.className = 'loader';
    document.body.appendChild(spinner);
    
    iframe.onload = () => {
      spinner.style.display = 'none';  // Hide the spinner once iframe loads
    };

    if (isSpinnerAdded) {
      console.log("Spinner has been added to the iframe content.");
    } else {
      console.log("Spinner hasn't been added yet.");
    }
  }, [isSpinnerAdded]); // This useEffect logs the spinner state whenever it changes
  [];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
 
      <p className="custom-text fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Vital DS Standard Website. &nbsp;
        <code className="font-mono font-bold"></code>
      </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/kenvue.svg"
              alt="Kenvue Logo"
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              width={100}
              height={24}

              priority
            />
          </a>
        </div>
      </div>

      <div className="divider"></div>
      <p
        className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-mono font-bold"
        style={{ marginTop: '10px', marginBottom: '10px' }}
      >
        Vital DS Standard Website Delivery Timeline.&nbsp;
      </p>
      <iframe
      className="observable-iframe"
      style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid blue", border: "none", overflow: "hidden" }}
      width="75%"
      height="640"
      src="https://observablehq.com/embed/1cde9c5aecae0048@71?cells=StandardWebsiteTimeline2"
      ></iframe>

      <div className="divider"></div>
      <p
        className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-mono font-bold"
        style={{ marginTop: '10px', marginBottom: '10px' }}
      >
        Vital DS Standard Website Taxonomy | Interactive. &nbsp;
      </p>

      <iframe
      className="observable-iframe"
      style={{ backgroundColor: "#F6F2FC", borderBottom: "1px solid blue", border: "none", overflow: "hidden" }}
      width="75%"
      height="1440"
      src="https://observablehq.com/embed/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@657?cells=chart_links"
      ></iframe>

      <div className="divider"></div>
      <p
        className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-mono font-bold"
        style={{ marginTop: '10px', marginBottom: '10px' }}
      >
        Vital DS Standard Website Taxonomy | Expanded. &nbsp;
      </p>

      <iframe
      className="observable-iframe"
      style={{ backgroundColor: "#F6F2FC", borderBottom: "1px solid blue", border: "none", overflow: "hidden" }}
      width="75%"
      height="1440"
      src="https://observablehq.com/embed/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@657?cells=chart6"
      ></iframe>
      
      <div className="divider"></div>
      <p
        className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-mono font-bold"
        style={{ marginTop: '10px', marginBottom: '10px' }}
      >
        Vital DS Standard Website Component Genealogy | In-Focus | Interactive. &nbsp;
      </p>
      <iframe
      className="observable-iframe"
      style={{ backgroundColor: "#FBF8FE", borderBottom: "1px solid blue", border: "none", overflow: "hidden" }}
      width="75%"
      height="1080"
      src="https://observablehq.com/embed/7533c984eedc1bc7@566?cells=chart_links"
      ></iframe>
      
      <div className="divider"></div>
      <p
        className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-mono font-bold"
        style={{ marginTop: '10px', marginBottom: '10px' }}
      >
        Vital DS Standard Website Component Genealogy | Winter Tree | Interactive. &nbsp;
      </p>
      <iframe
      className="observable-iframe"
      style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid blue", border: "none", overflow: "hidden" }}
      width="75%"
      height="1200"
      src="https://observablehq.com/embed/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@657?cells=chart4"
      ></iframe>
      
      <div className="divider"></div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://confluence.jnj.com/display/JEPZ/Standard+Website+Template+and+Component+Decomposition"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Vital DS Components.
          </p>
        </a>
      </div>
      <div className="divider"></div>
      
    </main>
  )
}
