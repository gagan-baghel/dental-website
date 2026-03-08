import type { Metadata } from "next";
import { clinicInfo, mediaAssets } from "./siteData";

export const siteUrl = "https://brightsmilesclinic.com";
export const siteName = clinicInfo.name;
export const defaultDescription =
  "Comprehensive dental care including preventive, cosmetic, orthodontic, implant, and emergency services with a comfort-first patient experience.";
const ogImageUrl = mediaAssets.heroDesktop;

const defaultKeywords = [
  "dentist",
  "family dentist",
  "cosmetic dentistry",
  "dental implants",
  "teeth whitening",
  "orthodontics",
  "emergency dentist",
  "Austin dental clinic",
  "Bright Smiles Dental Clinic"
];

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildPageMetadata({ title, description, path, keywords = [] }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    keywords: [...defaultKeywords, ...keywords],
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImageUrl,
          width: 1800,
          height: 1200,
          alt: `${siteName} - premium dental care`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  category: "healthcare",
  title: "Bright Smiles Dental Clinic | Premium Family & Cosmetic Dentistry",
  description: defaultDescription,
  alternates: {
    canonical: "/"
  },
  keywords: defaultKeywords,
  openGraph: {
    title: "Bright Smiles Dental Clinic | Premium Family & Cosmetic Dentistry",
    description: defaultDescription,
    url: "/",
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: ogImageUrl,
        width: 1800,
        height: 1200,
        alt: `${siteName} - premium dental care`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Smiles Dental Clinic | Premium Family & Cosmetic Dentistry",
    description: defaultDescription,
    images: [ogImageUrl]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon-light-32x32.png", type: "image/png", sizes: "32x32" }
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  }
};
