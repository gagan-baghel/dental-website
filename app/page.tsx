"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import {
  careProducts,
  doctors,
  faqItems,
  highlights,
  mediaAssets,
  processSteps,
  services,
  testimonials,
  trustItems,
  valueProps
} from "./components/siteData";

const popupSeenKey = "bright-smiles-booking-popup-seen";

export default function Home() {
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [showBookingPopup, setShowBookingPopup] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        return;
      }

      gsap.from("[data-hero-copy]", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      });

      gsap.from("[data-hero-visual]", {
        x: 36,
        opacity: 0,
        duration: 0.65,
        ease: "power2.out",
        delay: 0.05
      });

      gsap.to("[data-hero-visual]", {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero]",
          start: "top top",
          end: "bottom top",
          scrub: 0.5
        }
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: section,
              start: "top 95%",
              once: true,
              fastScrollEnd: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        const items = group.querySelectorAll("[data-stagger-item]");
        if (!items.length) {
          return;
        }

        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.48,
            stagger: 0.07,
            ease: "power2.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: group,
              start: "top 96%",
              once: true,
              fastScrollEnd: true
            }
          }
        );
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.sessionStorage.getItem(popupSeenKey) === "1") {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowBookingPopup(true);
    }, 18000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!showBookingPopup) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        window.sessionStorage.setItem(popupSeenKey, "1");
        setShowBookingPopup(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showBookingPopup]);

  const closePopup = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(popupSeenKey, "1");
    }
    setShowBookingPopup(false);
  };

  const handlePopupSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(popupSeenKey, "1");
    }
    setShowBookingPopup(false);
    router.push("/book-appointment");
  };

  return (
    <div ref={rootRef} className="text-[#0e2533]">
      <Header />

      <main className="site-main pb-20 md:pb-28">
        <section id="home" data-hero className="section-shell section-shell--wide px-4 pt-1 md:px-6 md:pt-10">
          <div className="relative overflow-hidden rounded-[34px] border border-white/35 bg-[linear-gradient(135deg,#86bbd1_0%,#74abc4_56%,#5f98b5_100%)] px-5 pb-10 pt-14 md:rounded-[40px] md:px-16 md:pb-20 md:pt-36">
            <div className="pointer-events-none absolute -left-16 top-20 h-52 w-52 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute right-4 top-8 h-64 w-64 rounded-full bg-[#b8dded]/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-12 bottom-10 h-56 w-56 rounded-full border border-white/25" />

            <div data-hero-copy className="relative z-10 max-w-2xl pb-2 md:pb-12">
              <p className="mb-4 inline-flex rounded-full border border-white/70 bg-white/18 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/95 md:mb-5 md:text-xs md:tracking-[0.2em]">
                Trusted Dental Care
              </p>
              <h1 className="max-w-[7.5ch] text-[15vw] font-black leading-[0.9] text-white md:max-w-none md:text-[7vw]">
                Expert Dental Care
              </h1>
              <h2 className="mt-3 text-[8.4vw] font-bold leading-[0.95] text-white md:mt-2 md:text-[4vw]">for Your Smile</h2>
              <div className="mt-8 flex flex-col items-start gap-4 md:mt-10 md:flex-wrap md:flex-row md:items-center md:gap-5">
                <Link
                  href="/book-appointment"
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-white px-6 py-4 text-base font-semibold text-[#4f8dac] shadow-[0_14px_30px_rgba(255,255,255,0.25)] md:min-h-0 md:w-auto md:px-8 md:text-lg"
                >
                  Book Appointment
                </Link>
                <p className="max-w-[18rem] text-sm font-semibold leading-snug text-white/90 md:max-w-none">
                  4.9 rating across 1,000+ happy patients
                </p>
              </div>
            </div>

            <div className="absolute right-8 top-20 z-10 hidden rounded-2xl border border-white/55 bg-white/25 px-5 py-4 text-white backdrop-blur-md md:block">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/85">This Month</p>
              <p className="text-2xl font-black">126</p>
              <p className="text-xs text-white/90">Successful smile makeovers</p>
            </div>

            <div data-hero-visual className="pointer-events-none mt-8 md:absolute md:bottom-0 md:right-0 md:h-full md:w-[44%]">
              <img
                className="w-full rounded-2xl border border-white/45 object-cover md:hidden"
                src={mediaAssets.heroMobile}
                alt="Smiling patient"
              />
              <img className="hidden h-full w-full object-cover object-center md:block" src={mediaAssets.heroDesktop} alt="Smiling patient" />
            </div>
          </div>
        </section>

        <section data-reveal className="section-shell section-shell--wide px-4 pt-8 md:px-6 md:pt-12">
          <div className="rounded-[30px] border border-[#c1d8e5] bg-white/90 p-8 shadow-[0_16px_38px_rgba(24,64,87,0.08)] md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f6f8c]">Trusted standards</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {trustItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#b4cfdd] bg-[#eef5f9] px-4 py-2 text-xs font-semibold text-[#1a4359]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-[#d5e3ec] bg-[#f4f9fc] px-6 py-6 text-[#173040]">
                <p className="text-4xl font-black">1,000+</p>
                <p className="mt-2 text-sm text-[#4a6576]">Families trust Bright Smiles for long-term preventive and specialist care.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" data-reveal className="section-shell section-shell--wide px-4 pt-14 md:px-6 md:pt-20">
          <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] xl:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6f8c]">Why choose us</p>
              <h3 className="mt-4 max-w-[13ch] text-[clamp(2.4rem,5vw,5rem)] font-bold leading-[0.96] tracking-tight text-[#173040]">
                Personalized dentistry for comfort, precision, and lasting results.
              </h3>
              <p className="mt-8 max-w-[40rem] text-lg leading-relaxed text-[#4d6574]">
                We combine preventive care, cosmetic planning, and modern treatment technology so each patient gets a clear plan and a confident smile.
              </p>
              <div className="soft-divider mt-12 grid gap-x-10 gap-y-8 pt-10 sm:grid-cols-2 lg:grid-cols-4">
                {highlights.map((item) => (
                  <div key={item.label}>
                    <p className="text-4xl font-black text-[#12384d]">{item.value}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#4d6574]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div data-stagger className="card-surface rounded-[30px] border-[#d3e3ed] bg-white/70 p-7 md:p-10">
              {valueProps.map((item, index) => (
                <article
                  key={item.title}
                  data-stagger-item
                  className="flex gap-4 border-b border-[#d7e5ee] py-6 first:pt-2 last:border-b-0 last:pb-2"
                >
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf5fa] text-xs font-bold text-[#2f6f8c]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-xl font-bold text-[#12384d]">{item.title}</p>
                    <p className="mt-2 text-base leading-relaxed text-[#476172]">{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" data-reveal className="section-shell section-shell--wide px-4 pt-14 md:px-6 md:pt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6f8c]">Treatments</p>
              <h2 className="mt-2 text-[10vw] font-black text-[#173040] md:text-[4vw]">Services We Provide</h2>
            </div>
            <Link href="/services" className="rounded-full bg-[#102c3d] px-5 py-3 text-sm font-semibold text-white">
              Explore Full Services
            </Link>
          </div>

          <div data-stagger className="mt-10 grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <article key={service.title} data-stagger-item className="card-surface card-hover rounded-2xl p-8">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0f2736] text-xs font-bold text-white">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-2xl font-black text-[#173040]">{service.title}</h3>
                <p className="mt-4 text-sm text-[#476172]">{service.description}</p>
                <Link href="/services" className="mt-6 inline-flex text-sm font-semibold text-[#2f6f8c]">
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="process" data-reveal className="section-shell section-shell--wide px-4 pt-14 md:px-6 md:pt-20">
          <div className="rounded-[36px] bg-white/90 p-8 shadow-[0_16px_42px_rgba(23,56,77,0.1)] md:p-14">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-[9vw] font-black text-[#173040] md:text-[3.4vw]">How It Works</h2>
              <Link href="/book-appointment" className="text-sm font-semibold text-[#2f6f8c]">
                Start Your Journey
              </Link>
            </div>
            <div data-stagger className="relative mt-12 grid gap-6 md:grid-cols-4">
              <div className="absolute left-0 right-0 top-8 hidden h-[2px] bg-[#d0e1eb] md:block" />
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative rounded-2xl border border-[#d4e3ec] bg-[#f8fcfe] p-7"
                  data-stagger-item
                >
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0f2736] text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-lg font-bold text-[#173040]">{step.title}</p>
                  <p className="mt-3 text-sm text-[#476172]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" data-reveal className="section-shell section-shell--wide px-4 pt-14 md:px-6 md:pt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6f8c]">Patient Stories</p>
              <h2 className="mt-2 text-[10vw] font-black text-[#173040] md:text-[3.7vw]">Loved by Families</h2>
            </div>
            <Link href="/testimonials" className="rounded-full border border-[#b8cfdd] bg-white px-5 py-3 text-sm font-semibold text-[#173040]">
              View All Reviews
            </Link>
          </div>

          <div data-stagger className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((item) => (
              <article
                key={item.name}
                data-stagger-item
                className="group relative overflow-hidden rounded-2xl border border-[#d2e2eb] bg-white p-6 text-[#173040]"
              >
                <div className="flex items-center gap-3">
                  <img className="h-14 w-14 rounded-full border border-[#d8e7f0] object-cover" src={item.image} alt={item.name} />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-[#173040]">{item.name}</p>
                    <p className="text-xs text-[#607d90]">{item.treatment}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-[#466173]">{item.quote}</p>
                <p className="mt-5 text-xs tracking-[0.12em] text-[#2f6f8c]">★★★★★</p>
              </article>
            ))}
          </div>
        </section>

        <section id="doctors" data-reveal className="section-shell section-shell--wide px-4 pt-14 md:px-6 md:pt-20">
          <div className="rounded-[34px] bg-white/90 px-7 pb-10 pt-10 shadow-[0_16px_45px_rgba(33,84,112,0.12)] backdrop-blur-sm md:px-12 md:pt-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-[11vw] font-black text-[#173040] md:text-[4vw]">Our Specialists</h2>
              <Link href="/doctors" className="rounded-full bg-[#102c3d] px-6 py-3 text-sm font-semibold text-white">
                View All Doctors
              </Link>
            </div>
            <div data-stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {doctors.slice(0, 3).map((doctor) => (
                <article
                  key={doctor.name}
                  data-stagger-item
                  className="group overflow-hidden rounded-2xl border border-[#d2e3ed] bg-white"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                      src={doctor.image}
                      alt={doctor.name}
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#173040]">
                      {doctor.credentials}
                    </span>
                  </div>
                  <div className="bg-white p-5 text-[#173040]">
                    <p className="font-bold">{doctor.name}</p>
                    <p className="text-sm text-[#577285]">{doctor.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="care" data-reveal className="section-shell section-shell--wide px-4 pt-14 md:px-6 md:pt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[10vw] font-black text-[#173040] md:text-[4vw]">At-Home Care</h2>
            <Link href="/care" className="rounded-full border border-[#b8cfdd] bg-white px-5 py-3 text-sm font-semibold text-[#173040]">
              Explore Care Collection
            </Link>
          </div>
          <div data-stagger className="mt-10 grid gap-6 md:grid-cols-3">
            {careProducts.map((item) => (
              <article key={item.title} data-stagger-item className="rounded-2xl border border-[#d1e2ec] bg-white p-8">
                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0c1f2b] text-sm font-bold text-white">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-[#173040]">{item.title}</h3>
                <hr className="my-4 border-[#2d5670]/25" />
                <p className="text-base text-[#173040]/90">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" data-reveal className="section-shell px-4 pt-14 md:px-6 md:pt-20">
          <div className="mx-auto max-w-5xl rounded-[30px] border border-[#d2e3ec] bg-white/85 p-8 md:p-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6f8c]">FAQ</p>
                <h2 className="mt-2 text-[10vw] font-black text-[#173040] md:text-[3.6vw]">Quick Answers</h2>
              </div>
              <Link href="/faq" className="text-sm font-semibold text-[#2f6f8c]">
                Visit FAQ Page
              </Link>
            </div>
            <div className="mt-8 space-y-4">
              {faqItems.slice(0, 3).map((item) => (
                <article key={item.question} className="rounded-2xl border border-[#c8dbe7] bg-white/95 p-6">
                  <p className="text-base font-semibold text-[#173040]">{item.question}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#486273]">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section data-reveal className="section-shell section-shell--wide px-4 pt-14 md:px-6 md:pt-20">
          <div className="rounded-[34px] bg-[#0d2433] px-8 py-14 text-center text-white md:px-12 md:py-16">
            <p className="text-xs uppercase tracking-[0.18em] text-[#9bc4d8]">Premium Smile Care</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-[10vw] font-black leading-[0.95] md:text-[3.5vw]">Ready for your best smile?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 md:text-base">
              Schedule a personalized consultation and get a clear treatment roadmap from our specialist team.
            </p>
            <Link href="/book-appointment" className="mt-7 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#113247]">
              Book Your Visit
            </Link>
          </div>
        </section>
      </main>

      {showBookingPopup && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-6">
          <button
            type="button"
            onClick={closePopup}
            className="absolute inset-0 bg-[#0c2231]/60 backdrop-blur-sm"
            aria-label="Close booking popup"
          />
          <div className="relative z-10 w-full max-w-xl rounded-[28px] border border-[#cfe0ea] bg-white p-6 shadow-[0_24px_60px_rgba(12,34,49,0.25)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f6f8c]">Book Now</p>
            <h3 className="mt-2 text-3xl font-black leading-tight text-[#173040]">Ready to book your appointment?</h3>
            <p className="mt-3 text-sm text-[#4d6574]">Share a few details and continue to the full booking page.</p>

            <form onSubmit={handlePopupSubmit} className="mt-6 grid gap-4">
              <input className="form-input" type="text" placeholder="Full Name" required />
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="form-input" type="tel" placeholder="Phone" required />
                <select className="form-input" defaultValue="" required>
                  <option value="" disabled>
                    Treatment Type
                  </option>
                  {services.map((service) => (
                    <option key={`popup-${service.title}`} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <button type="submit" className="rounded-xl bg-[#0c1f2b] px-6 py-3 text-sm font-semibold text-white">
                  Continue Booking
                </button>
                <button
                  type="button"
                  onClick={closePopup}
                  className="rounded-xl border border-[#d4e3ec] px-6 py-3 text-sm font-semibold text-[#173040]"
                >
                  Maybe Later
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
