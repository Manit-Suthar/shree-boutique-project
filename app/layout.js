import "./globals.css";
import Navbar from "../components/Navbar";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Shree Boutique | Best Ladies Tailor, Custom Stitching & Boutique Ahmedabad",
  description:
    "Shree Boutique in Bodakdev, Ahmedabad specializes in custom blouse stitching, designer bridal aari blouses, chaniya cholis, kurtis, dresses, perfect fit alterations, and saree-to-gown redesign.",
  keywords: [
    "Shree Boutique",
    "Shree Boutique Ahmedabad",
    "Shree Boutique Bodakdev",
    "boutique Ahmedabad",
    "boutique in Bodakdev Ahmedabad",
    "ladies tailor Ahmedabad",
    "tailor near me",
    "custom blouse stitching Ahmedabad",
    "bridal blouse designer Ahmedabad",
    "aari work blouse stitching",
    "chaniya choli stitching Ahmedabad",
    "lehenga tailoring Ahmedabad",
    "kurti stitching",
    "dress stitching Ahmedabad",
    "western dress fitting",
    "clothing alterations Ahmedabad",
    "perfect fit alteration near me",
    "saree to gown redesign Ahmedabad",
    "best ladies boutique Ahmedabad",
  ],
  alternates: {
    canonical: "https://shreeboutique.com",
  },
  openGraph: {
    title: "Shree Boutique | Bespoke Tailoring & Designer Studio Ahmedabad",
    description:
      "From royal bridal blouses and chaniya cholis to artisanal kurtis and perfect fit alterations. Tailored to your exact fit in Bodakdev, Ahmedabad.",
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
  "@type": "ClothingStore",
  "@id": "https://shreeboutique.com",
  "name": "Shree Boutique",
  "image": "https://shreeboutique.com/logo/logo.png",
  "description": "Premium ladies tailor and bespoke designer studio in Bodakdev, Ahmedabad. Specializing in bridal blouse stitching, chaniya cholis, custom kurtis, dresses, and alterations.",
  "url": "https://shreeboutique.com",
  "telephone": "+919428919432",
  "priceRange": "₹₹",
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
  "areaServed": [
    "Bodakdev",
    "Satellite",
    "Vastrapur",
    "Prahladnagar",
    "Judges Bungalow",
    "SG Highway",
    "Thaltej",
    "Ahmedabad"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "17:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tailoring & Stitching Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Bridal & Designer Blouse Stitching",
          "description": "Made-to-measure bridal blouses, aari work, embroidery, padding, and designer necklines."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chaniya Choli & Lehenga Tailoring",
          "description": "Traditional Navratri and wedding chaniya cholis tailored with custom kalis and latkans."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Designer Kurti, Sharara & Punjabi Suit Stitching",
          "description": "Custom stitched kurtis, suits, and daily wear outfits tailored to your unique measurements."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Saree to Gown Redesign & Transformation",
          "description": "Upcycling and redesigning heirloom sarees into modern gowns and Indo-Western dresses."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Perfect Fit Alterations & Garment Resizing",
          "description": "Expert tailoring alterations, fitting adjustments, and repairs for all women's garments."
        }
      }
    ]
  }
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
