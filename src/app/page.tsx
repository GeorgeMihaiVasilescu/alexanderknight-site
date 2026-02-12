"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.35); // slower = more luxury
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-[240vh]">

        {/* MASSIVE NAME */}
        <h1
          className="
            fixed
            top-[6vh]
            left-[4vw]
            text-[22vw]
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


        {/* MOVING REEL — physical object */}
        <video
          style={{
            transform: `translateY(${offset}px)`
          }}
          className="
            fixed
            inset-0
            w-full
            h-screen
            object-cover
            mix-blend-difference
            grayscale
            contrast-[1.5]
            z-20
            pointer-events-none
          "
          src="/reel.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

      </section>



      {/* MANIFESTO SECTIONS */}
      {/* alternating black / white creates natural duality */}

      <section className="bg-white px-[6vw] py-[18vh]">
        <p className="text-[7vw] leading-[1.05] font-bold tracking-[-0.03em] max-w-[92vw]">
          When I wear the mask, do I reveal the world — or myself?
          A mask does not hide. It allows us to appear exactly as we are.
        </p>
      </section>



      <section className="bg-black text-white px-[6vw] py-[18vh]">
        <p className="text-[7vw] leading-[1.05] font-bold tracking-[-0.03em] max-w-[92vw]">
          This work was born in Berlin, in April 2024.
          Since then, I no longer see the body as a surface,
          but as a cultural artifact shaped continuously,
          alone and together.
        </p>
      </section>



      <section className="bg-white px-[6vw] py-[18vh]">
        <p className="text-[7vw] leading-[1.05] font-bold tracking-[-0.03em] max-w-[92vw]">
          Tattooing is always a reflection of its time.
          I meet you and listen to your story.
          We meet there, between needle and skin.
        </p>
      </section>



      <section className="bg-black text-white px-[6vw] py-[18vh]">
        <p className="text-[7vw] leading-[1.05] font-bold tracking-[-0.03em] max-w-[92vw]">
          I work in high contrast.
          Red is pulse.
          Black is the presence of light.
        </p>
      </section>



      <section className="bg-white px-[6vw] py-[18vh]">
        <p className="text-[7vw] leading-[1.05] font-bold tracking-[-0.03em] max-w-[92vw]">
          BDSM reveals what polite culture prefers to hide:
          our need for limits, for trust, for transformation.
          Beyond restraint lies a radical form of presence.
        </p>
      </section>



      <section className="bg-black text-white px-[6vw] py-[18vh]">
        <p className="text-[7vw] leading-[1.05] font-bold tracking-[-0.03em] max-w-[92vw]">
          This is not vanilla.
          This is not decoration.
          It is a mark of presence.
        </p>
      </section>



      {/* BOOK — BIG but not screaming */}
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
            hover:bg-black
            hover:text-white
            transition
          "
        >
          BOOK
        </a>

      </section>

    </main>
  );
}
