"use client";

import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, Quote } from "lucide-react"; // Make sure to install lucide-react if needed

export default function Testimonials({ fetchedReviews = [] }) {
  const defaultTestimonials = [
    {
      name: "Kajal Patel",
      text: "I got my bridal blouse stitched here and the fitting was absolutely perfect! The detailing work was amazing.",
      location: "Ahmedabad",
    },
    {
      name: "Sneha Desai",
      text: "They understood my design perfectly and delivered exactly what I imagined! Very professional & neat stitching.",
      location: "Bodakdev",
    },
    {
      name: "Riya Sharma",
      text: "Super fast service and premium finishing! Their western outfit stitching is just flawless.",
      location: "Satellite",
    },
    {
      name: "Manisha Trivedi",
      text: "I gave them my old saree to redesign into a gown. The final look was beyond my expectations. Excellent creativity!",
      location: "Vastrapur",
    },
    {
      name: "Bhavika Soni",
      text: "Very polite, understanding and talented! My lehenga blouse was ready in just 2 days with perfect embroidery finishing.",
      location: "Prahladnagar",
    },
  ];

  // Merge Sanity reviews with default reviews so newly added reviews appear first without deleting the coder's curated reviews!
  const sanityReviews = Array.isArray(fetchedReviews)
    ? fetchedReviews
        .map((r) => ({
          name: r.name || "Happy Customer",
          text: r.review || "",
          location: r.location || "Ahmedabad",
          rating: typeof r.rating === "number" ? r.rating : 5,
        }))
        .filter((r) => r.text.length > 0)
    : [];

  const existingNames = new Set(sanityReviews.map((r) => r.name.toLowerCase()));
  const nonDuplicateDefaults = defaultTestimonials.filter(
    (d) => !existingNames.has(d.name.toLowerCase())
  );

  const testimonials = [...sanityReviews, ...nonDuplicateDefaults];

  const [index, setIndex] = useState(0);

  const totalReviews = testimonials.length;

  const nextSlide = () => {
    setIndex((prev) => (totalReviews > 0 ? (prev + 1) % totalReviews : 0));
  };

  const prevSlide = () => {
    setIndex((prev) => (totalReviews > 0 ? (prev === 0 ? totalReviews - 1 : prev - 1) : 0));
  };

  // Auto-slide logic
  useEffect(() => {
    if (totalReviews <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalReviews);
    }, 6000); // 6 seconds for better reading time
    return () => clearInterval(timer);
  }, [totalReviews]);

  if (totalReviews === 0) {
    return null;
  }

  const currentReview = testimonials[index] || testimonials[0];
  const initialLetter = currentReview?.name?.trim()?.charAt(0)?.toUpperCase() || "C";

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>CLIENT LOVE</span>
          <h2 className={styles.title}>Trusted by Ladies</h2>
          <div className={styles.divider}></div>
        </div>

        {/* Slider Area */}
        <div className={styles.sliderWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={styles.card}
            >
              {/* Decorative Quote Icon */}
              <div className={styles.quoteIcon}>
                <Quote size={40} fill="#fceef2" stroke="none" />
              </div>

              {/* Star Rating */}
              <div className={styles.stars}>
                {[...Array(Math.min(5, Math.max(1, currentReview?.rating || 5)))].map((_, i) => (
                  <Star key={i} size={18} fill="#b76e79" stroke="none" />
                ))}
              </div>

              {/* Review Text */}
              <p className={styles.text}>&ldquo;{currentReview?.text}&rdquo;</p>

              {/* User Info */}
              <div className={styles.userInfo}>
                <div className={styles.avatar}>
                  {initialLetter}
                </div>
                <div>
                  <h4 className={styles.name}>{currentReview?.name}</h4>
                  <span className={styles.location}>
                    <MapPin size={12} style={{ marginRight: 4 }} />
                    {currentReview?.location}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons (Arrows) */}
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSlide} aria-label="Previous review">&#8249;</button>
          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSlide} aria-label="Next review">&#8250;</button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`${styles.dot} ${i === index ? styles.activeDot : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}