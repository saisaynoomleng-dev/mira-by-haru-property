import { formatCurrency, formatName } from '@/lib/utils';
import { MdBedroomParent } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const floorPlanType = defineType({
  name: 'floorPlan',
  title: 'Floor Plans',
  icon: MdBedroomParent,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .min(10)
          .info('Floor Plan must have at least 10 characters'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) =>
        rule.required().info('Required to generate a page on the website'),
    }),
    defineField({
      name: 'type',
      title: 'Room Type',
      type: 'string',
      options: {
        list: [
          { title: '1 Bedroom', value: 'one-bed' },
          { title: '2 Bedrooms', value: 'two-bed' },
          { title: 'Studio', value: 'studio' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required().info('Room Type is required'),
    }),
    defineField({
      name: 'bedroom',
      title: 'Number of Bedroom',
      type: 'number',
      initialValue: 1,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bathroom',
      title: 'Number of Bathroom',
      type: 'number',
      initialValue: 1,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Monthly Rent',
      type: 'number',
      initialValue: 1000,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'availableUnit',
      title: 'Available Units',
      type: 'number',
      initialValue: 5,
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'squareFeet',
      title: 'Square Feet',
      type: 'number',
      initialValue: 1000,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub title',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'blockImage',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      price: 'price',
      image: 'mainImage',
      availableUnit: 'availableUnit',
    },
    prepare({ name, price, image, availableUnit }) {
      const nameFormatted = name ? formatName(name) : 'Untitled Floor Plan';
      const priceFormatted = price ? formatCurrency(price) : 'Price Not Listed';

      return {
        title: `${nameFormatted} | Units: ${availableUnit}`,
        subtitle: `${priceFormatted} / month`,
        media: image || MdBedroomParent,
      };
    },
  },
});
