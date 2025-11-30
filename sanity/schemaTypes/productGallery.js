export default {
    // 1. The name used in GROQ queries (e.g., in your Next.js code)
    name: 'productGallery',
    // 2. The title shown in the Studio sidebar
    title: 'Boutique Gallery',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Item Title (e.g., Heavy Work Blouse)',
        type: 'string',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        // Optional list for easy filtering later
        options: {
          list: [
            { title: 'Blouses', value: 'blouse' },
            { title: 'Chaniya Choli', value: 'chaniyaCholi' },
            { title: 'Kurtis', value: 'kurtis' },
          ],
        },
      },
      {
        name: 'image',
        title: 'Product Photo',
        type: 'image',
        options: {
          hotspot: true, // Allows you to crop and adjust the image
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text (for SEO)',
          },
        ],
      },
      {
        name: 'isFeatured',
        title: 'Display on Home Page?',
        type: 'boolean',
        initialValue: false,
      },
    ],
  };