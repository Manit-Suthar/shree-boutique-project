"use client";

import { useState, useEffect } from "react";
import styles from "./gallery.module.css";
import { client } from "@/sanity/lib/client";
// ✅ CORRECT: Use the named export
import { createImageUrlBuilder } from "@sanity/image-url";
// Create a builder for generating Sanity image URLs
// ✅ CORRECT: Use the new function name
const builder = createImageUrlBuilder(client);function urlFor(src) {
  return builder.image(src).url();
}

const categories = [
  "All",
  "Blouse",
  "Chaniya Choli",
  "Kurti",
  "Western",
  "Kids Wear",
  "Alterations",
  "Dress",
  "Frock",
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [activeFilter, setActiveFilter] = useState("All");
  const [modalImg, setModalImg] = useState(null);

  const [images, setImages] = useState([]);   // ← Now images come from Sanity
  const [loading, setLoading] = useState(true);

  // -----------------------------
  // 1️⃣ Fetch Gallery Items from Sanity
  // -----------------------------
  useEffect(() => {
    async function fetchGallery() {
      try {
        const data = await client.fetch(`
          *[_type == "productGallery"]{
            title,
            category,
            "imageUrl": image.asset->url
          }
        `);

        // Convert Sanity categories to match your filter categories
        const formatted = data.map(item => ({
          src: item.imageUrl ? urlFor(item.imageUrl) : "",
          category: convertSanityCategory(item.category)
        }));

        setImages(formatted);
        setLoading(false);
      } catch (error) {
        console.error("SANITY FETCH ERROR:", error);
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  // Helper to map Sanity category → display category
  function convertSanityCategory(category) {
    const map = {
      blouse: "Blouse",
      chaniyaCholi: "Chaniya Choli",
      kurtis: "Kurti",
      western: "Western",
      kids: "Kids Wear",
      alterations: "Alterations",
      dress: "Dress",
      frock: "Frock"
    };
    return map[category] || "Other";
  }

  // FIX: Correct filtering logic
  const filtered =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

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
            onClick={() => {
              setActiveFilter(cat);
              setFilter(cat);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* LOADING STATE */}
      {loading && <p className={styles.loading}>Loading...</p>}

      {/* IMAGE GRID */}
      {!loading && (
        <div className={styles.grid}>
          {filtered.map((img, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img
                src={img.src}
                alt="Gallery item"
                className={styles.image}
                onClick={() => setModalImg(img.src)}
              />
            </div>
          ))}
        </div>
      )}

      {/* FULLSCREEN MODAL */}
      {modalImg && (
        <div className={styles.modal} onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="" className={styles.modalImg} />
        </div>
      )}
    </section>
  );
}
