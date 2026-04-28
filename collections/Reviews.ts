import type { CollectionConfig } from 'payload';

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'rating', 'createdAt'],
    description: 'Customer reviews and testimonials submitted via the frontend.',
  },
  access: {
    // Anyone can read published reviews
    read: () => true,
    // Anyone can create (submit a review via the public form)
    create: () => true,
    // Only authenticated admins can update or delete
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Reviewer Name',
      required: true,
    },
    {
      name: 'review',
      type: 'textarea',
      label: 'Review',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      label: 'Rating (1–5)',
      required: true,
      min: 1,
      max: 5,
      admin: {
        description: 'Enter a rating between 1 and 5.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Reviewer Photo (optional)',
      relationTo: 'media',
      required: false,
    },
  ],
};
