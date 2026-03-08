"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Reviews", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

const homeSectionLinks = [
  { label: "About", href: "/about" },
  { label: "Care", href: "/care" },
  { label: "Book Appointment", href: "/book-appointment" }
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 18);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isHome = pathname === "/";
  const headerSolid = !isHome || hasScrolled || menuOpen;

  const navLinks = primaryLinks;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-10 md:pt-8">
      <div
        className={`section-shell flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6 ${
          headerSolid
            ? "border-[#c7dce8] bg-white/95 shadow-[0_18px_35px_rgba(22,56,76,0.12)] backdrop-blur-xl"
            : "border-[#cfdfeb] bg-white/72 shadow-[0_10px_22px_rgba(22,56,76,0.08)] backdrop-blur-xl"
        }`}
      >
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-full px-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#123347] transition"
        >
          Bright Smiles
        </Link>

        <nav className="hidden items-center gap-3 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-[#1b435a] transition hover:bg-[#eef5f9]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/book-appointment"
            className="ml-2 inline-flex h-11 items-center rounded-full bg-[#102c3d] px-5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(16,44,61,0.24)]"
          >
            Book Now
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 items-center rounded-full bg-[#eef5f9] px-4 text-sm font-semibold text-[#123347] transition md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <nav
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-5 bg-[#0c2231]/95 px-6 text-white backdrop-blur-xl transition ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        {[...primaryLinks, ...homeSectionLinks].map((item) => (
          <Link
            key={`mobile-${item.href}-${item.label}`}
            href={item.href}
            onClick={closeMenu}
            className="text-center text-3xl font-black tracking-tight md:text-5xl"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
