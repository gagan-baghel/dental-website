"use client";

import Image from "next/image";
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
    document.body.classList.toggle("menu-open", menuOpen);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
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
          className="inline-flex h-11 items-center rounded-full px-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#123347] transition md:px-3"
          aria-label="Bright Smiles home"
        >
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#123347] shadow-[0_8px_18px_rgba(18,51,71,0.16)]">
            <Image src="/logo.png" alt="Bright Smiles logo" width={36} height={36} className="h-8 w-8 object-contain invert" priority />
          </span>
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eef5f9] text-[#123347] transition hover:bg-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="relative flex h-4 w-4 items-center justify-center" aria-hidden="true">
            <span
              className={`absolute h-0.5 w-4 rounded-full bg-current transition-transform duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-0.5 w-4 rounded-full bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-4 rounded-full bg-current transition-transform duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 transition md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          onClick={closeMenu}
          className={`absolute inset-0 bg-[#0c2231]/42 backdrop-blur-sm transition duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu overlay"
        />

        <nav
          id="mobile-navigation"
          className={`absolute inset-x-2 bottom-2 top-[4.5rem] overflow-y-auto rounded-[28px] border border-white/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(234,244,249,0.98)_100%)] px-3 py-3 text-[#123347] shadow-[0_30px_70px_rgba(12,34,49,0.22)] transition duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-end">
            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d4e2ea] bg-white text-[#123347] shadow-[0_10px_22px_rgba(18,51,71,0.08)]"
              aria-label="Close menu"
            >
              <span className="relative block h-4 w-4" aria-hidden="true">
                <span className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-current" />
                <span className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
              </span>
            </button>
          </div>

          <div className="grid gap-2">
            {navLinks.map((item) => (
              <Link
                key={`mobile-primary-${item.href}`}
                href={item.href}
                onClick={closeMenu}
                className="rounded-[20px] bg-white px-4 py-4 text-base font-bold shadow-[0_12px_26px_rgba(18,51,71,0.06)] transition hover:bg-[#f7fbfd]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
