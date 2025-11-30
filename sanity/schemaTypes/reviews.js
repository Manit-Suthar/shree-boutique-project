export default {
    name: 'reviews',
    title: 'Client Reviews',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Client Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'location',
        title: 'Location (optional)',
        type: 'string',
      },
      {
        name: 'review',
        title: 'Review Text',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'rating',
        title: 'Rating (1–5)',
        type: 'number',
        validation: Rule => Rule.min(1).max(5)
      },
      {
        name: 'isFeatured',
        title: 'Show on Home Page?',
        type: 'boolean',
        initialValue: true
      }
    ],
  }
  