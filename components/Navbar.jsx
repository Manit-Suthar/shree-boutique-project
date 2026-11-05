"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import TopBanner from "./TopBanner";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeOnOverlay(e) {
    if (e.target === e.currentTarget) setOpen(false);
  }

  const scrollToLocation = () => {
    setOpen(false);
    if (pathname === "/") {
      const section = document.getElementById("location");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#location");
    }
  };

  return (
    <>
      <header className={styles.headerWrap}>
        <TopBanner onVisibilityChange={setBannerVisible} />
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
          <div className={styles.container}>
            {/* Desktop Menu */}
            <div className={styles.desktopMenu}>
              <Link href="/" className={styles.link}>Home</Link>
              <Link href="/gallery" className={styles.link}>Gallery</Link>
              <Link href="/#services" className={styles.link}>Services</Link>
              <Link href="/#testimonials" className={styles.link}>Reviews</Link>
            </div>

            {/* Hamburger (Visible on Mobile) */}
            <button
              aria-expanded={open}
              aria-label="Toggle menu"
              className={styles.hamburger}
              onClick={() => setOpen(!open)}
            >
              <span className={`${styles.bar} ${open ? styles.openBar1 : ""}`} />
              <span className={`${styles.bar} ${open ? styles.openBar2 : ""}`} />
              <span className={`${styles.bar} ${open ? styles.openBar3 : ""}`} />
            </button>

            {/* Logo */}
            <div className={styles.logoCenter}>
              <Link href="/" onClick={() => setOpen(false)}>
                <img src="/logo/logo.png" alt="Shree Boutique" className={styles.logo} />
              </Link>
            </div>

            {/* Desktop Button */}
            <div className={styles.rightAction}>
              <button onClick={scrollToLocation} className={styles.findUsBtn}>
                Find Us
              </button>
            </div>
          </div>
        </nav>

        {/* MOBILE MENU DROPDOWN (Dynamically positioned beneath the header) */}
        <div
          className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
          onClick={closeOnOverlay}
        >
          <div className={styles.mobilePanel} onClick={(e) => e.stopPropagation()}>
            <div className={styles.contentWrap}>
              {/* 2-Column Grid for Links */}
              <div className={styles.linksGrid}>
                <Link href="/" className={styles.mobileLink} onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link href="/gallery" className={styles.mobileLink} onClick={() => setOpen(false)}>
                  Gallery
                </Link>
                <Link href="/#services" className={styles.mobileLink} onClick={() => setOpen(false)}>
                  Services
                </Link>
                <Link href="/#testimonials" className={styles.mobileLink} onClick={() => setOpen(false)}>
                  Reviews
                </Link>
              </div>

              {/* Button below grid */}
              <button onClick={scrollToLocation} className={styles.mobileFindBtn}>
                Visit Our Boutique
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to push page content cleanly below header */}
      <div
        className={`${styles.navSpacer} ${!bannerVisible ? styles.navSpacerNoBanner : ""}`}
      ></div>
    </>
  );
}
