export default function CertificatesPage() {
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

<section className="pt-40 pb-24 text-center">

  <p className="text-[12px] uppercase tracking-[0.5em] text-orange-400">
    Warranty Assurance
  </p>

  <h1 className="mt-6 text-6xl md:text-8xl font-light leading-none">
    Peacock's
    <br />
    Lifetime Warranty
  </h1>

  <p className="mx-auto mt-8 max-w-3xl text-lg text-white/60">
    Peacock Laminates & Plywood products are backed by
    comprehensive warranty protection, reflecting our
    commitment to durability, reliability and long-term
    performance.
  </p>

</section>

<section className="mx-auto max-w-[1400px] px-6 pb-16">

  <div className="rounded-[32px] border border-orange-400/20 bg-orange-400/5 p-10 text-center">

    <p className="text-[12px] uppercase tracking-[0.5em] text-orange-400">
      Warranty Coverage
    </p>

    <h2 className="mt-4 text-5xl font-light">
      Up To 30 Years
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-white/60">
      Designed for lasting strength and dependable performance,
      Peacock products are supported by warranty coverage that
      gives customers complete confidence in their investment.
    </p>

  </div>

</section>

      {/* CERTIFICATES */}

      <section className="py-24 text-center">
  <p className="text-[12px] uppercase tracking-[0.5em] text-orange-400">
    Warranty Certificates
  </p>

  <h1 className="mt-6 text-6xl md:text-8xl font-light">
    Confidence of
    <br />
    Written Certificate
  </h1>

  <p className="mx-auto mt-8 max-w-3xl text-neutral-400">
    Every Peacock Plywood product is backed by trusted warranty
    protection, ensuring reliability, durability and long-term value.
  </p>
</section>

<section className="mx-auto max-w-[1500px] px-6 pb-24 lg:px-12">

  <div className="grid gap-8 lg:grid-cols-3">

    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02]">
  <img
    src="/certificates/certificate1.jpg"
    alt="30 Year Warranty Certificate"
    className="w-full transition duration-700 hover:scale-105"
  />

  <div className="p-6">
    <h3 className="text-xl font-light text-white">
      30 Year Warranty Certificate
    </h3>

    <p className="mt-3 text-sm text-neutral-400">
      Premium Peacock Plywood products backed by a comprehensive
      30-year warranty commitment for long-term durability and trust.
    </p>
  </div>
</div>

    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02]">
  <img
    src="/certificates/certificate2.jpg"
    alt="15 Years Warranty Certificates"
    className="w-full transition duration-700 hover:scale-105"
  />

  <div className="p-6">
    <h3 className="text-xl font-light text-white">
      15 Years Warranty Certificate
    </h3>

    <p className="mt-3 text-sm text-neutral-400">
      Assurance of manufacturing quality standards, reliability,
      performance and customer satisfaction.
    </p>
  </div>
</div>

    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02]">
  <img
    src="/certificates/certificate3.jpg"
    alt="Customer Warranty Protection"
    className="w-full transition duration-700 hover:scale-105"
  />

  <div className="p-6">
    <h3 className="text-xl font-light text-white">
      7 Years Warranty Certificate
    </h3>

    <p className="mt-3 text-sm text-neutral-400">
      Dedicated warranty support designed to protect customer
      investment and ensure peace of mind.
    </p>
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