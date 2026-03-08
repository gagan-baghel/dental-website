import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "../components/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Book a Dental Appointment",
  description:
    "Schedule your consultation, preventive care, cosmetic treatment, or urgent dental visit with Bright Smiles Dental Clinic.",
  path: "/book-appointment",
  keywords: ["book dental appointment", "schedule dentist", "dental consultation Austin"]
});

export default function BookAppointmentLayout({ children }: { children: ReactNode }) {
  return children;
}
