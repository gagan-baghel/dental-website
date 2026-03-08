import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { buildPageMetadata } from "../components/seo";
import { clinicInfo } from "../components/siteData";

export default function PrivacyPage() {
  return (
    <div>
      <Header />
      <main className="site-main">
        <section className="section-shell px-4 pt-6 md:px-6 md:pt-10">
          <article className="rounded-[28px] bg-white p-8 shadow-[0_16px_40px_rgba(22,56,76,0.1)] md:p-12">
            <p className="text-xs uppercase tracking-[0.16em] text-[#2f6f8c]">Privacy Policy</p>
            <h1 className="mt-3 text-[10vw] font-black text-[#173040] md:text-[4vw]">Patient Privacy & HIPAA Notice</h1>
            <p className="mt-2 text-sm text-[#557082]">Effective date: March 8, 2026</p>

            <div className="mt-8 space-y-8 text-sm leading-relaxed text-[#35566d]">
              <section>
                <h2 className="text-lg font-bold text-[#173040]">1. Information We Collect</h2>
                <p className="mt-2">
                  We collect contact information, appointment details, treatment history, and clinical records needed to provide dental services, billing, insurance coordination, and follow-up care.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#173040]">2. How We Use Protected Health Information (PHI)</h2>
                <p className="mt-2">
                  In accordance with HIPAA, we use PHI for treatment, payment, and healthcare operations. We may also use limited information for appointment reminders, care coordination, and legally required reporting.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#173040]">3. Your Rights</h2>
                <p className="mt-2">
                  You have the right to access your records, request corrections, request confidential communications, and receive an accounting of disclosures where required by law.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#173040]">4. Security Practices</h2>
                <p className="mt-2">
                  We maintain administrative, physical, and technical safeguards including role-based access controls, encrypted systems, secure backup procedures, and periodic compliance reviews.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#173040]">5. Third-Party Services</h2>
                <p className="mt-2">
                  We may use trusted service providers for appointment systems, analytics, or payment processing. Where PHI is involved, we require appropriate contractual privacy protections.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#173040]">6. Contact</h2>
                <p className="mt-2">
                  For privacy questions, requests, or complaints, contact {clinicInfo.name} at {clinicInfo.email} or {clinicInfo.phone}.
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
  title: "Privacy Policy & HIPAA Notice",
  description:
    "Understand how Bright Smiles Dental Clinic collects, uses, and protects patient data in compliance with HIPAA guidelines.",
  path: "/privacy",
  keywords: ["dental privacy policy", "HIPAA notice", "patient data protection"]
});
