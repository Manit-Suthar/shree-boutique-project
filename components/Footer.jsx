"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import { MapPin, Phone, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                {/* Column 1: Brand & Socials */}
                <div className={styles.column}>
                    <Link href="/" className={styles.logoLink}>
                        <img src="/logo/logo.png" alt="Shree Boutique" className={styles.logo} />
                    </Link>
                    <p className={styles.tagline}>
                        Where tradition meets modern elegance. Custom tailoring & designer wear for the contemporary woman.
                    </p>
                    
                    {/* Social Icons (Placeholders - looks professional even if not linked yet) */}
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialIcon}><Instagram size={20} /></a>
                        <a href="#" className={styles.socialIcon}><Facebook size={20} /></a>
                        <a href="mailto:contact@shreeboutique.com" className={styles.socialIcon}><Mail size={20} /></a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className={styles.column}>
                    <h4 className={styles.heading}>Quick Links</h4>
                    <div className={styles.linkStack}>
                        <Link href="/" className={styles.link}>Home</Link>
                        <Link href="/gallery" className={styles.link}>Gallery</Link>
                        <Link href="/#services" className={styles.link}>Services</Link>
                        <Link href="/#testimonials" className={styles.link}>Client Reviews</Link>
                        <Link href="/#location" className={styles.link}>Visit Us</Link>
                    </div>
                </div>

                {/* Column 3: Contact Info */}
                <div className={styles.column}>
                    <h4 className={styles.heading}>Contact Us</h4>
                    
                    <div className={styles.contactItem}>
                        <MapPin size={18} className={styles.icon} />
                        <p>
                            C-5, Shyamkrupa Apt,<br />
                            Opp. Pawan Apt, Bodakdev,<br />
                            Ahmedabad - 380054
                        </p>
                    </div>

                    <div className={styles.contactItem}>
                        <Phone size={18} className={styles.icon} />
                        <a href="tel:+919428919432" className={styles.phoneLink}>
                            +91 94289 19432
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className={styles.bottomBar}>
                <div className={styles.bottomContainer}>
                    <p>© {currentYear} Shree Boutique. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}