import "./globals.css";
import Navbar from "../components/Navbar";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Shree Boutique | Bespoke Tailoring & Designer Studio Ahmedabad",
  description:
    "Shree Boutique in Bodakdev, Ahmedabad specializes in custom bridal blouses, handcrafted chaniya cholis, designer kurtis, lehenga stitching, and saree redesign. Tailored to your exact fit.",
  keywords: [
    "Shree Boutique",
    "Shree Boutique Ahmedabad",
    "Shree Boutique Bodakdev",
    "Boutique in Bodakdev Ahmedabad",
    "custom blouse stitching Ahmedabad",
    "bridal blouse designer Ahmedabad",
    "chaniya choli stitching",
    "ladies tailor Bodakdev",
    "saree gown redesign Ahmedabad",
  ],
  openGraph: {
    title: "Shree Boutique | Bespoke Tailoring & Designer Studio",
    description:
      "Handcrafted bridal blouses, designer chaniya cholis, and custom ladies tailoring in Bodakdev, Ahmedabad.",
    url: "https://shreeboutique.com",
    siteName: "Shree Boutique",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Shree Boutique",
  "image": "https://shreeboutique.com/logo/logo.png",
  "description": "Bespoke ladies tailoring, designer bridal blouses, chaniya choli stitching, and saree redesign studio in Bodakdev, Ahmedabad.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "C-5, Shyamkrupa Appts., Opp. Pawan Flat, B/h Mothermilk Palace, Judges Bunglows Cross Road",
    "addressLocality": "Bodakdev, Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380054",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.0360047,
    "longitude": 72.5148674
  },
  "telephone": "+919428919432",
  "priceRange": "₹₹",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "17:00"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <WhatsAppFloat />
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
