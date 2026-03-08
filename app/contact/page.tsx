"use client";

import { FormEvent } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { clinicInfo, services } from "../components/siteData";

export default function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <div>
      <Header />
      <main className="site-main">
        <section className="section-shell section-shell--wide px-4 pt-6 md:px-6 md:pt-10">
          <div className="rounded-[32px] bg-[linear-gradient(135deg,#113247_0%,#2d6a86_60%,#4f95b3_100%)] px-6 py-16 text-white md:px-12 md:py-20">
            <p className="text-xs uppercase tracking-[0.18em] text-[#b7d9e8]">Contact Us</p>
            <h1 className="mt-3 text-[12vw] font-black leading-[0.9] md:text-[5vw]">Book a Visit or Ask a Question</h1>
            <p className="mt-5 max-w-2xl text-sm text-white/80 md:text-base">
              Reach out for routine care, specialist treatment planning, or urgent appointments.
            </p>
          </div>
        </section>

        <section className="section-shell section-shell--wide px-4 pt-12 md:px-6 md:pt-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form onSubmit={handleSubmit} className="rounded-[24px] bg-white p-8 shadow-[0_16px_38px_rgba(24,64,87,0.08)] md:p-10">
              <h2 className="text-3xl font-black text-[#173040]">Send a Message</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <input className="form-input" type="text" placeholder="Full Name" required />
                <input className="form-input" type="email" placeholder="Email" required />
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <input className="form-input" type="tel" placeholder="Phone" required />
                <select className="form-input" defaultValue="" required>
                  <option value="" disabled>
                    Treatment Type
                  </option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <input className="form-input" type="date" required />
                <input className="form-input" type="time" required />
              </div>
              <textarea className="form-input mt-5 min-h-32" placeholder="Message" required />
              <button className="mt-5 rounded-xl bg-[#0c1f2b] px-6 py-3 text-sm font-semibold text-white">Submit Request</button>
            </form>

            <div className="space-y-5">
              <article className="rounded-2xl border border-[#c8dbe7] bg-white/90 p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-[#2f6f8c]">Clinic Address</p>
                <p className="mt-2 text-sm text-[#35566d]">{clinicInfo.address}</p>
                <p className="mt-3 text-sm text-[#35566d]">Phone: {clinicInfo.phone}</p>
                <p className="text-sm text-[#35566d]">Email: {clinicInfo.email}</p>
              </article>
              <article className="rounded-2xl border border-[#c8dbe7] bg-white/90 p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-[#2f6f8c]">Working Hours</p>
                <div className="mt-2 space-y-1 text-sm text-[#35566d]">
                  {clinicInfo.hours.map((hour) => (
                    <p key={hour}>{hour}</p>
                  ))}
                </div>
              </article>
              <article className="rounded-2xl border border-[#c8dbe7] bg-white/90 p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-[#2f6f8c]">Map</p>
                <div className="mt-3 h-40 rounded-xl border border-dashed border-[#aac6d6] bg-[#edf5fa] p-4 text-sm text-[#3f6178]">
                  Interactive map placeholder for {clinicInfo.address}
                </div>
              </article>
              <article className="rounded-2xl bg-[#0f2736] p-6 text-white">
                <p className="text-xs uppercase tracking-[0.15em] text-[#9fc5d6]">Emergency Support</p>
                <p className="mt-2 text-sm text-white/85">For urgent dental pain, swelling, or trauma, call our emergency line now.</p>
                <a href={`tel:${clinicInfo.emergencyPhone.replace(/[^\d+]/g, "")}`} className="mt-3 inline-flex font-semibold">
                  {clinicInfo.emergencyPhone}
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
