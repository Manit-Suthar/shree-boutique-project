"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    async function fetchHero() {
      const query = `*[_type == "homepageSettings"][0]{
        heroTitle,
        heroSubtitle,
        heroButtonText,
        whatsappNumber
      }`;

      const data = await client.fetch(query);
      setHero(data);
    }

    fetchHero();
  }, []);

  // If data has not loaded yet → return nothing
  if (!hero) return null;

  return (
    <section className={styles.hero}>

      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {hero.heroTitle}
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        {hero.heroSubtitle}
      </motion.p>

      <motion.a
        href={`https://wa.me/91${hero.whatsappNumber}`}
        target="_blank"
        className={styles.ctaButton}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        💬 {hero.heroButtonText}
      </motion.a>

    </section>
  );
}
