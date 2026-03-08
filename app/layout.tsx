import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { clinicInfo, mediaAssets } from "./components/siteData";
import { siteMetadata, siteUrl } from "./components/seo";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = siteMetadata;

const clinicStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": `${siteUrl}/#clinic`,
      name: clinicInfo.name,
      description: clinicInfo.tagline,
      url: siteUrl,
      image: mediaAssets.heroDesktop,
      telephone: clinicInfo.phone,
      email: clinicInfo.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1188 Maple Avenue, Suite 210",
        addressLocality: "Austin",
        addressRegion: "TX",
        postalCode: "78701",
        addressCountry: "US"
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "15:00"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: clinicInfo.name,
      description: clinicInfo.tagline
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicStructuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
