"use client";

import Image from "next/image";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const plywoodProducts = [
  {
    name: "Peacock Plywood",
    image: "/products/gold-plywood.jpg",
    years: "7 YEARS",
    subtitle: "303 BWR GRADE",
    description:
      "Reliable calibrated plywood engineered for modern interiors and residential furniture applications.",
    thickness: ["6mm", "9mm", "12mm", "18mm", "19mm", "25mm"],
    features: [
      "303 BWR Grade",
      "Zero Gap",
      "E1 Emission",
      "Calibrated",
    ],
  },
  {
    name: "Diamond Club",
    image: "/products/diamond-plywood.jpg",
    years: "21 YEARS",
    subtitle: "710 BWP MARINE",
    description:
      "Premium waterproof plywood crafted with New Zealand pine technology for luxury interiors and modular furniture.",
    thickness: ["6mm", "9mm", "12mm", "18mm", "19mm", "25mm"],
    features: [
      "710 BWP",
      "Waterproof",
      "Marine Grade",
      "Calibrated",
    ],
  },
  {
    name: "Platinum Club Plywood",
    image: "/products/platinum-plywood.jpg",
    years: "30 YEARS",
    subtitle: "LUXURY SERIES",
    description:
      "Elite architectural plywood designed for sophisticated interiors and premium furniture applications.",
    thickness: ["6mm", "9mm", "12mm", "18mm", "19mm", "25mm"],
    features: [
      "710 BWP",
      "Termite Resistant",
      "Waterproof",
      "Zero Gap",
    ],
  },
];

const blockBoardProducts = [
  {
    name: "Peacock Block Board",
    image: "/products/gold-block.jpg",
    years: "15 YEARS",
    subtitle: "IS 1659",
    description:
      "Stable calibrated block board crafted with premium New Zealand pine technology.",
    thickness: ["6mm", "9mm", "12mm", "18mm", "19mm", "25mm"],
    features: [
      "IS 1659",
      "NZ Pine",
      "E1 Emission",
      "Calibrated",
    ],
  },
  {
    name: "Diamond Club Block Board",
    image: "/products/diamond-block.jpg",
    years: "21 YEARS",
    subtitle: "PREMIUM SERIES",
    description:
      "Heavy-duty waterproof block board engineered for wardrobes and modular furniture.",
    thickness: ["6mm", "9mm", "12mm", "18mm", "19mm", "25mm"],
    features: [
      "Waterproof",
      "Zero Gap",
      "Calibrated",
      "NZ Pine",
    ],
  },
  {
    name: "Platinum Club Block Board",
    image: "/products/platinum-block.jpg",
    years: "30 YEARS",
    subtitle: "LUXURY SERIES",
    description:
      "Ultra premium termite resistant block board designed for luxury residential interiors.",
    thickness: ["6mm", "9mm", "12mm", "18mm", "19mm", "25mm"],
    features: [
      "Termite Resistant",
      "Waterproof",
      "NZ Pine",
      "Premium Grade",
    ],
  },
];

const doorProducts = [
  {
    name: "Platinum Club Door",
    image: "/products/platinum-door.jpg",
    years: "30 YEARS",
    subtitle: "IS 2202",
    description:
      "Luxury calibrated flush doors crafted with New Zealand pine core technology.",
    thickness: ["25mm", "30mm"],
    features: [
      "Calibrated Door",
      "Waterproof",
      "NZ Pine",
      "Luxury Finish",
    ],
  },
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [activeDoor, setActiveDoor] = useState(0);
  
const doorImages = [
  "/products/door1.jpg",
  "/products/door2.jpg",
  "/products/door3.jpg",
  "/products/door4.jpg",
];

const orderedDoors = [
  ...doorImages.slice(activeDoor),
  ...doorImages.slice(0, activeDoor),
];

useEffect(() => {
  const interval = setInterval(() => {
    setActiveDoor((prev) => (prev + 1) % doorImages.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

  const sections = [
    {
      title: "Plywood Collection",
      items: plywoodProducts,
      color: "text-orange-400",
    },
    {
      title: "Block Board Series",
      items: blockBoardProducts,
      color: "text-yellow-400",
    },
    {
      title: "Luxury Doors",
      items: doorProducts,
      color: "text-blue-400",
    },
  ];

  return (
    <main className="mx-auto max-w-[1600px] overflow-hidden bg-black text-white">
        <header className="fixed top-0 left-0 z-[200] w-full">

  <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

    <Header />

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

      <section className="relative flex min-h-[88vh] items-center justify-center border-b border-white/10 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.15),transparent_60%)]" />

<div className="max-w-xl">
  <p className="mb-6 text-xs uppercase tracking-[0.7em] text-orange-400">
    Peacock Premium Doors
  </p>

  <h1 className="text-[clamp(4rem,8vw,8rem)] font-light leading-none">
    Luxury
    <br />
    Doors
    <br />
    Collection
  </h1>

  <p className="mt-10 text-[15px] leading-8 text-neutral-400">
    Crafted with New Zealand Pine Core Technology, Peacock Doors
    combine strength, precision engineering and luxury aesthetics.
    Designed for premium residences, hotels and modern architectural
    spaces.
  </p>
</div>

        <div className="relative h-[650px] w-[420px] mx-auto hidden lg:block">

  {orderedDoors.map((image, index) => (
    <motion.div
      key={image}
      animate={{
        y: index * 15,
        x: index * 12,
        rotate: index === 0 ? 0 : index * 4,
        scale: 1 - index * 0.04,
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="absolute inset-0 overflow-hidden rounded-[32px] border border-white/20 bg-black"
      style={{
        zIndex: 10 - index,
      }}
    >
      <Image
        src={image}
        alt={`Door ${index}`}
        fill
        sizes="420px"
        className="object-cover"
      />
    </motion.div>
  ))}

</div>
      </section>

      {/* SECTIONS */}

      <div className="space-y-0">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <div className="sticky top-0 z-20 border-b border-white/10 bg-black/80 px-8 py-5 backdrop-blur-xl">
              <h2
                className={`text-xl uppercase tracking-[0.35em] ${section.color}`}
              >
                {section.title}
              </h2>
            </div>

            {section.items.map((product, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="grid min-h-[88vh] border-b border-white/10 lg:grid-cols-2"
              >
                {/* LEFT */}

                <div
                  className={`flex items-center px-8 py-16 lg:px-20 ${
                    index % 2 === 0 ? "order-1" : "order-2"
                  }`}
                >
                  <div className="max-w-lg">
                    <p className="mb-5 text-xs uppercase tracking-[0.5em] text-orange-400">
                      Peacock Collection
                    </p>

                    <h2 className="text-[clamp(3.2rem,6vw,7rem)] font-light leading-none tracking-tight">
                      {product.name}
                    </h2>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-[10px] uppercase tracking-[0.35em] text-orange-300">
                        {product.subtitle}
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] uppercase tracking-[0.35em] text-white/70">
                        {product.years}
                      </span>
                    </div>

                    <p className="mt-8 text-[15px] leading-8 text-neutral-400">
                      {product.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {product.features.map((feature: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.25em]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="group mt-10 overflow-hidden rounded-full border border-white/20 px-9 py-4 text-xs uppercase tracking-[0.45em] transition-all duration-500 hover:border-orange-400 hover:bg-orange-400 hover:text-black"
                    >
                      Explore Product
                    </button>
                  </div>
                </div>

                {/* RIGHT */}

                <div
                  className={`relative flex items-center justify-center overflow-hidden ${
                    index % 2 === 0 ? "order-2" : "order-1"
                  }`}
                >
                  <div className="absolute h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[120px]" />

                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      rotate: -1,
                    }}
                    transition={{ duration: 0.7 }}
                    className="relative h-[72vh] w-full"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-16 scale-[0.92]"
                    />
                  </motion.div>
                </div>
              </motion.section>
            ))}
          </div>
        ))}
      </div>

      {/* POPUP */}

      {selectedProduct && (
        <div
  className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 p-6 backdrop-blur-xl"
>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[35px] border border-white/10 bg-[#0b0b0b]"
          >
            <button
  onClick={() => setSelectedProduct(null)}
  style={{
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: 99999,
    width: "60px",
    height: "60px",
    background: "red",
    color: "white",
    cursor: "pointer",
  }}
>
  X
</button>

            <div className="grid lg:grid-cols-2">
              {/* IMAGE */}

              <div className="relative min-h-[550px] border-r border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.12),transparent_60%)]" />

                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain p-10 scale-90"
                />
              </div>

              {/* CONTENT */}

              <div className="p-10 lg:p-14">
                <p className="text-xs uppercase tracking-[0.5em] text-orange-400">
                  Peacock Premium Product
                </p>

                <h2 className="mt-5 text-5xl font-light leading-none">
                  {selectedProduct.name}
                </h2>

                <p className="mt-8 text-[15px] leading-8 text-neutral-400">
                  {selectedProduct.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  {selectedProduct.features.map(
                    (feature: string, i: number) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.25em]"
                      >
                        {feature}
                      </span>
                    )
                  )}
                </div>

                {/* THICKNESS */}

                <div className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
                  <h3 className="text-sm uppercase tracking-[0.35em] text-orange-400">
                    Available Thickness
                  </h3>

                  <div className="mt-7 flex flex-wrap gap-4">
                    {selectedProduct.thickness.map(
                      (size: string, i: number) => (
                        <div
                          key={i}
                          className="rounded-2xl border border-white/10 bg-black px-5 py-3 text-sm"
                        >
                          {size}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* WARRANTY */}

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
                    <h4 className="text-[10px] uppercase tracking-[0.45em] text-neutral-500">
                      Warranty
                    </h4>

                    <p className="mt-4 text-4xl font-light">
                      {selectedProduct.years}
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
                    <h4 className="text-[10px] uppercase tracking-[0.45em] text-neutral-500">
                      Product Grade
                    </h4>

                    <p className="mt-4 text-2xl font-light">
                      {selectedProduct.subtitle}
                    </p>
                  </div>
                </div>

                <button className="mt-10 w-full rounded-full bg-white px-10 py-5 text-xs uppercase tracking-[0.4em] text-black transition duration-500 hover:bg-orange-400">
                  Contact For Inquiry
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
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
            <a href="/about" className="hover:text-white">
              About Us
            </a>
          </li>

          <li>
            <a href="/products" className="hover:text-white">
              Products
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-white">
              Gallery
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
            info@peacockplywood.com
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

      </div>

    </div>

  </div>

</footer>
    </main>
  );
}