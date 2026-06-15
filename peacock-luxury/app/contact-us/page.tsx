export default function ContactPage() {
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
    Contact Peacock
  </p>

  <h1 className="mt-6 text-6xl md:text-8xl font-light leading-none">
    Let's Build
    <br />
    Something Strong
  </h1>

  <p className="mx-auto mt-8 max-w-3xl text-lg text-neutral-400">
    Connect with Peacock Laminates & Plywood for product inquiries,
    dealership opportunities, project requirements and customer support.
  </p>
</section>

      {/* CONTACT INFO */}

<section className="mx-auto max-w-[1500px] px-6 pb-24 lg:px-12">

  <div className="grid gap-6 md:grid-cols-3">

    <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">
      <p className="text-[11px] uppercase tracking-[0.4em] text-orange-400">
        Call Us
      </p>

      <h3 className="mt-5 text-3xl font-light">
        +91 82797 45569
      </h3>

      <p className="mt-4 text-neutral-400">
        Speak directly with our support and sales team.
      </p>
    </div>

    <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">
      <p className="text-[11px] uppercase tracking-[0.4em] text-orange-400">
        Email Us
      </p>

      <h3 className="mt-5 text-3xl font-light">
        info@peacocklaminates.com
      </h3>

      <p className="mt-4 text-neutral-400">
        Send product, dealership or project inquiries.
      </p>
    </div>

    <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">
      <p className="text-[11px] uppercase tracking-[0.4em] text-orange-400">
        Visit Us
      </p>

      <h3 className="mt-5 text-3xl font-light">
        Budaun, Uttar Pradesh
      </h3>

      <p className="mt-4 text-neutral-400">
        Meet our team and explore our product range.
      </p>
    </div>

  </div>

</section>

      {/* CONTACT FORM + MAP */}

<section className="mx-auto max-w-[1500px] px-6 py-24 lg:px-12">

  <div className="grid gap-8 lg:grid-cols-2">

    {/* FORM */}

    <div className="rounded-[36px] border border-white/10 bg-white/[0.02] p-10">

      <p className="text-[11px] uppercase tracking-[0.4em] text-orange-400">
        Send Inquiry
      </p>

      <h2 className="mt-4 text-5xl font-light">
        Get In Touch
      </h2>

      <div className="mt-10 space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-full border border-white/10 bg-transparent px-6 py-4 outline-none"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full rounded-full border border-white/10 bg-transparent px-6 py-4 outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-full border border-white/10 bg-transparent px-6 py-4 outline-none"
        />

        <input
          type="text"
          placeholder="City"
          className="w-full rounded-full border border-white/10 bg-transparent px-6 py-4 outline-none"
        />

        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full rounded-[25px] border border-white/10 bg-transparent p-6 outline-none"
        />

        <button
          className="rounded-full bg-orange-500 px-8 py-4 text-sm uppercase tracking-[0.3em] transition hover:bg-orange-600"
        >
          Send Inquiry
        </button>

      </div>

    </div>

    {/* MAP */}

    <div className="overflow-hidden rounded-[36px] border border-white/10">

      <iframe
        src="https://maps.google.com/maps?q=28.032445,79.134829&z=15&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "700px" }}
        loading="lazy"
      />

    </div>

  </div>

</section>

      {/* FAQ */}

<section className="mx-auto max-w-[1200px] px-6 py-24">

  <div className="text-center">

    <p className="text-[11px] uppercase tracking-[0.5em] text-orange-400">
      Frequently Asked Questions
    </p>

    <h2 className="mt-6 text-5xl md:text-7xl font-light">
      Common
      <br />
      Questions
    </h2>

  </div>

  <div className="mt-20 space-y-6">

    <details className="group rounded-[28px] border border-white/10 p-8">
      <summary className="cursor-pointer text-xl font-light list-none">
        Does Peacock provide a warranty on its products?
      </summary>

      <p className="mt-6 text-neutral-400 leading-8">
        Yes. Peacock products are backed by warranty assurance, offering
        long-term confidence in quality, durability and performance.
      </p>
    </details>

    <details className="group rounded-[28px] border border-white/10 p-8">
      <summary className="cursor-pointer text-xl font-light list-none">
        How can I become a Peacock dealer or distributor?
      </summary>

      <p className="mt-6 text-neutral-400 leading-8">
        You can contact our sales team through the inquiry form or WhatsApp.
        Our team will guide you through the dealership process and requirements.
      </p>
    </details>

    <details className="group rounded-[28px] border border-white/10 p-8">
      <summary className="cursor-pointer text-xl font-light list-none">
        What products does Peacock offer?
      </summary>

      <p className="mt-6 text-neutral-400 leading-8">
        Peacock offers premium plywood, block boards, flush doors and related
        interior and construction solutions.
      </p>
    </details>

    <details className="group rounded-[28px] border border-white/10 p-8">
      <summary className="cursor-pointer text-xl font-light list-none">
        Can I request product information or a catalogue?
      </summary>

      <p className="mt-6 text-neutral-400 leading-8">
        Absolutely. Submit your inquiry through the contact form and our team
        will share detailed product information and catalogues.
      </p>
    </details>

    <details className="group rounded-[28px] border border-white/10 p-8">
      <summary className="cursor-pointer text-xl font-light list-none">
        Do you supply products across India?
      </summary>

      <p className="mt-6 text-neutral-400 leading-8">
        Yes. Peacock has a growing distribution network serving dealers,
        architects, contractors and customers across multiple regions in India.
      </p>
    </details>

  </div>

</section>

      {/* CTA */}

<section className="mx-auto max-w-[1500px] px-6 pb-24 lg:px-12">

  <div className="rounded-[40px] border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-transparent p-16 text-center">

    <p className="text-[11px] uppercase tracking-[0.5em] text-orange-400">
      Peacock Network
    </p>

    <h2 className="mt-6 text-5xl md:text-7xl font-light">
      Looking For
      <br />
      A Dealership?
    </h2>

    <p className="mx-auto mt-8 max-w-2xl text-neutral-400">
      Join Peacock's growing network of dealers and distributors across India.
    </p>

    <a
      href="https://wa.me/91XXXXXXXXXX"
      className="mt-10 inline-block rounded-full border border-orange-500 px-8 py-4 text-sm uppercase tracking-[0.3em] transition hover:bg-orange-500"
    >
      Contact Sales Team
    </a>

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