import Link from "next/link";
import { clinicInfo, footerLinks, services } from "./siteData";

const socialLinks = ["Facebook", "Instagram", "LinkedIn", "YouTube"];

export function Footer() {
  return (
    <footer className="section-shell section-shell--wide px-4 pb-10 pt-14 md:px-6 md:pt-20">
      <div className="grid gap-10 rounded-[34px] bg-[#0c1f2b] p-8 text-white md:grid-cols-2 lg:grid-cols-4 lg:p-12">
        <div>
          <p className="text-3xl font-black">Bright Smiles</p>
          <p className="mt-4 text-sm leading-relaxed text-white/80">{clinicInfo.tagline}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.15em] text-[#8fc3da]">Follow us</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold transition hover:border-[#8fc3da] hover:text-[#8fc3da]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold">Quick Links</h3>
          <div className="mt-5 space-y-3 text-sm text-white/80">
            {footerLinks.quick.map((item) => (
              <Link key={item.href} href={item.href} className="block transition hover:text-[#8fc3da]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold">Services</h3>
          <div className="mt-5 space-y-3 text-sm text-white/80">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="block transition hover:text-[#8fc3da]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-bold">Contact</h3>
          <div className="mt-5 space-y-3 text-sm text-white/80">
            <p>{clinicInfo.address}</p>
            <a href={`tel:${clinicInfo.phone.replace(/[^\d+]/g, "")}`} className="block transition hover:text-[#8fc3da]">
              {clinicInfo.phone}
            </a>
            <a href={`mailto:${clinicInfo.email}`} className="block transition hover:text-[#8fc3da]">
              {clinicInfo.email}
            </a>
            <p className="pt-2 text-xs uppercase tracking-[0.12em] text-[#8fc3da]">Hours</p>
            {clinicInfo.hours.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 text-xs text-[#35566d] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Bright Smiles Dental Clinic. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {footerLinks.legal.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#17384d]">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
