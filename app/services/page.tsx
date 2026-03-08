import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { buildPageMetadata } from "../components/seo";
import { services, valueProps } from "../components/siteData";

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <main className="site-main">
        <section className="section-shell section-shell--wide px-4 pt-6 md:px-6 md:pt-10">
          <div className="rounded-[32px] bg-[linear-gradient(135deg,#113247_0%,#2d6a86_60%,#4f95b3_100%)] px-6 py-16 text-white md:px-12 md:py-20">
            <p className="text-xs uppercase tracking-[0.18em] text-[#d7eef6]">Services</p>
            <h1 className="mt-3 max-w-[11ch] text-[clamp(3.4rem,14vw,5.3rem)] font-black leading-[0.9] [overflow-wrap:anywhere] md:max-w-none md:text-[5vw] md:[overflow-wrap:normal]">
              Comprehensive Dental Treatments
            </h1>
            <p className="mt-5 max-w-2xl text-sm text-white/80 md:text-base">
              From preventive checkups to advanced restorative and cosmetic dentistry, every service is planned around long-term oral health.
            </p>
          </div>
        </section>

        <section className="section-shell section-shell--wide px-4 pt-12 md:px-6 md:pt-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="card-surface rounded-2xl p-8">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0f2736] text-xs font-bold text-white">
                  {service.icon}
                </div>
                <h2 className="mt-5 text-2xl font-black text-[#173040]">{service.title}</h2>
                <p className="mt-3 text-sm text-[#476172]">{service.description}</p>
                <p className="mt-3 text-sm text-[#2a4a60]">{service.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell px-4 pt-12 md:px-6 md:pt-16">
          <div className="rounded-[28px] bg-white p-8 shadow-[0_16px_38px_rgba(24,64,87,0.08)] md:p-12">
            <h2 className="text-[9vw] font-black text-[#173040] md:text-[3.4vw]">Why Choose Our Services</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {valueProps.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#d3e3ed] bg-[#f7fbfd] p-6">
                  <p className="text-base font-bold text-[#173040]">{item.title}</p>
                  <p className="mt-2 text-sm text-[#4a6576]">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell section-shell--wide px-4 pb-8 pt-12 md:px-6 md:pb-12 md:pt-16">
          <div className="rounded-[24px] bg-[#0d2433] px-6 py-10 text-center text-white md:px-10">
            <h2 className="text-[9vw] font-black leading-[0.95] md:text-[3vw]">Start Your Treatment Plan Today</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 md:text-base">
              Book a consultation and receive a complete diagnosis, cost estimate, and timeline in one visit.
            </p>
            <Link href="/book-appointment" className="mt-6 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#113247]">
              Book Appointment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const metadata: Metadata = buildPageMetadata({
  title: "Dental Services",
  description:
    "Explore preventive, cosmetic, orthodontic, implant, and emergency dental services tailored for long-term oral health.",
  path: "/services",
  keywords: ["dental services", "cosmetic dentistry", "orthodontics", "dental implants"]
});
