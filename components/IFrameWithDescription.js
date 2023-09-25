function IFrameWithDescription({ src, backgroundColor, height, description }) {
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
  