import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { buildPageMetadata } from "../components/seo";
import { doctors, highlights } from "../components/siteData";

const values = [
  {
    title: "Integrity",
    copy: "Clear treatment plans and transparent pricing at every stage of care."
  },
  {
    title: "Compassion",
    copy: "A calm, respectful patient experience built for comfort and confidence."
  },
  {
    title: "Innovation",
    copy: "Modern diagnostics and minimally invasive techniques for better outcomes."
  },
  {
    title: "Excellence",
    copy: "Specialist-led quality standards with measurable long-term results."
  }
];

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="site-main">
        <section className="section-shell section-shell--wide px-4 pt-6 md:px-6 md:pt-10">
          <div className="rounded-[32px] bg-white p-6 shadow-[0_16px_40px_rgba(22,56,76,0.1)] md:p-10">
            <p className="text-xs uppercase tracking-[0.18em] text-[#2f88ab]">About Us</p>
            <h1 className="mt-3 text-[11vw] font-black leading-[0.9] text-[#173040] md:text-[4.8vw]">A Modern Clinic Built Around Better Smiles</h1>
            <p className="mt-5 max-w-3xl text-sm text-[#496476] md:text-base">
              Bright Smiles started with one mission: deliver advanced, comfortable dentistry that families can trust for life. Today, our multidisciplinary team combines preventive, cosmetic, and restorative expertise under one roof.
            </p>
          </div>
        </section>

        <section className="section-shell px-4 pt-12 md:px-6 md:pt-16">
          <h2 className="text-[9vw] font-black text-[#173040] md:text-[3.2vw]">Our Core Values</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="card-surface rounded-2xl p-8">
                <p className="text-lg font-bold text-[#173040]">{value.title}</p>
                <p className="mt-3 text-sm text-[#4a6576]">{value.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-shell--wide px-4 pt-12 md:px-6 md:pt-16">
          <h2 className="text-[9vw] font-black text-[#173040] md:text-[3.2vw]">Our Doctors</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((doctor) => (
              <article key={doctor.name} className="overflow-hidden rounded-2xl border border-[#77c0d8]/35 bg-[#8fd3e4]">
                <div className="relative h-72 overflow-hidden">
                  <img className="h-full w-full object-cover object-top" src={doctor.image} alt={doctor.name} />
                </div>
                <div className="bg-[#0f2736] p-4 text-white">
                  <p className="font-bold">{doctor.name}</p>
                  <p className="text-sm text-white/80">{doctor.role}</p>
                  <p className="mt-1 text-xs text-[#c7e7f2]">{doctor.credentials}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell px-4 pt-12 md:px-6 md:pt-16">
          <div className="soft-divider grid gap-4 pt-8 sm:grid-cols-2 md:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-black text-[#12384d]">{item.value}</p>
                <p className="mt-1 text-sm text-[#4d6574]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell section-shell--wide px-4 pb-8 pt-12 md:px-6 md:pb-12 md:pt-16">
          <div className="rounded-[24px] bg-[#0d2433] px-6 py-10 text-center text-white md:px-10">
            <h2 className="text-[9vw] font-black md:text-[3vw]">Meet Us In Person</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 md:text-base">
              Visit our clinic for a personalized consultation and discover a dental team focused on lasting outcomes.
            </p>
            <Link href="/contact" className="mt-6 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#113247]">
              Contact Our Team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const metadata: Metadata = buildPageMetadata({
  title: "About Our Dental Team",
  description:
    "Learn about Bright Smiles Dental Clinic, our specialist doctors, and the care standards that guide every treatment plan.",
  path: "/about",
  keywords: ["about dental clinic", "dental specialists", "Austin dentist team"]
});
