"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cities = [
  "Delhi",
  "Lucknow",
  "Kanpur",
  "Agra",
  "Bareilly",
  "Meerut",
  "Varanasi",
  "Prayagraj",
  "Ayodhya",
  "Gorakhpur",
  "Jhansi",
  "Noida",
  "Ghaziabad",
  "Mathura",
  "Vrindavan",
  "Aligarh",
  "Moradabad",
  "Saharanpur",
  "Muzaffarnagar",
  "Firozabad",
  "Bijnor",
  "Sitapur",
  "Lakhimpur",
  "Raebareli",
  "Sultanpur",
  "Basti",
  "Azamgarh",
  "Jaunpur",
  "Mirzapur",
  "Chandauli",
  "Pratapgarh",
  "Banda",
  "Mahoba",
  "Etawah",
  "Mainpuri",
  "Hapur",
  "Bulandshahr",
  "Khurja",
  "Hathras",
  "Kasganj",
  "Shamli",
  "Rampur",
  "Amroha",
  "Kairana",
  "Khalilabad",
  "Deoria",
  "Kushinagar",
  "Gonda",
  "Bahraich",
  "Balrampur",
];

const stats = [
  {
    number: "100+",
    label: "Cities",
  },
  {
    number: "1000+",
    label: "Dealers",
  },
  {
    number: "24x7",
    label: "Distribution",
  },
];

export default function NetworkPage() {
  return (
    <main className="overflow-hidden bg-black text-white">

      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/network/network-bg.jpg"
          alt="background"
          fill
          className="object-cover opacity-15"
        />
      </div>

      <div className="fixed inset-0 z-0 bg-black/80 backdrop-blur-[3px]" />

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
      <section className="relative z-10 min-h-screen border-b border-white/10 pt-40">

        <div className="mx-auto grid max-w-[1450px] grid-cols-1 gap-16 px-6 pb-24 lg:grid-cols-2 lg:px-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col justify-center"
          >

            <div className="absolute -left-12 top-16 text-[220px] font-black leading-none text-white/[0.03]">
              100+
            </div>

            <p className="mb-8 text-[11px] uppercase tracking-[0.6em] text-orange-400">
              Peacock Distribution Network
            </p>

            <h1 className="max-w-[650px] text-[68px] font-light leading-[0.95] tracking-[-0.05em] md:text-[110px]">
              Growing
              <br />
              Across
              <br />
              India
            </h1>

            <p className="mt-10 max-w-[620px] text-lg leading-9 text-neutral-400">
              Peacock Plywood is building a powerful luxury dealer ecosystem
              delivering premium plywood, block boards and designer doors
              across rapidly growing architectural and interior markets.
            </p>

            {/* STATS */}
            <div className="mt-16 grid grid-cols-3 gap-5">

              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl"
                >

                  <motion.div
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      delay: index,
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-transparent to-yellow-400/10"
                  />

                  <h2 className="relative z-10 text-4xl font-light text-white">
                    {item.number}
                  </h2>

                  <p className="relative z-10 mt-3 text-[11px] uppercase tracking-[0.35em] text-neutral-400">
                    {item.label}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT MAP */}
          {/* RIGHT VIDEO */}

<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="relative flex items-center justify-center"
>
  <div className="relative overflow-hidden rounded-[45px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-3xl">
    <div className="relative h-[620px] w-[520px] overflow-hidden rounded-[35px]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      >
        <source src="/network-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  </div>
</motion.div>

        </div>

        {/* CITIES */}
        <div className="relative z-10 mx-auto max-w-[1450px] px-6 pb-24 lg:px-16">

          <div className="mb-10 flex items-center gap-4">
            <div className="h-[1px] w-16 bg-orange-400" />

            <p className="text-[11px] uppercase tracking-[0.5em] text-orange-400">
              Active Dealer Cities
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl">

            <motion.div
              animate={{
                x: ["0%", "100%", "0%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
              }}
              className="absolute top-0 h-[1px] w-[30%] bg-gradient-to-r from-transparent via-orange-400 to-transparent"
            />

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">

              {cities.map((city, index) => (

                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.03,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl transition-all duration-500 hover:border-orange-400/50"
                >

                  <motion.div
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2 + index * 0.1,
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-transparent to-yellow-400/10"
                  />

                  <div className="relative z-10 flex items-center justify-between">

                    <span className="text-sm tracking-wide text-neutral-200 transition duration-500 group-hover:text-white">
                      {city}
                    </span>

                    <motion.div
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: index * 0.05,
                      }}
                      className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_15px_#fb923c]"
                    />

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* EXTENDED PREMIUM SECTION */}
      <section className="relative z-10 overflow-hidden border-t border-white/10 py-32">

        {/* BG IMAGE */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/network/network-bg.jpg"
            alt="network background"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[140px]"
        />

        <div className="relative mx-auto max-w-[1500px] px-6 lg:px-16">

          <div className="mb-24 flex flex-col items-center text-center">

            <p className="mb-6 text-[11px] uppercase tracking-[0.6em] text-orange-400">
              PAN INDIA DISTRIBUTION
            </p>

            <h2 className="max-w-[1000px] text-[52px] font-light leading-[1] tracking-[-0.05em] md:text-[110px]">
              Expanding
              <span className="mx-6 text-orange-400">Luxury</span>
              Wood
              <br />
              Across Every Market
            </h2>

            <p className="mt-10 max-w-[900px] text-lg leading-9 text-neutral-400">
              Peacock Plywood continues to build one of the fastest growing
              premium dealer ecosystems with luxury plywood, calibrated boards
              and designer doors reaching modern architectural projects across India.
            </p>

          </div>

          {/* GRID */}
          <div className="grid gap-8 lg:grid-cols-3">

            {/* CARD 1 */}
            <motion.div
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-3xl"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

              <Image
                src="/network/network-bg.jpg"
                alt="wood texture"
                fill
                className="object-cover opacity-10 transition duration-700 group-hover:scale-110"
              />

              <div className="relative z-10">

                <div className="mb-8 text-[70px] font-thin text-orange-400">
                  01
                </div>

                <h3 className="text-4xl font-light">
                  Premium Dealer
                  <br />
                  Ecosystem
                </h3>

                <p className="mt-8 text-base leading-8 text-neutral-400">
                  Strategically expanding dealer partnerships focused on luxury
                  architecture, modular interiors and premium furniture markets.
                </p>

              </div>

            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-3xl"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

              <div className="relative z-10">

                <div className="mb-8 text-[70px] font-thin text-yellow-300">
                  02
                </div>

                <h3 className="text-4xl font-light">
                  Fast
                  <br />
                  Distribution
                </h3>

                <p className="mt-8 text-base leading-8 text-neutral-400">
                  Efficient logistics network delivering calibrated plywood,
                  marine boards and luxury doors across rapidly growing cities.
                </p>

                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="mt-10 h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
                />

              </div>

            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-3xl"
            >

              <Image
                src="/network/network-bg.jpg"
                alt="dealer network"
                fill
                className="object-cover opacity-10 transition duration-700 group-hover:scale-110"
              />

              <div className="relative z-10">

                <div className="mb-8 text-[70px] font-thin text-white">
                  03
                </div>

                <h3 className="text-4xl font-light">
                  Trusted
                  <br />
                  Nationwide
                </h3>

                <p className="mt-8 text-base leading-8 text-neutral-400">
                  A growing trusted network of distributors, architects and
                  interior professionals choosing Peacock for premium projects.
                </p>

                <div className="mt-12 flex gap-4">

                  {[1, 2, 3, 4].map((item) => (
                    <motion.div
                      key={item}
                      animate={{
                        scale: [1, 1.6, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: item * 0.2,
                      }}
                      className="h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_20px_#fb923c]"
                    />
                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-black/70">

        <div className="mx-auto grid max-w-[1450px] grid-cols-1 gap-16 px-8 py-20 md:grid-cols-4">

          <div>

            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={80}
            />

            <p className="mt-6 text-sm leading-7 text-neutral-500">
              Premium plywood, block boards and luxury doors crafted for
              modern architectural excellence.
            </p>

          </div>

          <div>

            <h3 className="mb-6 text-sm uppercase tracking-[0.4em] text-orange-400">
              Navigation
            </h3>

            <div className="space-y-4 text-sm text-neutral-400">
              <Link href="/">Home</Link>
              <br />
              <Link href="/about">About</Link>
              <br />
              <Link href="/products">Products</Link>
              <br />
              <Link href="/network">Network</Link>
            </div>

          </div>

          <div>

            <h3 className="mb-6 text-sm uppercase tracking-[0.4em] text-orange-400">
              Presence
            </h3>

            <p className="text-sm leading-8 text-neutral-400">
              100+ Cities
              <br />
              1000+ Dealers
              <br />
              Nationwide Supply
            </p>

          </div>

          <div>

            <h3 className="mb-6 text-sm uppercase tracking-[0.4em] text-orange-400">
              Contact
            </h3>

            <p className="text-sm leading-8 text-neutral-400">
              Peacock Plywood
              <br />
              India
              <br />
              info@peacockplywood.com
            </p>

          </div>

        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs tracking-[0.3em] text-neutral-600">
          © 2026 PEACOCK PLYWOOD
        </div>

      </footer>

    </main>
  );
}