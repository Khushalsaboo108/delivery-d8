import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer, Header } from "../components/site";
import LogisticsPreloader from "../components/preloader/LogisticsPreloader";

const siteName = "Shree Balaji Enterprises";
const siteDescription =
  "Reliable courier, cargo and goods transportation services from Shree Balaji Enterprises in Jodhpur, Rajasthan.";
const defaultOgImage = {
  url: "/about-us-hero.jpeg",
  width: 1055,
  height: 887,
  alt: "Shree Balaji Enterprises team outside their Jodhpur logistics office",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shreebalajienterprises.in"),
  title: {
    default: "Shree Balaji Enterprises | Courier & Logistics in Jodhpur",
    template: "%s | Shree Balaji Enterprises",
  },
  description: siteDescription,
  keywords: [
    "courier service Jodhpur",
    "cargo services Jodhpur",
    "logistics company Rajasthan",
    "B2B courier Jodhpur",
    "goods transportation Jodhpur",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName,
    title: "Shree Balaji Enterprises | Courier & Logistics in Jodhpur",
    description: siteDescription,
    url: "/",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Balaji Enterprises | Courier & Logistics in Jodhpur",
    description: siteDescription,
    images: [defaultOgImage.url],
  },
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/logo.png",
      },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  description: siteDescription,
  url: "https://shreebalajienterprises.in",
  image: "https://shreebalajienterprises.in/about-us-hero.jpeg",
  telephone: "+91-9999999999",
  email: "hello@shreebalajienterprises.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jodhpur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  areaServed: "IN",
  priceRange: "₹₹",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <LogisticsPreloader />
        <Header />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
        <Footer />
      </body>
    </html>
  );
}
