'use client'

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react';

interface IFrameWithDescriptionProps {
  id : string;
  src: string;
  backgroundColor: string;
  height: string | number;
  description: string;
}

function IFrameWithDescription({ id, src, backgroundColor, height, description }: IFrameWithDescriptionProps) {
  return (
    <div id={id}>
    <>
      <p className="mt-20 mb-2.5 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-mono font-bold">
        {description}
      </p>
      <iframe
        className="observable-iframe"
        style={{ backgroundColor: backgroundColor, borderBottom: "1px solid blue", border: "none", overflow: "hidden" }}
        width="100%"
        height={height}
        src={src}
      ></iframe>
    </>
    </div>
  );
}

export default function Home() {
  const headerRef = useRef<HTMLElement | null>(null);
  const pageRef = useRef<HTMLElement | null>(null);
  const openMenuButtonRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const header = headerRef.current;
    const page = pageRef.current;
    const openMenuButton = openMenuButtonRef.current;

    const handleScroll = () => {
      if (pageRef.current) {
        pageRef.current.classList.remove('menuopen');
      }
      
      if (window.scrollY >= 100 && headerRef.current) {
        headerRef.current.classList.add('sticky');
      } else if (headerRef.current) {
        headerRef.current.classList.remove('sticky');
      }
    };

    const handleButtonClick = (event: MouseEvent) => {
      if (headerRef.current) headerRef.current.classList.remove('sticky');
      if (pageRef.current) pageRef.current.classList.add('menuopen');
    };
    
    const handleLinkClick = (event: MouseEvent) => {
      event.preventDefault();
      const targetId = (event.target as Element).getAttribute('href');
    
      if (targetId) {  // Check if targetId is not null
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offset = 50;  // Offset for the padding or menu height. Adjust as needed.
          const y = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    
          window.scrollTo({
            top: y,
            behavior: 'smooth',
          });
        }
      }
    };
    
    

    if (openMenuButton) {
      openMenuButton.addEventListener('click', handleButtonClick);
    }
    
    var links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    links.forEach((link) => {
        link.addEventListener('click', handleLinkClick);
    });

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      if (openMenuButton) {
        openMenuButton.removeEventListener('click', handleButtonClick);
      }
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          {/* Header with navigation */}
          <header id="Vital DS Standard Website Header" className="">
            <nav>
                <a href="#roadmap">Roadmap.</a>
                <a href="#timeline">Delivery Timeline.</a>
                <a href="#taxonomyInteractive">Taxonomy. Interactive</a>
                <a href="#taxonomyExpanded">Taxonomy. Expanded</a>
                <a href="#genealogyInFocus">Genealogy. In-Focus</a>
                <a href="#genealogyTree">Genealogy. Tree</a>
                <button id="menuopen">
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </header>
      </div>
      <div className="wrapper" >

      <IFrameWithDescription 
        id="roadmap" 
        src="https://app.productplan.com/pr/rCLoyti-is21l06IRfbgeWpEbply5_mK?hide_sidebar=true&hide_nav=true&hide_legend=true"
        backgroundColor="#FFFFFF"
        height="800"
        description="Vital DS Standard Website Product Roadmap"
      />

      <IFrameWithDescription 
        id="timeline" 
        src="https://observablehq.com/embed/1cde9c5aecae0048@159?cells=StandardWebsiteTimeline2"
        backgroundColor="#FFFFFF"
        height="640"
        description="Vital DS Standard Website Delivery Timeline."
      />

      <IFrameWithDescription 
        id="taxonomyInteractive" 
        src="https://observablehq.com/embed/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@673?cells=chart_links"
        backgroundColor="#F6F2FC"
        height="1440"
        description="Vital DS Standard Website Taxonomy | Interactive."
      />

      <IFrameWithDescription 
        id="taxonomyExpanded" 
        src="https://observablehq.com/embed/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@673?cells=chart6"
        backgroundColor="#F6F2FC"
        height="1440"
        description="Vital DS Standard Website Taxonomy | Expanded."
      />

      <IFrameWithDescription 
        id="genealogyInFocus" 
        src="https://observablehq.com/embed/7533c984eedc1bc7@652?cells=chart_links"
        backgroundColor="#FBF8FE"
        height="1080"
        description="Vital DS Standard Website Component Genealogy | In-Focus | Interactive."
      />

      <IFrameWithDescription 
        id="genealogyTree" 
        src="https://observablehq.com/embed/@sergiy-vasyletskyy-ws/vds_pdp_template_breakdown@673?cells=chart4"
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
      </div>
    </main>
  )
}
