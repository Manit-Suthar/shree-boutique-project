const productGallery = {
  name: 'productGallery',
  title: 'Boutique Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Item Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Blouse', value: 'blouse' },
          { title: 'Chaniya Choli', value: 'chaniyaCholi' },
          { title: 'Kurti', value: 'kurti' },
          { title: 'Dress', value: 'dress' },
          { title: 'Frock', value: 'frock' },
          { title: 'Western', value: 'western' },
          { title: 'Kids Wear', value: 'kids' },
          // { title: 'Alterations', value: 'alterations' },
          { title: 'Other', value: 'other' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Product Photo',
      type: 'image',
      options: { hotspot: true },
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

export default productGallery;
