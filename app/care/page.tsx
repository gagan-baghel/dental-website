import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { buildPageMetadata } from "../components/seo";
import { careProducts } from "../components/siteData";

const tips = [
  "Use soft-bristle brushing twice daily for two minutes.",
  "Floss or use interdental cleaners before bedtime.",
  "Replace brush heads every 10-12 weeks.",
  "Follow your dentist's product recommendations for sensitivity and whitening."
];

export default function CarePage() {
  return (
    <div>
      <Header />
      <main className="site-main">
        <section className="section-shell section-shell--wide px-4 pt-6 md:px-6 md:pt-10">
          <div className="rounded-[32px] bg-white p-8 shadow-[0_16px_40px_rgba(22,56,76,0.1)] md:p-12">
            <p className="text-xs uppercase tracking-[0.18em] text-[#2f88ab]">At-Home Care</p>
            <h1 className="mt-3 text-[11vw] font-black leading-[0.9] text-[#173040] md:text-[4.8vw]">Daily Oral Care Essentials</h1>
            <p className="mt-5 max-w-3xl text-sm text-[#496476] md:text-base">
              Keep your treatment results strong between visits with dentist-approved products and routines.
            </p>
          </div>
        </section>

        <section className="section-shell section-shell--wide px-4 pt-12 md:px-6 md:pt-16">
          <div className="grid gap-6 md:grid-cols-3">
            {careProducts.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#d1e2ec] bg-white p-8">
                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0c1f2b] text-sm font-bold text-white">
                  {item.icon}
                </div>
                <h2 className="text-2xl font-black text-[#173040]">{item.title}</h2>
                <hr className="my-4 border-[#2d5670]/25" />
                <p className="text-base text-[#173040]/90">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell px-4 pt-12 md:px-6 md:pt-16">
          <div className="rounded-[28px] border border-[#d3e3ed] bg-[#f7fbfd] p-8 md:p-10">
            <h2 className="text-[9vw] font-black text-[#173040] md:text-[3.2vw]">Simple Routine Tips</h2>
            <ul className="mt-6 grid gap-3 text-sm text-[#4a6576] md:grid-cols-2">
              {tips.map((tip) => (
                <li key={tip} className="rounded-xl border border-[#d4e5ee] bg-white px-4 py-3">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-shell section-shell--wide px-4 pb-8 pt-12 md:px-6 md:pb-12 md:pt-16">
          <div className="rounded-[24px] bg-[#0d2433] px-6 py-10 text-center text-white md:px-10">
            <h2 className="text-[9vw] font-black md:text-[3vw]">Need a Personalized Care Plan?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 md:text-base">
              Book an oral care consultation and get product recommendations tailored to your needs.
            </p>
            <Link href="/book-appointment" className="mt-6 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#113247]">
              Book Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const metadata: Metadata = buildPageMetadata({
  title: "At-Home Dental Care Tips",
  description:
    "Maintain healthy teeth and gums between clinic visits with dentist-approved daily routines and oral care essentials.",
  path: "/care",
  keywords: ["oral care tips", "at-home dental care", "gum care", "teeth whitening maintenance"]
});
