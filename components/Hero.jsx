// components/Hero.jsx

import Link from "next/link";
import styles from "./Hero.module.css";
import { getHomepageSettings } from "@/sanity/queries";
import { Sparkles, Scissors, Ruler, HeartHandshake } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const defaultHero = {
  heroTitle: "You Bring The Fabric. We Craft The Masterpiece.",
  heroSubtitle:
    "We don't sell mass-produced ready-made clothes. From royal bridal blouses and custom designed chaniya cholis to modern Indo-Western styles - each outfit is tailored to your exact measurements with boutique elegance.",
  heroButtonText: "Discuss Your Design on WhatsApp",
  whatsappNumber: "919428919432",
};

export default async function Hero() {
  let data = null;
  try {
    data = await getHomepageSettings();
  } catch (err) {
    console.error("Failed to fetch homepage settings, using defaults:", err);
  }

  const title = data?.heroTitle || defaultHero.heroTitle;
  const subtitle = data?.heroSubtitle || defaultHero.heroSubtitle;
  const buttonText = data?.heroButtonText || defaultHero.heroButtonText;
  const rawNumber = data?.whatsappNumber || defaultHero.whatsappNumber;
  const whatsAppNumber = rawNumber ? rawNumber.replace(/\D/g, "") : "919428919432";

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        {/* Luxury Eyebrow Pill */}
        <div className={styles.eyebrow}>
          <Sparkles size={14} className={styles.sparkleIcon} />
          <span>BESPOKE DESIGN & CUSTOM TAILORING STUDIO</span>
        </div>

        {/* Dynamic Title */}
        <h1 className={styles.title}>
          {title}
        </h1>

        {/* Dynamic Subtitle */}
        <p className={styles.subtitle}>
          {subtitle}
        </p>

        {/* Call to Actions */}
        <div className={styles.actionGroup}>
          <a
            className={styles.primaryBtn}
            href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent("Hello Shree Boutique! I would like to inquire about custom stitching and designing an outfit.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={19} />
            <span>{buttonText}</span>
          </a>

          <Link href="/gallery" className={styles.secondaryBtn}>
            <span>View Work Gallery</span>
          </Link>
        </div>

        {/* Trust Badges Bar */}
        {/* <div className={styles.featuresStrip}>
          <div className={styles.featureItem}>
            <Scissors size={18} className={styles.featureIcon} />
            <span>100% Custom Tailored</span>
          </div>
          <div className={styles.featureDivider}>•</div>
          <div className={styles.featureItem}>
            <Ruler size={18} className={styles.featureIcon} />
            <span>Flawless Fit Guarantee</span>
          </div>
          <div className={styles.featureDivider}>•</div>
          <div className={styles.featureItem}>
            <Sparkles size={18} className={styles.featureIcon} />
            <span>Bridal Blouse & Aari Specialists</span>
          </div>
          <div className={styles.featureDivider}>•</div>
          <div className={styles.featureItem}>
            <HeartHandshake size={18} className={styles.featureIcon} />
            <span>Saree-to-Gown Redesign</span>
          </div>
        </div> */}

      </div>
    </section>
  );
}
