import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "../components/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Bright Smiles Dental Clinic",
  description:
    "Contact Bright Smiles for appointments, treatment guidance, and emergency dental support in Austin, Texas.",
  path: "/contact",
  keywords: ["contact dentist", "Austin dental clinic contact", "emergency dental support"]
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
