"use client";

import styles from "./MapSection.module.css";
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";

export default function MapSection({
  title = "Visit Our Boutique",
  // Your Google Map Embed Link
  embedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6667605168063!2d72.5148674!3d23.0360047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4bd49610e5%3A0x443b3911754711e4!2sShyamkrupa%20Apartment%2C%20Bodakdev%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1764517828568!5m2!1sen!2sin",
  addressLine1 = "C-5, Shyamkrupa Apt, Opp. Pawan Apt",
  addressLine2 = "B/h Mothermilk Palace, Judges Bunglows, Bodakdev, Ahmedabad - 380054",
  phone = "+91 94289 19432",
}) {
  
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine1 + " " + addressLine2)}`;

  return (
    <section className={styles.section} id="location">
      <div className={styles.container}>
        
        {/* Header - Smaller and Cleaner */}
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.divider}></div>
        </div>

        {/* The Main Bordered Box */}
        <div className={styles.contentWrapper}>
          
          {/* 1. The Map */}
          <div className={styles.mapFrame}>
            <iframe
              title="Shree Boutique Location"
              src={embedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* 2. Contact Details - More Compact */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Contact & Visit</h3>
            
            <div className={styles.infoList}>
              {/* Address */}
              <div className={styles.infoRow}>
                <div className={styles.iconBox}>
                  <MapPin size={18} />
                </div>
                <div className={styles.infoText}>
                  <p className={styles.boldLabel}>Address</p>
                  <p>{addressLine1}</p>
                  <p className={styles.subText}>{addressLine2}</p>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.infoRow}>
                <div className={styles.iconBox}>
                  <Phone size={18} />
                </div>
                <div className={styles.infoText}>
                  <p className={styles.boldLabel}>Phone</p>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className={styles.link}>
                    {phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className={styles.infoRow}>
                <div className={styles.iconBox}>
                  <Clock size={18} />
                </div>
                <div className={styles.infoText}>
                  <p className={styles.boldLabel}>Hours</p>
                  <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p className={styles.closedText}>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Buttons - Smaller & Professional */}
            <div className={styles.actions}>
              <a className={styles.primaryBtn} href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                <Navigation size={16} />
                Directions
              </a>
              <a className={styles.secondaryBtn} href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
                Map
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}