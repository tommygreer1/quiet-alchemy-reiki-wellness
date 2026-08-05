import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Quiet Alchemy Reiki & Wellness",
  description:
    "Reiki, sound healing, breathwork, psychic readings, mediumship, distance Reiki, and soulful wellness experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
