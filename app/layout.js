import "./globals.css";

const siteUrl = "https://www.thequietalchemyreikiwellness.org";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Reiki & Psychic Readings in Ellijay, GA | The Quiet Alchemy",
    template: "%s | The Quiet Alchemy",
  },
  description:
    "The Quiet Alchemy offers Reiki, distance Reiki, psychic readings, mediumship, channeling, intuitive guidance, and breathwork in Ellijay, Blue Ridge, Jasper, and North Georgia.",
  keywords: [
    "Reiki Ellijay GA",
    "Reiki North Georgia",
    "psychic readings Ellijay GA",
    "mediumship Ellijay GA",
    "energy healing Ellijay",
    "distance Reiki",
    "breathwork Ellijay GA",
    "Reiki Blue Ridge GA",
    "Reiki Jasper GA",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "The Quiet Alchemy",
    title: "Reiki & Psychic Readings in Ellijay, GA | The Quiet Alchemy",
    description:
      "Reiki, psychic readings, mediumship, channeling, intuitive guidance, breathwork, and distance sessions serving Ellijay and North Georgia.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Quiet Alchemy | Ellijay, GA",
    description:
      "Reiki, psychic readings, mediumship, intuitive guidance, breathwork, and distance sessions in Ellijay and North Georgia.",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "The Quiet Alchemy",
  url: siteUrl,
  telephone: "+1-815-570-7804",
  email: "info@thequietalchemyreikiwellness.org",
  description:
    "Reiki, distance Reiki, psychic readings, mediumship, channeling, intuitive guidance, and breathwork serving Ellijay and North Georgia.",
  areaServed: [
    { "@type": "City", name: "Ellijay", addressRegion: "GA" },
    { "@type": "City", name: "Blue Ridge", addressRegion: "GA" },
    { "@type": "City", name: "Jasper", addressRegion: "GA" },
    { "@type": "AdministrativeArea", name: "North Georgia" },
  ],
  serviceType: [
    "Reiki",
    "Distance Reiki",
    "Psychic Readings",
    "Mediumship",
    "Channeling",
    "Intuitive Guidance",
    "Breathwork",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
