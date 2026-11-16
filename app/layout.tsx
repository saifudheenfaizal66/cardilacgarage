import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO } from "@/data/business";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09090D",
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${BUSINESS_INFO.domain}`),
  title: BUSINESS_INFO.seo.title,
  description: BUSINESS_INFO.seo.description,
  icons: {
    icon: BUSINESS_INFO.logos.emblem,
    shortcut: BUSINESS_INFO.logos.emblem,
    apple: BUSINESS_INFO.logos.emblem,
  },
  openGraph: {
    title: BUSINESS_INFO.seo.title,
    description: BUSINESS_INFO.seo.description,
    type: "website",
    locale: "en_IN",
    siteName: BUSINESS_INFO.displayName,
    images: [
      {
        url: "/images/hero-studio.jpg",
        width: 1408,
        height: 768,
        alt: "Cardilac Garage Car Detailing and Protection Studio in Alappuzha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS_INFO.seo.title,
    description: BUSINESS_INFO.seo.description,
    images: ["/images/hero-studio.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    name: BUSINESS_INFO.displayName,
    legalName: BUSINESS_INFO.legalRegisteredName,
    alternateName: ["Cardilac", "Cardilac Garage Detailing Studio"],
    url: `https://${BUSINESS_INFO.domain}`,
    description: BUSINESS_INFO.seo.description,
    logo: `https://${BUSINESS_INFO.domain}${BUSINESS_INFO.logos.emblem}`,
    image: `https://${BUSINESS_INFO.domain}/images/hero-studio.jpg`,
    telephone: [BUSINESS_INFO.phoneDisplay, BUSINESS_INFO.secondaryPhoneDisplay],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Valappuzha / Valanjavazhy Junction, Ambalapuzha, Vandanam",
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      postalCode: "688005",
      addressCountry: "IN",
    },
    hasMap: BUSINESS_INFO.googleMapsUrl,
    sameAs: [
      `https://${BUSINESS_INFO.domain}`,
      BUSINESS_INFO.googleBusinessUrl,
      BUSINESS_INFO.googleMapsUrl,
    ],
  };

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${syne.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#09090D] font-sans text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
