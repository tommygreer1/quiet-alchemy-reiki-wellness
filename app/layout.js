import "./globals.css";

const siteUrl = "https://www.thequietalchemyreikiwellness.org";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sound Healing & Reiki in Woodstock, GA | The Quiet Alchemy",
    template: "%s | The Quiet Alchemy",
  },
  description:
    "The Quiet Alchemy offers sound healing and Reiki in Woodstock, Georgia. Other offerings are available by inquiry.",
  keywords: [
    "sound healing",
    "Reiki Woodstock GA",
    "sound healing Woodstock GA",
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
    title: "Sound Healing & Reiki in Woodstock, GA | The Quiet Alchemy",
    description:
      "Sound healing and Reiki sessions in Woodstock, Georgia. Other offerings are available by inquiry.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Quiet Alchemy | Sound Healing & Reiki",
    description:
      "Sound healing and Reiki sessions in Woodstock, Georgia.",
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
    "Sound healing and Reiki sessions in Woodstock, Georgia. Other offerings are available by inquiry.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4463 Towne Lake Parkway, Suite 100",
    addressLocality: "Woodstock",
    addressRegion: "GA",
    postalCode: "30189",
    addressCountry: "US",
  },
  areaServed: [{ "@type": "City", name: "Woodstock", addressRegion: "GA" }],
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
