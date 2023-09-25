'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';

interface IFrameWithDescriptionProps {
  src: string;
  backgroundColor: string;
  height: string | number;
  description: string;
}

function IFrameWithDescription({ src, backgroundColor, height, description }: IFrameWithDescriptionProps) {
  return (
    <>
      <div className="divider"></div>
      <p className="mt-2.5 mb-2.5 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-mono font-bold">
        {description}
      </p>
      <iframe
        className="observable-iframe"
        style={{ backgroundColor: backgroundColor, borderBottom: "1px solid blue", border: "none", overflow: "hidden" }}
        width="75%"
        height={height}
        src={src}
      ></iframe>
    </>
  );
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // ... your iframe code ...

    // Set the dark mode class on the body element based on the isDarkMode state
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);  // Depend on isDarkMode state so it runs when the mode changes

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Dark Mode
      </button>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
 
      <p className="custom-text flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
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
            />
          </a>
        </div>
      </div>

      <div className="divider"></div>
      <IFrameWithDescription 
        src="https://observablehq.com/embed/1cde9c5aecae0048@71?cells=StandardWebsiteTimeline2"
        backgroundColor="#FFFFFF"
        height="640"
        description="Vital DS Standard Website Delivery Timeline."
      />

      <IFrameWithDescription 
        src="https://observablehq.com/embed/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@657?cells=chart_links"
        backgroundColor="#F6F2FC"
        height="1440"
        description="Vital DS Standard Website Taxonomy | Interactive."
      />

      <IFrameWithDescription 
        src="https://observablehq.com/embed/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@657?cells=chart6"
        backgroundColor="#F6F2FC"
        height="1440"
        description="Vital DS Standard Website Taxonomy | Expanded."
      />

      <IFrameWithDescription 
        src="https://observablehq.com/embed/7533c984eedc1bc7@625?cells=chart_links"
        backgroundColor="#FBF8FE"
        height="1080"
        description="Vital DS Standard Website Component Genealogy | In-Focus | Interactive."
      />

      <IFrameWithDescription 
        src="https://observablehq.com/embed/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@657?cells=chart4"
        backgroundColor="#FFFFFF"
        height="1200"
        description="Vital DS Standard Website Component Genealogy | Winter Tree | Interactive."
      />
      
      <div className="divider"></div>
      <p className="mt-2.5 mb-2.5 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
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
      </p>
      <div className="divider"></div>
      
    </main>
  )
}
