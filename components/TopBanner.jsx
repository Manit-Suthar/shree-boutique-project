"use client";

import { useState, useEffect } from "react";
import styles from "./TopBanner.module.css";
import { Sparkles, X } from "lucide-react";
import { getHomepageSettings } from "@/sanity/queries";

export default function TopBanner({ onVisibilityChange }) {
  const [dismissed, setDismissed] = useState(false);
  const [bannerConfig, setBannerConfig] = useState({
    show: true,
    text: "✨ Bespoke Tailoring & Designer Studio • Bridal Blouses • Chaniya Cholis • Saree-to-Gown Redesign • Bodakdev, Ahmedabad • Book Fitting: +91 94289 19432",
    link: "tel:+919428919432",
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if user dismissed it in this session
    const isDismissed = sessionStorage.getItem("shree_top_banner_dismissed");
    if (isDismissed === "true") {
      setDismissed(true);
      if (onVisibilityChange) onVisibilityChange(false);
    }

    async function fetchBanner() {
      try {
        const settings = await getHomepageSettings();
        if (settings) {
          const show = settings.showTopBanner !== false && Boolean(settings.topBannerText?.trim());
          setBannerConfig({
            show: show,
            text: settings.topBannerText || "",
            link: settings.topBannerLink || "tel:+919428919432",
          });
          if (!show && onVisibilityChange) {
            onVisibilityChange(false);
          }
        }
      } catch (err) {
        console.error("Failed to load top banner settings:", err);
      } finally {
        setLoaded(true);
      }
    }

    fetchBanner();
  }, [onVisibilityChange]);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem("shree_top_banner_dismissed", "true");
    } catch {
      // ignore
    }
    if (onVisibilityChange) {
      onVisibilityChange(false);
    }
  };

  if (dismissed || !bannerConfig.show || !bannerConfig.text) {
    return null;
  }

  const message = bannerConfig.text;

  return (
    <aside aria-label="Announcement" className={styles.banner}>
      <div className={styles.marqueeTrack}>
        {/* We repeat the message twice for continuous infinite seamless scrolling */}
        <div className={styles.marqueeContent}>
          {bannerConfig.link ? (
            <a href={bannerConfig.link} className={styles.bannerLink}>
              <span className={styles.item}>
                <Sparkles size={13} className={styles.sparkle} />
                {message}
              </span>
              <span className={styles.dot}>✦</span>
              <span className={styles.item}>
                <Sparkles size={13} className={styles.sparkle} />
                {message}
              </span>
              <span className={styles.dot}>✦</span>
            </a>
          ) : (
            <div className={styles.bannerText}>
              <span className={styles.item}>
                <Sparkles size={13} className={styles.sparkle} />
                {message}
              </span>
              <span className={styles.dot}>✦</span>
              <span className={styles.item}>
                <Sparkles size={13} className={styles.sparkle} />
                {message}
              </span>
              <span className={styles.dot}>✦</span>
            </div>
          )}
        </div>

        <div className={styles.marqueeContent} aria-hidden="true">
          {bannerConfig.link ? (
            <a href={bannerConfig.link} className={styles.bannerLink}>
              <span className={styles.item}>
                <Sparkles size={13} className={styles.sparkle} />
                {message}
              </span>
              <span className={styles.dot}>✦</span>
              <span className={styles.item}>
                <Sparkles size={13} className={styles.sparkle} />
                {message}
              </span>
              <span className={styles.dot}>✦</span>
            </a>
          ) : (
            <div className={styles.bannerText}>
              <span className={styles.item}>
                <Sparkles size={13} className={styles.sparkle} />
                {message}
              </span>
              <span className={styles.dot}>✦</span>
              <span className={styles.item}>
                <Sparkles size={13} className={styles.sparkle} />
                {message}
              </span>
              <span className={styles.dot}>✦</span>
            </div>
          )}
        </div>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className={styles.closeBtn}
        aria-label="Dismiss announcement"
        title="Close announcement"
      >
        <X size={14} />
      </button>
    </aside>
  );
}
