import "./globals.css";

export const metadata = {
  title: "The Quiet Alchemy | Reiki, Psychic Readings & Mediumship",
  description: "The Quiet Alchemy offers Reiki, distance Reiki, intuitive guidance, psychic readings, mediumship, channeling, and breathwork in the Atlanta area and beyond.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
