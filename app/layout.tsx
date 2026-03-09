import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lyoldndebele.co.zw"),
  title: {
    default: "Lyold Ndebele | Cinematographer & 1st AC",
    template: "%s | Lyold Ndebele",
  },
  description:
    "Lyold Ndebele is a professional cinematographer, 1st AC, and drone operator based in Zimbabwe. Explore cinematic projects across commercials, documentaries, events, and branded content.",
  keywords: [
    "Lyold Ndebele",
    "Cinematographer Zimbabwe",
    "1st AC",
    "Drone Operator",
    "Film Production Zimbabwe",
    "Commercial Cinematography",
    "Documentary Filmmaker",
  ],
  authors: [{ name: "Lyold Ndebele" }],
  creator: "Lyold Ndebele",
  openGraph: {
    title: "Lyold Ndebele | Cinematographer & Visual Storyteller",
    description:
      "Professional cinematography, 1st AC services, and aerial drone visuals.",
    url: "https://lyoldndebele.co.zw",
    siteName: "Lyold Ndebele Portfolio",
    images: [
      {
        url: "/projects/lyold-hero-image.png",
        width: 1200,
        height: 630,
        alt: "Lyold Ndebele on set",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyold Ndebele | Cinematographer",
    description: "Cinematography, 1st AC, and aerial drone visuals.",
    images: ["/projects/lyold-hero-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-black text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
