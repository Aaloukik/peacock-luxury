"use client";

import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {

  return (
    <main className="bg-black text-white">

      {/* FLOATING NAVBAR */}

    <Header />
    <div className="h-24"></div>

    <HeroSlider />
    

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