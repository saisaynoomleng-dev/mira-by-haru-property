import { formatName } from '@/lib/utils';
import { FaPeopleGroup } from 'react-icons/fa6';
import { defineField, defineType } from 'sanity';

export const neighborhoodType = defineType({
  name: 'neighborhood',
  title: 'Neighborhoods',
  icon: FaPeopleGroup,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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
      name: 'type',
      title: 'Neighborhood Type',
      type: 'string',
      options: {
        list: [
          { title: 'Dining', value: 'dining' },
          { title: 'Fitness', value: 'fitness' },
          { title: 'Shopping', value: 'shopping' },
          { title: 'Park', value: 'park' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'blockImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      type: 'type',
      image: 'mainImage',
    },
    prepare({ name, type, image }) {
      const nameFormatted = name ? formatName(name) : 'Untitled Neighborhood';
      const typeFormatted = type
        ? formatName(type)
        : 'Unknown Neighborhood Type';

      return {
        title: nameFormatted,
        subtitle: typeFormatted,
        media: image || FaPeopleGroup,
      };
    },
  },
});
