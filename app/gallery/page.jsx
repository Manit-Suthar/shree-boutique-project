"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./gallery.module.css";

// 🎯 FIX: Import only the client and urlFor helper from your client file
import { client, urlFor } from "../../sanityClient.js";
import { getProductGallery } from "../../sanity/queries.js"; 
// Note: Assumed the path is correct for queries.js (../queries.js)

// ❌ REMOVED: Redundant local builder setup that caused the TypeError
// import { createImageUrlBuilder } from "@sanity/image-url";
// const builder = createImageUrlBuilder(client);
// const urlFor = (src) => builder.image(src).url(); // <-- This line caused the conflict

// Front-end gallery categories
const categories = [
  "All",
  "Blouse",
  "Chaniya Choli",
  "Kurti",
  "Dress",
  "Frock",
  "Western",
  "Kids Wear",
  // "Alterations",
  "Other",
];

// Map normalized Sanity values → UI filter names
const categoryMap = {
  // Blouses
  blouse: "Blouse",
  blouses: "Blouse",

  // Chaniya Choli variations
  chaniyacholi: "Chaniya Choli",
  chaniyacholis: "Chaniya Choli",
  chaniya: "Chaniya Choli",
  choli: "Chaniya Choli",
  lehenga: "Chaniya Choli",

  // Kurti variations (singular & plural)
  kurti: "Kurti",
  kurtis: "Kurti",
  kurta: "Kurti",

  // Western
  western: "Western",
  westernwear: "Western",

  // Kids Wear
  kids: "Kids Wear",
  kidswear: "Kids Wear",
  kid: "Kids Wear",

  // // Alterations
  // alteration: "Alterations",
  // alterations: "Alterations",

  // Dress
  dress: "Dress",
  dresses: "Dress",

  // Frock
  frock: "Frock",
  frocks: "Frock",
  babyfrock: "Frock",
  babyfrocks: "Frock",

  // Other
  other: "Other",
};

const convertSanityCategory = (value) => {
  if (!value) return "Other";
  // Strip whitespace, underscores, hyphens, and convert to lowercase
  const cleaned = String(value).trim().toLowerCase().replace(/[\s_-]+/g, "");
  return categoryMap[cleaned] || value;
};

const fallbackGallery = [
  { src: "/gallery/blouse1.jpg", title: "Handcrafted Bridal Blouse", category: "Blouse" },
  { src: "/gallery/blouse2.jpg", title: "Designer Embroidered Blouse", category: "Blouse" },
  { src: "/gallery/blouse3.jpg", title: "Classic Aari Work Blouse", category: "Blouse" },
  { src: "/gallery/blouse4.jpg", title: "Intricate Maggam Work Blouse", category: "Blouse" },
  { src: "/gallery/blouse5.jpg", title: "Custom Back Pattern Blouse", category: "Blouse" },
  { src: "/gallery/chaniyacholi1.jpg", title: "Traditional Navratri Chaniya Choli", category: "Chaniya Choli" },
  { src: "/gallery/chaniyacholi2.jpg", title: "Festive Embroidered Lehenga", category: "Chaniya Choli" },
  { src: "/gallery/chaniyacholi3.jpg", title: "Artisanal Wedding Chaniya Choli", category: "Chaniya Choli" },
  { src: "/gallery/chaniyacholi4.jpg", title: "Mirror Work Chaniya Choli", category: "Chaniya Choli" },
  { src: "/gallery/dress1.jpg", title: "Saree-to-Gown Redesign", category: "Dress" },
  { src: "/gallery/dress2.jpg", title: "Indo-Western Couture Dress", category: "Dress" },
  { src: "/gallery/dress3.jpg", title: "Elegant Party Wear Gown", category: "Dress" },
  { src: "/gallery/dress4.jpg", title: "Contemporary Fusion Gown", category: "Dress" },
  { src: "/services/kurtis.jpg", title: "Bespoke Kurti & Sharara Set", category: "Kurti" },
  { src: "/gallery/frock1.jpg", title: "Artisanal Kurti & Frock", category: "Frock" },
  { src: "/gallery/frock2.jpg", title: "Handcrafted Flare Kurti", category: "Kurti" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [modalImg, setModalImg] = useState(null);

  const [images, setImages] = useState(fallbackGallery);
  const [loading, setLoading] = useState(true);

  // ---------------------------------------
  //  Fetch Gallery Data from Sanity on Load
  // ---------------------------------------
  useEffect(() => {
    async function loadGallery() {
      try {
        const data = await getProductGallery();

        if (Array.isArray(data) && data.length > 0) {
          const formatted = data
            .map((item) => {
              const imageSource = item?.image;

              if (!imageSource) {
                console.warn(`Skipping gallery item: ${item?.title || "Untitled"} (No image found)`);
                return null;
              }

              return {
                src: urlFor(imageSource).url(),
                title: item?.title || "Custom Designer Outfit",
                category: convertSanityCategory(item?.category),
              };
            })
            .filter(Boolean);

          if (formatted.length > 0) {
            setImages(formatted);
          }
        }
      } catch (error) {
        console.error("SANITY FETCH ERROR, using local showcase fallback:", error);
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, []);

  // Filter Logic
  const filteredImages =
    activeFilter === "All"
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Work Gallery</h2>

      {/* FILTER BUTTONS */}
      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${
              activeFilter === cat ? styles.activeBtn : ""
            }`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* LOADING STATE */}
      {loading && <p className={styles.loading}>Loading boutique collection…</p>}

      {/* EMPTY STATE */}
      {!loading && filteredImages.length === 0 && (
        <p className={styles.loading}>No items found in {activeFilter}.</p>
      )}

      {/* IMAGE GRID */}
      {!loading && filteredImages.length > 0 && (
        <div className={styles.grid}>
          {filteredImages.map((img, i) => (
            <div key={i} className={styles.imageWrapper}>
              <Image
                src={img.src}
                className={styles.image}
                alt={img.title || img.category || "Gallery item"}
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
                onClick={() => setModalImg(img.src)}
              />
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}
      {modalImg && (
        <div className={styles.modal} onClick={() => setModalImg(null)}>
          <Image
            src={modalImg}
            alt="Full screen preview"
            className={styles.modalImg}
            width={1200}
            height={1200}
            style={{ objectFit: "contain" }}
            unoptimized
          />
        </div>
      )}
    </section>
  );
}