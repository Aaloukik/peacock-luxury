"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // HERO SCROLL AREA ONLY
      const heroHeight = window.innerHeight * 8;

      const scrollFraction = Math.min(
        scrollTop / heroHeight,
        1
      );

      // VIDEO CONTROL
      const targetTime =
        video.duration * scrollFraction;

      if (!isNaN(targetTime)) {
        video.currentTime = targetTime;
      }

      // LOGO APPEAR
      if (scrollFraction >= 0.92) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <main className="bg-black text-white">

      {/* FLOATING NAVBAR */}

    <Header />

      {/* HERO SECTION */}

      <div className="relative h-[1000vh]">

        <section className="sticky top-0 h-screen overflow-hidden">

          {/* VIDEO */}

          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
              showLogo
                ? "opacity-0 scale-110"
                : "opacity-100"
            }`}
          >
            <source
              src="/videos/hero-video.mp4"
              type="video/mp4"
            />
          </video>

          {/* OVERLAY */}

          <div
            className={`absolute inset-0 transition-all duration-1000 ${
              showLogo
                ? "bg-black"
                : "bg-black/30"
            }`}
          />

          {/* LOGO SECTION */}

          <div className="relative z-50 flex h-full items-center justify-center px-6">

            <div
              className={`text-center transition-all duration-[2200ms] ${
                showLogo
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
            >

              {/* LOGO */}

              <img
                src="/logo.png"
                alt="Peacock"
                className="mx-auto w-[240px] md:w-[620px]"
              />

              {/* SUBTITLE */}

              <p className="mt-8 text-[10px] md:text-lg uppercase tracking-[0.8em] text-neutral-200">
                Platinum Club Plywood
              </p>

              {/* DESCRIPTION */}

              <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-neutral-300 md:text-lg">
                Crafted for modern luxury interiors.
                Precision engineered plywood built
                for timeless architectural elegance.
              </p>

              {/* BUTTON */}

              <button className="mt-10 border border-white px-10 py-4 text-xs uppercase tracking-[0.4em] text-white transition-all duration-500 hover:bg-white hover:text-black">
                Explore Collection
              </button>
            </div>
          </div>

          {/* SCROLL INDICATOR */}

          {!showLogo && (
            <div className="absolute bottom-10 left-1/2 z-50 -translate-x-1/2">

              <div className="flex flex-col items-center">

                <p className="animate-pulse text-[10px] tracking-[0.5em] text-white/80">
                  SCROLL
                </p>

                <div className="mt-3 h-14 w-[1px] bg-white/40"></div>

              </div>
            </div>
          )}
        </section>
      </div>

      {/* PRODUCT SECTION */}

      <section className="relative z-10 bg-black px-6 py-40">

        {/* TOP LABELS */}

        <div className="mx-auto mb-10 flex max-w-7xl items-center justify-between text-[10px] uppercase tracking-[0.5em] text-[#c58b45]">

          <p>Peacock Plywood by Peacock Laminates</p>

          <p>Luxury Interior Plywood and Doors</p>

        </div>

        {/* HEADING */}

        <div className="mb-24 text-center">

          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            Choose Your Product <br />
          </h2>

        </div>

        {/* PRODUCT GRID */}

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">

          {/* PLYWOOD */}

          <div className="border border-[#3a2414] bg-[#1b0c05] p-10 transition-all duration-500 hover:-translate-y-3 hover:border-[#c58b45]">

            <h2 className="text-5xl font-light text-[#d98b3f]">
  PLYWOOD
</h2>

<p className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-400">
  Platinum • Diamond • Gold
</p>

<p className="mt-10 text-base leading-9 text-neutral-300">
  Waterproof calibrated plywood crafted with
  New Zealand pine technology, termite
  resistance and 4-times pressed durability
  for premium interiors.
</p>

<div className="mt-16">
  <h4 className="text-6xl font-light">
    UPTO 30
  </h4>

  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-500">
    Years Warranty
  </p>
</div>

<button className="mt-16 w-full border border-[#d98b3f] py-4 text-xs uppercase tracking-[0.4em] transition-all duration-500 hover:bg-[#d98b3f] hover:text-black">
  Explore Plywood
</button>

          </div>

          {/* BLOCK BOARD */}

          <div className="min-w-[380px] flex flex-col border border-[#4b1f0c] bg-[#220b02] p-10 transition-all duration-500 hover:-translate-y-3 hover:border-[#d07a32]">

        

<h2 className="text-[45px] whitespace-nowrap font-light leading-none text-[#ff8b2b]">
  BLOCK BOARD
</h2>

<p className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-400">
  Platinum • Diamond • Gold
</p>


<p className="mt-10 text-base leading-9 text-neutral-300">
  Premium calibrated block boards engineered
  for wardrobes, partitions, furniture and
  high-load modular applications with zero-gap
  construction.
</p>

<div className="mt-16">
  <h4 className="text-6xl font-light">
    100%
  </h4>

  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-500">
    NEWZEALAND PINE
  </p>
</div>

<div className="flex-1"></div>
<button className="mt-16 w-full border border-[#ff8b2b]/50 py-4 text-xs uppercase tracking-[0.4em] transition-all duration-500 hover:bg-[#ff8b2b] hover:text-black">
  Explore Boards
</button>

          </div>

          {/* DOORS */}

          <div className="border border-[#1b2958] bg-[#02091e] p-10 transition-all duration-500 hover:-translate-y-3 hover:border-[#6f89ff]">

            <h2 className="text-5xl font-light text-white">
  DOORS
</h2>

<p className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-400">
  Platinum Flush Door
</p>

<p className="mt-10 text-base leading-9 text-neutral-300">
 Waterproof calibrated flush doors 
 engineered with premium New Zealand pine
 core technology for sophisticated luxury
 residential and elite commercial interiors.
</p>

<div className="mt-16">
  <h4 className="text-6xl font-light">
    30MM
  </h4>

  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-500">
    THICKNESS GUARANTEE
  </p>
</div>

<button className="mt-24 w-full border border-[#3b82f6]/40 py-4 text-xs uppercase tracking-[0.4em] transition-all duration-500 hover:bg-[#6f89ff] hover:text-black">
  Explore Doors
</button>

          </div>
        </div>
      </section>

      {/* FOOTER */}

<footer className="border-t border-white/10 bg-black px-6 py-24 text-white">

  <div className="mx-auto max-w-7xl">

    {/* TOP SECTION */}

    <div className="grid gap-16 md:grid-cols-4">

      {/* BRAND */}

      <div>

        <img
          src="/logo.png"
          alt="Peacock"
          className="w-[180px] object-contain opacity-90"
        />

        <p className="mt-8 text-sm leading-7 text-neutral-400">
          Premium plywood, block boards and luxury
          doors crafted for timeless interiors and
          architectural excellence.
        </p>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          className="mt-8 inline-flex border border-white/20 px-6 py-3 text-[10px] uppercase tracking-[0.35em] transition-all duration-500 hover:bg-white hover:text-black"
        >
          WhatsApp Us
        </a>

      </div>

      {/* PRODUCTS */}

      <div>

        <h3 className="mb-8 text-sm uppercase tracking-[0.4em] text-white">
          Products
        </h3>

        <ul className="space-y-4 text-sm text-neutral-400">

          <li>
            <a
              href="#"
              className="transition-all hover:text-white"
            >
              Peacock Plywood
            </a>
          </li>

          <li>
            <a
              href="#"
              className="transition-all hover:text-white"
            >
              Peacock Block Boards
            </a>
          </li>

          <li>
            <a
              href="#"
              className="transition-all hover:text-white"
            >
              Peacock Doors
            </a>
          </li>

      

        </ul>

      </div>

      {/* QUICK LINKS */}

      <div>

        <h3 className="mb-8 text-sm uppercase tracking-[0.4em] text-white">
          Quick Links
        </h3>

        <ul className="space-y-4 text-sm text-neutral-400">

          <li>
            <a href="#" className="hover:text-white">
              About Us
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-white">
              Network
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-white">
              Certificates
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-white">
              Gallery
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-white">
              Blogs
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-white">
              Contact Us
            </a>
          </li>

        </ul>

      </div>

      {/* CONTACT */}

      <div>

        <h3 className="mb-8 text-sm uppercase tracking-[0.4em] text-white">
          Contact
        </h3>

        <div className="space-y-5 text-sm leading-7 text-neutral-400">

          <p>
  Jawaharpuri Near Indian Oil Petrol Pump,
  Civil Lines, Budaun-243601,
  Uttar Pradesh
</p>

<p>
  +91 82797 45569
</p>

<p>
  info@peacocklaminates.com
</p>

        </div>

        {/* SOCIALS */}

        <div className="mt-10 flex gap-4">

          <a
            href="#"
            className="border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-black"
          >
            IG
          </a>

          <a
            href="#"
            className="border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-black"
          >
            FB
          </a>

          <a
            href="#"
            className="border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] transition-all hover:bg-white hover:text-black"
          >
            YT
          </a>

        </div>

      </div>

    </div>

    {/* BOTTOM */}

    <div className="mt-20 border-t border-white/10 pt-8">

      <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">

        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          © 2026 Peacock Laminates & Plywood
        </p>

        <p className="text-xs uppercase tracking-[0.3em] text-neutral-600">
          Crafted With Precision
        </p>

      </div>

    </div>

  </div>

</footer>
    </main>
  );
}