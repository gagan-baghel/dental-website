import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { buildPageMetadata } from "../components/seo";
import { testimonials } from "../components/siteData";

export default function TestimonialsPage() {
  return (
    <div>
      <Header />
      <main className="site-main">
        <section className="section-shell section-shell--wide px-4 pt-6 md:px-6 md:pt-10">
          <div className="rounded-[32px] bg-white p-8 shadow-[0_16px_40px_rgba(22,56,76,0.1)] md:p-12">
            <p className="text-xs uppercase tracking-[0.18em] text-[#2f88ab]">Testimonials</p>
            <h1 className="mt-3 text-[11vw] font-black leading-[0.9] text-[#173040] md:text-[4.8vw]">Patient Experiences</h1>
            <p className="mt-5 max-w-3xl text-sm text-[#496476] md:text-base">
              Real stories from patients who trusted Bright Smiles for preventive, cosmetic, and emergency care.
            </p>
          </div>
        </section>

        <section className="section-shell section-shell--wide px-4 pt-12 md:px-6 md:pt-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl border border-[#d2e2eb] bg-white p-6 text-[#173040]">
                <div className="flex items-center gap-3">
                  <img className="h-14 w-14 rounded-full border border-[#d8e7f0] object-cover" src={item.image} alt={item.name} />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-[#173040]">{item.name}</p>
                    <p className="text-xs text-[#607d90]">{item.treatment}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-[#466173]">{item.quote}</p>
                <p className="mt-5 text-xs tracking-[0.12em] text-[#2f88ab]">★★★★★</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-shell--wide px-4 pb-8 pt-12 md:px-6 md:pb-12 md:pt-16">
          <div className="rounded-[24px] bg-[#0d2433] px-6 py-10 text-center text-white md:px-10">
            <h2 className="text-[9vw] font-black md:text-[3vw]">Ready to Experience This Care?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 md:text-base">
              Book your first appointment and receive a tailored treatment plan from our specialist team.
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
  title: "Patient Testimonials",
  description:
    "Read verified patient experiences from cosmetic, implant, emergency, and preventive dental treatments at Bright Smiles.",
  path: "/testimonials",
  keywords: ["dental testimonials", "patient reviews", "dental clinic ratings"]
});
