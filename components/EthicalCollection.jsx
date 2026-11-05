"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./EthicalCollection.module.css";
import { Sparkles, Leaf, Recycle, Heart } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const collectionCategories = [
  {
    id: "blouse",
    title: "Bridal & Heritage Blouses",
    subtitle: "Custom cuts, aari work & perfect padding",
    // tag: "Made to Measure",
    images: [
      "/services/blouse.jpg",
      "/gallery/blouse1.jpg",
      "/gallery/blouse2.jpg",
      "/gallery/blouse3.jpg",
      "/gallery/blouse4.jpg",
    ],
  },
  {
    id: "saree-redesign",
    title: "Saree-to-Gown Transformations",
    subtitle: "Restyling vintage heirlooms into modern gowns",
    // tag: "Zero-Waste Redesign",
    images: [
      "/services/plazo.jpg",
      "/gallery/dress1.jpg",
      "/gallery/dress2.jpg",
      "/gallery/dress3.jpg",
      "/gallery/dress4.jpg",
    ],
  },
  {
    id: "chaniya-choli",
    title: "Festive Chaniya Cholis",
    subtitle: "Custom kalis, borders & handcrafted latkans",
    // tag: "Wedding & Navratri",
    images: [
      "/services/chaniyacholi.jpg",
      "/gallery/chaniyacholi1.jpg",
      "/gallery/chaniyacholi2.jpg",
      "/gallery/chaniyacholi3.jpg",
      "/gallery/chaniyacholi4.jpg",
    ],
  },
  {
    id: "kurtis",
    title: "Artisanal Kurtis & Co-Ords",
    subtitle: "Everyday elegance with breathable drape",
    // tag: "Custom Silhouettes",
    images: [
      "/services/kurtis.jpg",
      "/gallery/frock1.jpg",
      "/gallery/frock2.jpg",
      "/gallery/frock3.jpg",
      "/services/punjabi.jpg",
    ],
  },
];

export default function EthicalCollection() {
  const [imageIndices, setImageIndices] = useState([0, 1, 2, 3]);

  // Automatic cycling of images in the small grid
  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndices((prevIndices) =>
        prevIndices.map((idx, colIdx) => {
          const totalImgs = collectionCategories[colIdx].images.length;
          return (idx + 1) % totalImgs;
        })
      );
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section} id="ethical-collection">
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <Leaf size={14} className={styles.badgeIcon} />
            <span>CONSCIOUS COUTURE & SUSTAINABLE CRAFT</span>
          </div>
          <h2 className={styles.title}>Ethical & Beautiful Collection</h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            True luxury is thoughtful. By custom-stitching made-to-order garments from your selected fabrics and redesigning mother’s heirloom sarees into modern gowns, we celebrate zero-waste fashion with flawless artisan precision.
          </p>
        </div>

{/* Small Grid View with Automatic Changing Images */}
<div className={styles.grid}>
  {collectionCategories.map((cat, colIdx) => {
    const activeIdx = imageIndices[colIdx] || 0;
    
    // Pseudo-random delay so cards switch out of order rather than a left-to-right wave
    const randomDelay = ((colIdx * 1.55 ) % 2.2).toFixed(1);

    return (
      <div key={cat.id} className={styles.card}>
        <div className={styles.imageBox}>
          {/* Render all images stacked for simultaneous cross-fade */}
          {cat.images.map((imgSrc, imgIdx) => (
            <Image
              key={imgIdx}
              src={imgSrc}
              alt={cat.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className={`${styles.image} ${
                imgIdx === activeIdx ? styles.activeImage : styles.hiddenImage
              }`}
              style={{
                transitionDelay: `${randomDelay}s`,
              }}
            />
          ))}

          <span className={styles.tagBadge}>{cat.tag}</span>

          {/* Auto-cycle dots indicator */}
          <div className={styles.slideDots}>
            {cat.images.map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${
                  i === activeIdx ? styles.activeDot : ""
                }`}
              />
            ))}
          </div>
        </div>

        <div className={styles.cardInfo}>
          <h3 className={styles.cardTitle}>{cat.title}</h3>
          <p className={styles.cardSubtitle}>{cat.subtitle}</p>
        </div>
      </div>
    );
  })}
</div>
        {/* Value Badges Banner */}
        {/* <div className={styles.valuesBanner}>
          <div className={styles.valueItem}>
            <Recycle size={18} className={styles.valueIcon} />
            <span>Zero Mass-Production Waste</span>
          </div>
          <div className={styles.valueDivider}>•</div>
          <div className={styles.valueItem}>
            <Heart size={18} className={styles.valueIcon} />
            <span>Bespoke Heirlooms Reimagined</span>
          </div>
          <div className={styles.valueDivider}>•</div>
          <div className={styles.valueItem}>
            <Sparkles size={18} className={styles.valueIcon} />
            <span>Hand-finished with Perfection</span>
          </div>
        </div> */}

        {/* CTA Button */}
        <div className={styles.ctaWrap}>
          <a
            href="https://wa.me/919428919432?text=Hello%20Shree%20Boutique!%20I%20would%20like%20to%20consult%20about%20the%20Ethical%20%26%20Beautiful%20Collection%20custom%20stitching."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <WhatsAppIcon size={18} />
            <span>Design Your Custom Piece</span>
          </a>

          <Link href="/gallery" className={styles.galleryLink}>
            <span>View Full Lookbook</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

