import Header from "@/components/Header";
export default function GalleryPage() {
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

    <Header />

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
    Peacock Gallery
  </p>

  <h1 className="mt-6 text-6xl md:text-8xl font-light leading-none">
    Crafted With
    <br />
    Excellence
  </h1>

  <p className="mx-auto mt-8 max-w-3xl text-neutral-400 text-lg">
    Explore luxury doors, premium plywood, block boards,
    manufacturing excellence and completed projects from Peacock.
  </p>

</section>

      {/* GALLERY GRID */}

<section className="mx-auto max-w-[1600px] px-6 pb-24 lg:px-12">

  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

    {[1,2,3,4,5,6,7,8,9].map((item) => (

      <div
        key={item}
        className="group relative aspect-[4/3] overflow-hidden rounded-[32px] border border-white/10"
      >

        {/* IMAGE */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-black transition-transform duration-700 group-hover:scale-110" />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500" />

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 p-8 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

          <p className="text-[10px] uppercase tracking-[0.4em] text-orange-400">
            Peacock Collection
          </p>

          <h3 className="mt-2 text-2xl font-light">
            Premium Project
          </h3>

        </div>

      </div>

    ))}

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