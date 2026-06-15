"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import { motion } from "framer-motion";


const strengths = [
  {
    number: "01",
    title: "Calibrated Precision",
    text: "Engineered with advanced calibrated technology for flawless dimensional stability and smooth finishing.",
  },

  {
    number: "02",
    title: "Waterproof Strength",
    text: "Marine-grade construction designed for long-lasting durability in premium residential interiors.",
  },

  {
    number: "03",
    title: "Termite Resistant",
    text: "Advanced protection technology crafted for Indian climate conditions and long product life.",
  },

  {
    number: "04",
    title: "Luxury Finish",
    text: "Architectural-grade plywood and boards crafted for sophisticated interior environments.",
  },
];

const sustainability = [
  "E1 Emission Technology",
  "Sustainable Wood Sourcing",
  "Eco Conscious Manufacturing",
  "Long Lifecycle Products",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-black text-white">
        

<Header />



      {/* HERO */}

      <section className="relative flex min-h-screen pt-32 items-center overflow-hidden border-b border-white/10">
        {/* background */}

        <div className="absolute inset-0">
          <Image
            src="/about/forest.jpg"
            alt="Forest"
            fill
            priority
            className="object-cover object-center opacity-30 scale-105"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,120,0,0.18),transparent_40%)]" />
        </div>

        {/* texture */}

        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay">
          <Image
            src="/about/wood-texture.jpg"
            alt="Texture"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1450px] items-center gap-14 px-6 py-28 lg:grid-cols-2 lg:px-16">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="mb-6 text-[11px] uppercase tracking-[0.8em] text-orange-400">
              About Peacock
            </p>

            <h1 className="text-[clamp(4rem,9vw,8rem)] font-light leading-[0.9] tracking-tight">
              Built For
              <br />
              Strength
              <br />
              Made For
              <br />
              Generations
            </h1>

            <p className="mt-10 max-w-xl text-[15px] leading-8 text-neutral-300">
              Peacock Laminates & Plywood combines advanced calibrated
              engineering, sustainable sourcing and luxury craftsmanship to
              create premium architectural interior solutions for modern living.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <div className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[11px] uppercase tracking-[0.35em]">
                Premium Quality
              </div>

              <div className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[11px] uppercase tracking-[0.35em]">
                Sustainable
              </div>

              <div className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[11px] uppercase tracking-[0.35em]">
                Luxury Interiors
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
            className="relative mx-auto h-[620px] w-full max-w-[460px]"
          >
            {/* glow */}

            <div className="absolute inset-0 rounded-[40px] bg-orange-500/10 blur-[100px]" />

            <div className="relative h-full overflow-hidden rounded-[40px] border border-white/10">
              <Image
                src="/about/factory-top-view.jpg"
                alt="Architecture"
                fill
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

{/* MANUFACTURING STRENGTH */}

<section className="relative border-b border-white/10 px-6 py-32 lg:px-16 overflow-hidden">

  {/* background glow */}

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.08),transparent_60%)]" />

  <div className="mx-auto max-w-[1450px]">

    <div className="mb-24 text-center">

      <p className="text-[11px] uppercase tracking-[0.8em] text-orange-400">
        Manufacturing Excellence
      </p>

      <h2 className="mt-8 text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] tracking-tight">
        Manufacturing Strength.
        <br />
        Nationwide Trust.
      </h2>

      <p className="mx-auto mt-10 max-w-3xl text-[15px] leading-8 text-neutral-400">
        Combining advanced manufacturing infrastructure,
        premium raw materials and an expanding dealer
        network, Peacock continues to deliver reliable
        plywood, block boards and doors for modern
        residential and commercial projects.
      </p>

    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

      {/* CARD 1 */}

      <motion.div
        whileHover={{
          y: -10,
        }}
        className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <h3 className="text-5xl font-light text-orange-400">
          2000+
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-neutral-500">
          Ton Monthly Manufacturing
        </p>

        <p className="mt-6 text-sm leading-7 text-neutral-400">
          Advanced production capacity ensuring
          consistent quality and dependable supply.
        </p>

      </motion.div>

      {/* CARD 2 */}

      <motion.div
        whileHover={{
          y: -10,
        }}
        className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <h3 className="text-5xl font-light text-orange-400">
          1000+
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-neutral-500">
          Authorized Dealers
        </p>

        <p className="mt-6 text-sm leading-7 text-neutral-400">
          A strong dealer ecosystem built on trust,
          service and long-term relationships.
        </p>

      </motion.div>

      {/* CARD 3 */}

      <motion.div
        whileHover={{
          y: -10,
        }}
        className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <h3 className="text-5xl font-light text-orange-400">
          100+
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-neutral-500">
          Cities Covered
        </p>

        <p className="mt-6 text-sm leading-7 text-neutral-400">
          Expanding market presence across rapidly
          growing architectural regions.
        </p>

      </motion.div>

      {/* CARD 4 */}

      <motion.div
        whileHover={{
          y: -10,
        }}
        className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <h3 className="text-5xl font-light text-orange-400">
          18+
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-neutral-500">
          States Presence
        </p>

        <p className="mt-6 text-sm leading-7 text-neutral-400">
          Growing distribution network supporting
          dealers and project requirements.
        </p>

      </motion.div>

      {/* CARD 5 */}

      <motion.div
        whileHover={{
          y: -10,
        }}
        className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <h3 className="text-5xl font-light text-orange-400">
          30
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-neutral-500">
          Years Warranty
        </p>

        <p className="mt-6 text-sm leading-7 text-neutral-400">
          Confidence backed by engineered durability,
          performance and product reliability.
        </p>

      </motion.div>

    </div>

  </div>

</section>

      {/* STORY */}

      <section className="relative border-b border-white/10 px-6 py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1450px] gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] uppercase tracking-[0.7em] text-orange-400">
              Brand Philosophy
            </p>

            <h2 className="mt-8 text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] tracking-tight">
              Crafted
              <br />
              For
              <br />
              Generations.
            </h2>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8 text-[16px] leading-9 text-neutral-400"
          >
            <p>
              Every Peacock product is engineered using premium New Zealand
              pine core technology and advanced calibrated manufacturing systems
              designed for precision, stability and long-lasting performance.
            </p>

            <p>
              From modular furniture and wardrobes to luxury commercial
              interiors, Peacock products are crafted to deliver durability,
              elegance and architectural sophistication.
            </p>

            <p>
              We believe exceptional interiors begin with exceptional
              foundations. That belief drives every layer, texture and finish we
              create.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTERIOR + TREE SECTION */}

      <section className="border-b border-white/10 px-6 py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1450px] gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT LARGE */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[700px] overflow-hidden rounded-[40px] border border-white/10"
          >
            <Image
  src="/about/factory.jpg"
  alt="Peacock Factory"
  fill
  className="object-cover object-center"
/>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-10 left-10 max-w-lg">
              <p className="text-[11px] uppercase tracking-[0.7em] text-orange-400">
                Sustainable Interiors
              </p>

              <h3 className="mt-5 text-5xl font-light leading-tight">
                Responsible
                <br />
                Luxury.
              </h3>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}

          <div className="grid gap-8">
            {/* tree */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative h-[340px] overflow-hidden rounded-[40px] border border-white/10"
            >
              <Image
                src="/about/vertical-shot-tall-trees-forest.jpg"
                alt="Trees"
                fill
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </motion.div>

            {/* texture card */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-[0.05]">
                <Image
                  src="/about/wood-texture.jpg"
                  alt="Wood"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative z-10">
                <p className="text-[11px] uppercase tracking-[0.6em] text-orange-400">
                  Material Excellence
                </p>

                <h3 className="mt-5 text-3xl font-light leading-tight">
                  Natural
                  <br />
                  Wood
                  <br />
                  Character.
                </h3>

                <p className="mt-6 text-sm leading-8 text-neutral-400">
                  Rich textures, calibrated precision and premium finishing
                  create a refined material experience for luxury spaces.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}


      {/* MANUFACTURING EXCELLENCE */}

<section className="border-b border-white/10 px-6 py-28 lg:px-16">
  <div className="mx-auto grid max-w-[1450px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">

    {/* LEFT CONTENT */}

    <div className="flex flex-col justify-center">
      <p className="text-[11px] uppercase tracking-[0.8em] text-orange-400">
        Manufacturing Excellence
      </p>

      <h2 className="mt-6 text-[clamp(3rem,6vw,5rem)] font-light leading-[0.95]">
        Precision
        <br />
        Crafted
        <br />
        Performance.
      </h2>

      <p className="mt-10 max-w-xl text-neutral-400 leading-8">
        Every Peacock plywood sheet is engineered through advanced
        manufacturing processes, premium timber selection and rigorous
        quality inspection systems to deliver exceptional strength,
        dimensional stability and long-term durability.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">

        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-lg">Premium Timber</h3>
          <p className="mt-2 text-sm text-neutral-500">
            Carefully selected wood sourced for superior performance.
          </p>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-lg">Calibrated Production</h3>
          <p className="mt-2 text-sm text-neutral-500">
            Precision engineered thickness and uniform surface quality.
          </p>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-lg">Quality Inspection</h3>
          <p className="mt-2 text-sm text-neutral-500">
            Multi-stage testing and verification before dispatch.
          </p>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-lg">Advanced Pressing</h3>
          <p className="mt-2 text-sm text-neutral-500">
            High-pressure manufacturing for superior bonding strength.
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT IMAGE */}

    <div className="relative overflow-hidden rounded-[40px] border border-white/10">

      <Image
        src="/about/stock-yard.jpg"
        alt="Peacock Stock Yard"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* FLOATING CARD */}

      <div className="absolute bottom-8 left-8 rounded-[28px] border border-white/10 bg-black/70 backdrop-blur-xl p-6">
        <h3 className="text-4xl font-light text-orange-400">
          2000+
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.4em] text-neutral-400">
          Ton Monthly Manufacturing
        </p>
      </div>

      {/* TOP TAG */}

      <div className="absolute right-8 top-8 rounded-full border border-white/10 bg-black/70 px-5 py-2 text-xs uppercase tracking-[0.3em] backdrop-blur-xl">
        Premium Production
      </div>

    </div>

  </div>
</section>

      <section className="border-b border-white/10 px-6 py-28 lg:px-16">
        <div className="mx-auto max-w-[1450px]">
          <div className="mb-20">
            <p className="text-[11px] uppercase tracking-[0.7em] text-orange-400">
              Why Choose Peacock
            </p>

            <h2 className="mt-8 text-[clamp(3rem,7vw,6rem)] font-light leading-[0.95] tracking-tight">
              Performance
              <br />
              Meets Luxury.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl transition duration-500"
              >
                <div className="absolute right-5 top-3 text-[120px] font-bold text-white/[0.03]">
                  {item.number}
                </div>

                <div className="mb-8 h-[2px] w-16 bg-orange-400 transition-all duration-500 group-hover:w-28" />

                <h3 className="text-3xl font-light leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 text-sm leading-8 text-neutral-500">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP */}

      <section className="border-b border-white/10 px-6 py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1450px] gap-8 lg:grid-cols-2">
          {/* carpenter */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[720px] overflow-hidden rounded-[40px] border border-white/10"
          >
            <Image
  src="/about/peacock-carpenter.jpg"
  alt="Peacock Craftsmanship"
  fill
  className="object-cover object-center"
  priority
/>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

            <div className="absolute bottom-10 left-10 max-w-md">
              <p className="text-[11px] uppercase tracking-[0.7em] text-orange-400">
                Craftsmanship
              </p>

              <h3 className="mt-5 text-5xl font-light leading-tight">
                Built With
                <br />
                Precision.
              </h3>
            </div>
          </motion.div>

          {/* sustainability */}

          <div className="flex flex-col justify-center gap-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.7em] text-green-400">
                Sustainability
              </p>

              <h2 className="mt-8 text-[clamp(3rem,7vw,5rem)] font-light leading-[0.95] tracking-tight">
                Responsible
                <br />
                Manufacturing.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {sustainability.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
                >
                  <div className="text-5xl font-light text-green-400/20">
                    0{index + 1}
                  </div>

                  <h3 className="mt-6 text-xl font-light leading-tight">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="relative overflow-hidden px-6 py-36 text-center lg:px-16">
        {/* bg */}

        <div className="absolute inset-0">
          <Image
            src="/about/factory-top-view.jpg"
            alt="Forest"
            fill
            className="object-cover opacity-15"
          />

          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="text-[11px] uppercase tracking-[0.8em] text-orange-400">
            Peacock Plywood
          </p>

          <h2 className="mt-8 text-[clamp(3rem,7vw,7rem)] font-light leading-[0.9] tracking-tight">
            Rahe Bemisaal
            <br />
            Chale Saloon Saal
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-[15px] leading-8 text-neutral-400">
            Discover luxury plywood, calibrated block boards and premium flush
            doors engineered for modern architectural and interior applications.
          </p>

          <Link
  href="/products"
  className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-black tracking-[0.3em] uppercase text-sm transition-all duration-300 hover:scale-105 hover:bg-orange-400 hover:text-white"
>
  Explore Collection
</Link>
        </div>
      </section>
      <footer className="border-t border-white/10 bg-black px-6 py-24 text-white">

  <div className="mx-auto max-w-7xl">

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
          href="https://wa.me/918279745569"
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
              href="/products"
              className="transition-all hover:text-white"
            >
              Peacock Plywood
            </a>
          </li>

          <li>
            <a
              href="/products"
              className="transition-all hover:text-white"
            >
              Peacock Block Boards
            </a>
          </li>

          <li>
            <a
              href="/products"
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
            <Link
  href="/about"
  className="transition-all duration-500 hover:text-white"
>
  About Us
</Link>
          </li>

          <li>
            <Link href="/products" className="hover:text-white">
  Products
</Link>
          </li>

          <li>
            <Link href="/gallery" className="hover:text-white">
  Gallery
</Link>
          </li>

          <li>
            <Link href="/contact-us" className="hover:text-white">
  Contact Us
</Link>
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

        <Link href="/about">About Us</Link>

<Link href="/products">Products</Link>

<Link href="/gallery">Gallery</Link>

<Link href="/contact-us">Contact Us</Link>

      </div>

    </div>

  </div>

</footer>
    </main>
  );
}