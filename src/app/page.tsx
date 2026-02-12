"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.35);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative bg-white overflow-x-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        style={{ transform: `translateY(${offset}px)` }}
        className="
          fixed
          inset-0
          w-full
          h-screen
          object-cover
          z-0
          pointer-events-none
        "
        src="/reel.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* CONTENT ABOVE VIDEO */}
      <div className="relative z-20">

        {/* HERO */}
        <section className="relative min-h-[240vh]">

   <h1
  className="
    fixed
    top-[4vh]
    left-[3vw]

    text-[28vw] 
    sm:text-[22vw]

    leading-[0.72]
    tracking-[-0.06em]
    font-black
    text-black
    select-none
    pointer-events-none
    z-10
  "
>
  ALEXANDER<br/>KNIGHT
</h1>
 

        </section>

        {/* MANIFESTO */}

        <section className="bg-white px-[6vw] py-[18vh]">
          <p className="text-[7vw] leading-[1.05] font-bold tracking-[-0.03em] text-black">
            When I wear the mask, do I reveal the world — or myself?
            A mask does not hide. It allows us to appear exactly as we are.
          </p>
        </section>

        <section className="bg-black text-white px-[6vw] py-[18vh]">
          <p className="text-[7vw] leading-[1.05] font-bold tracking-[-0.03em]">
            This work was born in Berlin, in April 2024.
            Since then, I no longer see the body as a surface,
            but as a cultural artifact shaped continuously,
            alone and together.
          </p>
        </section>

        <section className="bg-white px-[6vw] py-[18vh]">
          <p className="text-[7vw] leading-[1.05] font-bold tracking-[-0.03em] text-black">
            Tattooing is always a reflection of its time.
            I meet you and listen to your story.
            We meet there, between needle and skin.
          </p>
        </section>

        <section className="bg-black text-white px-[6vw] py-[18vh]">
          <p className="text-[7vw] leading-[1.05] font-bold tracking-[-0.03em]">
            I work in high contrast.
            Red is pulse.
            Black is the presence of light.
          </p>
        </section>

        <section className="bg-white px-[6vw] py-[18vh]">
          <p className="text-[7vw] leading-[1.05] font-bold tracking-[-0.03em] text-black">
            BDSM reveals what polite culture prefers to hide:
            our need for limits, for trust, for transformation.
            Beyond restraint lies a radical form of presence.
          </p>
        </section>

        <section className="bg-black text-white px-[6vw] py-[18vh]">
          <p className="text-[7vw] leading-[1.05] font-bold tracking-[-0.03em]">
            This is not vanilla.
            This is not decoration.
            It is a mark of presence.
          </p>
        </section>

        {/* BOOK */}

        <section className="bg-white px-[6vw] py-[22vh]">
          <a
            href="https://buy.stripe.com/cNi3cw7L9dKU8sYcq5aEE00"
            target="_blank"
            className="
              text-[9vw]
              font-black
              border-[5px]
              border-black
              px-12
              py-6
              inline-block
              hover:bg-black
              hover:text-white
              transition
            "
          >
            BOOK
          </a>
        </section>

      </div>

    </main>
  );
}

