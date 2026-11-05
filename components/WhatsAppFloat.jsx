"use client";

import WhatsAppIcon from "./icons/WhatsAppIcon";
import styles from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919428919432?text=Hello%20Shree%20Boutique!%20I%20would%20like%20to%20discuss%20a%20custom%20stitching%20order."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatBtn}
      aria-label="Chat with Shree Boutique on WhatsApp"
    >
      <span className={styles.pulse}></span>
      <div className={styles.iconWrapper}>
        <WhatsAppIcon size={24} />
      </div>
      <span className={styles.label}>Chat with Designer</span>
    </a>
  );
}
