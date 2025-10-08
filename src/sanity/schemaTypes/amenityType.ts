import { formatName } from '@/lib/utils';
import { CiViewList } from 'react-icons/ci';
import { defineField, defineType } from 'sanity';

export const amenityType = defineType({
  name: 'amenity',
  title: 'Amenities',
  icon: CiViewList,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required().min(10),
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
      name: 'floorLevel',
      title: 'Floor Level',
      type: 'number',
      initialValue: 1,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'text',
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
      name: 'mainImage',
      title: 'Image',
      type: 'blockImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
      floorLevel: 'floorLevel',
    },
    prepare({ name, floorLevel, image }) {
      const nameFormatted = name ? formatName(name) : 'Unnamed amenity';
      return {
        title: nameFormatted,
        subtitle: `Floor: ${floorLevel}`,
        media: image || CiViewList,
      };
    },
  },
});
