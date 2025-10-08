import { defineField, defineType } from 'sanity';

export const imageType = defineType({
  name: 'blockImage',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .error('Image alternative text is necessary for accessibility.'),
    }),
  ],
});
