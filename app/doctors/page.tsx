import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { buildPageMetadata } from "../components/seo";
import { doctors } from "../components/siteData";

export default function DoctorsPage() {
  return (
    <div>
      <Header />
      <main className="site-main">
        <section className="section-shell section-shell--wide px-4 pt-6 md:px-6 md:pt-10">
          <div className="rounded-[32px] bg-white p-8 shadow-[0_16px_40px_rgba(22,56,76,0.1)] md:p-12">
            <p className="text-xs uppercase tracking-[0.18em] text-[#2f88ab]">Doctors</p>
            <h1 className="mt-3 text-[11vw] font-black leading-[0.9] text-[#173040] md:text-[4.8vw]">Meet Our Specialist Team</h1>
            <p className="mt-5 max-w-3xl text-sm text-[#496476] md:text-base">
              Our doctors collaborate across preventive, cosmetic, pediatric, and restorative care to deliver complete smile solutions.
            </p>
          </div>
        </section>

        <section className="section-shell section-shell--wide px-4 pt-12 md:px-6 md:pt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((doctor) => (
              <article key={doctor.name} className="overflow-hidden rounded-2xl border border-[#d2e3ed] bg-white">
                <div className="relative h-80 overflow-hidden">
                  <img className="h-full w-full object-cover object-top" src={doctor.image} alt={doctor.name} />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#173040]">
                    {doctor.credentials}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-bold text-[#173040]">{doctor.name}</p>
                  <p className="text-sm text-[#577285]">{doctor.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-shell--wide px-4 pb-8 pt-12 md:px-6 md:pb-12 md:pt-16">
          <div className="rounded-[24px] bg-[#0d2433] px-6 py-10 text-center text-white md:px-10">
            <h2 className="text-[9vw] font-black md:text-[3vw]">Need Specialist Guidance?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 md:text-base">
              Book a consultation and we will match you with the right specialist for your treatment goals.
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
  title: "Meet Our Dental Specialists",
  description:
    "Get to know our orthodontic, pediatric, surgical, and cosmetic dental specialists at Bright Smiles Dental Clinic.",
  path: "/doctors",
  keywords: ["dental specialists", "orthodontist", "cosmetic dentist", "pediatric dentist"]
});
