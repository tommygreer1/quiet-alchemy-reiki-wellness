import "./globals.css";

const siteUrl = "https://www.thequietalchemyreikiwellness.org";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sound Healing Journeys | The Quiet Alchemy",
    template: "%s | The Quiet Alchemy",
  },
  description:
    "The Quiet Alchemy offers restorative sound healing journeys with singing bowls, melodic handpans, and elemental chimes. Other offerings are available by inquiry.",
  keywords: [
    "sound healing",
    "sound healing journeys",
    "singing bowl sound bath",
    "crystal singing bowls",
    "handpan sound healing",
    "The Quiet Alchemy",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "The Quiet Alchemy",
    title: "Sound Healing Journeys | The Quiet Alchemy",
    description:
      "Restorative sound healing journeys with singing bowls, melodic handpans, and elemental chimes. Other offerings are available by inquiry.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Quiet Alchemy | Sound Healing Journeys",
    description:
      "Sound healing journeys with singing bowls, melodic handpans, and elemental chimes.",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "The Quiet Alchemy",
  url: siteUrl,
  telephone: "+1-815-570-7804",
  email: "Michellebartrum25@gmail.com",
  description:
    "Restorative sound healing journeys with singing bowls, melodic handpans, and elemental chimes. Other offerings are available by inquiry.",
  areaServed: [
    { "@type": "City", name: "Ellijay", addressRegion: "GA" },
    { "@type": "City", name: "Blue Ridge", addressRegion: "GA" },
    { "@type": "City", name: "Jasper", addressRegion: "GA" },
    { "@type": "AdministrativeArea", name: "North Georgia" },
  ],
  serviceType: [
    "Reiki",
    "Distance Reiki",
    "Sound Healing Journeys",
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
