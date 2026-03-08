import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { buildPageMetadata } from "../components/seo";

export default function TermsPage() {
  return (
    <div>
      <Header />
      <main className="site-main">
        <section className="section-shell px-4 pt-6 md:px-6 md:pt-10">
          <article className="rounded-[28px] bg-white p-8 shadow-[0_16px_40px_rgba(22,56,76,0.1)] md:p-12">
            <p className="text-xs uppercase tracking-[0.16em] text-[#2f88ab]">Terms of Service</p>
            <h1 className="mt-3 text-[10vw] font-black text-[#173040] md:text-[4vw]">Website Terms & Conditions</h1>
            <p className="mt-2 text-sm text-[#557082]">Effective date: March 8, 2026</p>

            <div className="mt-8 space-y-8 text-sm leading-relaxed text-[#35566d]">
              <section>
                <h2 className="text-lg font-bold text-[#173040]">1. Scope</h2>
                <p className="mt-2">
                  These terms govern your use of the Bright Smiles website and online booking features. By using this site, you agree to these terms and applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#173040]">2. Medical Disclaimer</h2>
                <p className="mt-2">
                  Website content is for informational purposes only and does not replace professional diagnosis or treatment. For urgent concerns, contact emergency services or call our emergency line.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#173040]">3. Appointments and Cancellations</h2>
                <p className="mt-2">
                  Appointment requests are subject to confirmation. We may reschedule visits due to clinical emergencies, staffing, or equipment needs. Please provide at least 24-hour notice for cancellations when possible.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#173040]">4. Payment and Insurance</h2>
                <p className="mt-2">
                  Patients are responsible for balances not covered by insurance. Cost estimates are informational and final charges may vary based on clinical findings and authorized treatment changes.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#173040]">5. Acceptable Use</h2>
                <p className="mt-2">
                  You agree not to misuse site functionality, submit false appointment data, interfere with platform security, or reproduce protected site content without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#173040]">6. Changes to Terms</h2>
                <p className="mt-2">
                  We may update these terms periodically. Continued use of the website after updates means you accept the revised terms.
                </p>
              </section>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service",
  description:
    "Review Bright Smiles Dental Clinic website terms, appointment policies, payment terms, and acceptable use conditions.",
  path: "/terms",
  keywords: ["dental website terms", "appointment terms", "clinic terms and conditions"]
});
