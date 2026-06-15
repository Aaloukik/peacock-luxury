import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 z-[200] w-full">

  <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

    {/* LOGO */}

    <Link
  href="/"
  className="transition-all duration-500 hover:scale-105"
>

      <img
        src="/logo.png"
        alt="Peacock"
        className="w-[120px] md:w-[170px] object-contain"
      />

    </Link>

    {/* MENU */}

    <nav className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.35em] text-white/80">

  <Link href="/about">About Us</Link>

  <Link href="/products">Product</Link>

  <Link href="/network">Network</Link>

  <Link href="/certificates">Certificates</Link>

  <Link href="/gallery">Gallery</Link>

  <Link href="/blog">Blog</Link>

  <Link href="/contact-us">Contact Us</Link>

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
    </>
  );
}