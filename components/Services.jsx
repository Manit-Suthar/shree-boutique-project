"use client";

import styles from "./Services.module.css";
import { motion } from "framer-motion";

export default function Services() {
  const items = [
    { img: "/services/blouse.jpg", title: "Bridal & Designer Blouses", desc: "Custom cuts & intricate embroidery" },
    { img: "/services/chaniyacholi.jpg", title: "Traditional Chaniya Choli", desc: "For Navratri & Weddings" },
    { img: "/services/kurtis.jpg", title: "Trendy Kurtis & Shararas", desc: "Everyday elegance" },
    { img: "/services/plazo.jpg", title: "Elegant Gowns & Plazzos", desc: "Modern fusion styles" },
    { img: "/services/punjabi.jpg", title: "Punjabi Suits & Patiala", desc: "Authentic stitching" },
    { img: "/services/babyfrock.jpg", title: "Kids' Ethnic Wear", desc: "Cute & comfortable" },
    { img: "/services/alterations.jpg", title: "Perfect Fit Alterations", desc: "Revamp your wardrobe" },
    { img: "/services/nightdress.jpg", title: "Relaxed Comfort Wear", desc: "Stylish nightwear" },
  ];

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Our Exclusive Collections</h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            Explore our range of custom-tailored outfits designed to make you look your best.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={styles.imageWrapper}>
                <img src={item.img} alt={item.title} className={styles.image} />
                {/* Overlay effect on hover */}
                <div className={styles.overlay}></div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}