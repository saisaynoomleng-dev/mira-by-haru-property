import { formatCurrency, formatName } from '@/lib/utils';
import { MdBedroomChild } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const roomType = defineType({
  name: 'room',
  title: 'Rooms',
  icon: MdBedroomChild,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Room Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Room Price',
      type: 'number',
      initialValue: 1000,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isAvailable',
      title: 'Availability',
      type: 'boolean',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tenant',
      title: 'Current Tanent',
      type: 'reference',
      to: [{ type: 'tenant' }],
      hidden: ({ document }) => (document?.isAvailable ? true : false),
    }),
    defineField({
      name: 'mainImages',
      title: 'Images',
      type: 'array',
      of: [{ type: 'blockImage' }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      isAvailable: 'isAvailable',
      price: 'price',
      image: 'mainImages.0.asset',
    },
    prepare({ name, price, isAvailable, image }) {
      const nameFormatted = name ? formatName(name) : 'Untitled Room';
      const priceFormatted = price ? formatCurrency(price) : 'Price unlisted';
      const availability = isAvailable ? 'Available' : 'Taken';

      return {
        title: `${nameFormatted} | ${priceFormatted}/month`,
        subtitle: `Current Availability: ${availability}`,
        media: image || MdBedroomChild,
      };
    },
  },
});
