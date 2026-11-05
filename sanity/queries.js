// sanity/queries.js

import { groq } from "next-sanity";
// 🎯 FIX 1: Correctly import client from its neighbor file in the root
import { client } from "../sanityClient.js"; 

// ---------------------------------
// GROQ Queries
// ---------------------------------

// Query for Gallery Data: Fetches the required raw 'image' object
export const galleryQuery = groq`
  *[_type == "productGallery" && defined(image)] | order(_createdAt desc) {
    _id,
    title,
    category,
    image, // ✅ FIX 2: Fetch the entire raw image object
  }
`;

// Query for Homepage Settings (using the schema type 'homepageSettings')
export const homepageSettingsQuery = groq`
  *[_type == "homepageSettings"][0] {
    heroTitle,
    heroSubtitle,
    heroButtonText,
    whatsappNumber,
    heroBgStart,
    heroBgEnd,
    showTopBanner,
    topBannerText,
    topBannerLink,
  }
`;

// Query for Client Reviews (using the schema type 'reviews')
export const reviewsQuery = groq`
  *[_type == "reviews" && defined(review) && (isFeatured == true || !defined(isFeatured))] | order(rating desc, _createdAt desc) {
    _id,
    name, // Client Name
    location,
    review, // Review Text
    rating,
    isFeatured
  }
`;

// ---------------------------------
// Fetch Functions
// ---------------------------------

export async function getProductGallery() {
  try {
    return await client.fetch(galleryQuery, {}, { next: { revalidate: 30 } });
  } catch (error) {
    console.error("Error fetching product gallery from Sanity:", error?.message || error);
    return [];
  }
}

export async function getHomepageSettings() {
  try {
    return await client.fetch(homepageSettingsQuery, {}, { next: { revalidate: 30 } });
  } catch (error) {
    console.error("Error fetching homepage settings from Sanity:", error?.message || error);
    return null;
  }
}

export async function getReviews() {
  try {
    return await client.fetch(reviewsQuery, {}, { next: { revalidate: 30 } });
  } catch (error) {
    console.error("Error fetching reviews from Sanity:", error?.message || error);
    return [];
  }
}