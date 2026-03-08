"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { faqItems } from "../components/siteData";

const categories = ["General", "Treatments", "Insurance", "Appointments"] as const;
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("General");
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqItems[0]?.question ?? null);

  const filteredFaqs = useMemo(
    () => faqItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Header />
      <main className="site-main">
        <section className="section-shell px-4 pt-6 md:px-6 md:pt-10">
          <div className="rounded-[32px] bg-white p-6 shadow-[0_16px_40px_rgba(22,56,76,0.1)] md:p-10">
            <p className="text-xs uppercase tracking-[0.18em] text-[#2f88ab]">FAQ</p>
            <h1 className="mt-3 text-[11vw] font-black leading-[0.9] text-[#173040] md:text-[4.8vw]">Answers to Common Dental Questions</h1>
            <p className="mt-5 max-w-3xl text-sm text-[#496476] md:text-base">
              Browse by category to quickly find details about appointments, treatment options, insurance, and care guidelines.
            </p>
          </div>
        </section>

        <section className="section-shell px-4 pt-10 md:px-6 md:pt-14">
          <div className="rounded-2xl border border-[#d3e3ed] bg-[#f5fafc] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2f88ab]">Browse by category</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    const firstQuestion = faqItems.find((item) => item.category === category)?.question ?? null;
                    setOpenQuestion(firstQuestion);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "bg-[#0f2736] text-white"
                      : "bg-white text-[#173040] hover:bg-[#e8f2f8]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {filteredFaqs.map((item) => {
              const open = item.question === openQuestion;

              return (
                <article key={item.question} className="rounded-2xl border border-[#c8dbe7] bg-white p-6">
                  <button
                    type="button"
                    onClick={() => setOpenQuestion(open ? null : item.question)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-base font-semibold text-[#173040]">{item.question}</span>
                    <span className="text-2xl font-light text-[#2f88ab]">{open ? "-" : "+"}</span>
                  </button>
                  {open && <p className="mt-4 text-sm leading-relaxed text-[#486273]">{item.answer}</p>}
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-shell section-shell--wide px-4 pb-8 pt-12 md:px-6 md:pb-12 md:pt-16">
          <div className="rounded-[24px] bg-[#0d2433] px-6 py-10 text-center text-white md:px-10">
            <h2 className="text-[9vw] font-black md:text-[3vw]">Still Need Help?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75 md:text-base">
              Talk to our care team and get personalized guidance for your treatment and appointment planning.
            </p>
            <Link href="/book-appointment" className="mt-6 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#113247]">
              Book a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
