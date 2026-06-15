"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import { motion } from "framer-motion";
export default function BlogPage() {
  return (
    <main className="bg-black text-white min-h-screen">

       {/* HEADER */}

      <header className="fixed top-0 left-0 z-[200] w-full">

  <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

    {/* LOGO */}

    <a
      href="/"
      className="transition-all duration-500 hover:scale-105"
    >

      <img
        src="/logo.png"
        alt="Peacock"
        className="w-[120px] md:w-[170px] object-contain"
      />

    </a>

    {/* MENU */}

    <nav className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.35em] text-white/80">

    <a href="/about">
  About Us
</a>

<a href="/products">
  Product
</a>

<a href="/network">
  Network
</a>

<a href="/certificates">
  Certificates
</a>

<a href="/gallery">
  Gallery
</a>

<a href="/blog">
  Blog
</a>

<a href="/contact-us">
  Contact Us
</a>

    </nav>

    {/* CTA BUTTON */}

    {/* WHATSAPP BUTTON */}

<a
  href="https://wa.me/918279745569?text=Hello%20Peacock%20Plywood%20I%20want%20to%20know%20more"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:flex items-center justify-center border border-white/20 bg-white/5 px-6 py-3 text-[10px] uppercase tracking-[0.35em] text-white backdrop-blur-md transition-all duration-500 hover:bg-white hover:text-black"
>
  WhatsApp
</a>

  </div>
</header>

      {/* HERO */}

<section className="relative overflow-hidden pt-40 pb-28">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.12),transparent_65%)]" />

  <div className="relative mx-auto max-w-[1400px] px-6 text-center lg:px-12">

    <p className="text-[12px] uppercase tracking-[0.6em] text-orange-400">
      Peacock Insights
    </p>

    <h1 className="mx-auto mt-8 max-w-6xl text-6xl font-light leading-none md:text-8xl lg:text-[110px]">
      Knowledge That
      <br />
      Builds Better
      <br />
      Spaces
    </h1>

    <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-neutral-400">
      Explore expert insights on plywood, block boards,
      designer doors, interior trends, buying guides and
      industry knowledge from Peacock Laminates & Plywood.
    </p>

    <div className="mt-14 flex flex-wrap justify-center gap-4">

      <div className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm uppercase tracking-[0.25em] text-neutral-300">
        Plywood Guides
      </div>

      <div className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm uppercase tracking-[0.25em] text-neutral-300">
        Interior Trends
      </div>

      <div className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm uppercase tracking-[0.25em] text-neutral-300">
        Buying Tips
      </div>

      <div className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm uppercase tracking-[0.25em] text-neutral-300">
        Warranty Insights
      </div>

    </div>

  </div>

</section>

      {/* FEATURED BLOG */}

<section className="mx-auto max-w-[1500px] px-6 py-24 lg:px-12">

  <div className="grid items-center gap-12 lg:grid-cols-2">

    {/* IMAGE */}

    <div className="group overflow-hidden rounded-[40px] border border-white/10">
      <img
        src="/blogs/featured.jpg"
        alt="Featured Blog"
        className="h-[650px] w-full object-cover transition duration-700 group-hover:scale-105"
      />
    </div>

    {/* CONTENT */}

    <div>

      <p className="text-[12px] uppercase tracking-[0.5em] text-orange-400">
        Featured Article
      </p>

      <h2 className="mt-6 text-5xl font-light leading-tight md:text-7xl">
        How To Choose
        <br />
        The Right
        <br />
        Plywood
      </h2>

      <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
        Selecting the right plywood is one of the most
        important decisions in any interior or construction
        project. Understanding grades, durability,
        moisture resistance and warranty coverage can
        help you make a smarter investment.
      </p>

      <div className="mt-10 flex items-center gap-6">

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Category
          </p>

          <p className="mt-2 text-white">
            Plywood Guide
          </p>
        </div>

        <div className="h-12 w-px bg-white/10" />

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Read Time
          </p>

          <p className="mt-2 text-white">
            5 Min Read
          </p>
        </div>

      </div>

      <button className="mt-12 rounded-full border border-orange-400 px-8 py-4 text-sm uppercase tracking-[0.3em] text-orange-400 transition hover:bg-orange-400 hover:text-black">
        Read Article
      </button>

    </div>

  </div>

</section>

      {/* BLOG GRID */}

<section className="mx-auto max-w-[1500px] px-6 py-24 lg:px-12">

  <div className="mb-16 text-center">

    <p className="text-[12px] uppercase tracking-[0.5em] text-orange-400">
      Latest Articles
    </p>

    <h2 className="mt-6 text-5xl font-light md:text-7xl">
      Knowledge
      <br />
      Center
    </h2>

  </div>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

    {[
      {
        image: "/blogs/blog1.jpg",
        category: "Plywood Guide",
        title: "How To Identify Genuine Plywood",
        desc: "Learn how to recognize premium quality plywood and avoid low-grade alternatives."
      },
      {
        image: "/blogs/blog2.jpg",
        category: "Buying Guide",
        title: "MR vs BWR vs BWP Plywood",
        desc: "Understand plywood grades and choose the perfect option for every application."
      },
      {
        image: "/blogs/blog3.jpg",
        category: "Warranty",
        title: "Why 30 Year Warranty Matters",
        desc: "A strong warranty reflects confidence in product quality and long-term durability."
      },
      {
        image: "/blogs/blog4.jpg",
        category: "Interior Design",
        title: "Top Interior Design Trends",
        desc: "Discover modern interior concepts shaping homes and commercial spaces."
      },
      {
        image: "/blogs/blog5.jpg",
        category: "Care Guide",
        title: "Protect Furniture From Moisture",
        desc: "Simple maintenance practices that improve furniture life and appearance."
      },
      {
        image: "/blogs/blog6.jpg",
        category: "Doors",
        title: "Choosing Modern Designer Doors",
        desc: "Select designer doors that complement luxury interiors and architecture."
      }
    ].map((blog, index) => (
      <article
        key={index}
        className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] transition duration-500 hover:border-orange-400/30"
      >

        <div className="overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-8">

          <p className="text-[11px] uppercase tracking-[0.3em] text-orange-400">
            {blog.category}
          </p>

          <h3 className="mt-4 text-2xl font-light leading-tight">
            {blog.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-neutral-400">
            {blog.desc}
          </p>

          <button className="mt-8 text-sm uppercase tracking-[0.3em] text-white transition hover:text-orange-400">
            Read More →
          </button>

        </div>

      </article>
    ))}

  </div>

</section>


      {/* KNOWLEDGE BANNER */}

<section className="px-6 pb-24 lg:px-12">

  <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03]">

    <div className="relative px-10 py-20 text-center lg:px-24">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.12),transparent_65%)]" />

      <div className="relative">

        <p className="text-[12px] uppercase tracking-[0.5em] text-orange-400">
          Peacock Knowledge Center
        </p>

        <h2 className="mt-8 text-5xl font-light leading-tight md:text-7xl">
          Building Trust
          <br />
          Through Knowledge
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
          Explore expert insights on plywood, luxury doors,
          block boards, interior solutions, product selection,
          maintenance and industry trends.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <a
            href="/products"
            className="rounded-full border border-orange-400 px-8 py-4 text-sm uppercase tracking-[0.3em] text-orange-400 transition hover:bg-orange-400 hover:text-black"
          >
            Explore Products
          </a>

          <a
            href="/contact"
            className="rounded-full border border-white/10 px-8 py-4 text-sm uppercase tracking-[0.3em] text-white transition hover:border-white/30"
          >
            Contact Us
          </a>

        </div>

      </div>

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