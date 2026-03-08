import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "../components/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Dental FAQ",
  description:
    "Find answers about treatments, insurance, appointments, and routine dental care at Bright Smiles Dental Clinic.",
  path: "/faq",
  keywords: ["dental FAQ", "dental insurance questions", "appointment questions"]
});

export default function FaqLayout({ children }: { children: ReactNode }) {
  return children;
}
