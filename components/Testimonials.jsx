"use client";

import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, Quote } from "lucide-react"; // Make sure to install lucide-react if needed

export default function Testimonials() {
  const testimonials = [
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

  const [index, setIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds for better reading time
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

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
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#b76e79" stroke="none" />
                ))}
              </div>

              {/* Review Text */}
              <p className={styles.text}>"{testimonials[index].text}"</p>

              {/* User Info */}
              <div className={styles.userInfo}>
                <div className={styles.avatar}>
                  {testimonials[index].name.charAt(0)}
                </div>
                <div>
                  <h4 className={styles.name}>{testimonials[index].name}</h4>
                  <span className={styles.location}>
                    <MapPin size={12} style={{ marginRight: 4 }} />
                    {testimonials[index].location}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons (Arrows) */}
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSlide}>&#8249;</button>
          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSlide}>&#8250;</button>
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