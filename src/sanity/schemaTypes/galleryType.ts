import { formatName } from '@/lib/utils';
import { MdImage } from 'react-icons/md';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const galleryType = defineType({
  name: 'gallery',
  title: 'Galleries',
  icon: MdImage,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Gallery Name',
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
      name: 'mainImages',
      title: 'Images',
      type: 'array',
      of: [{ type: 'blockImage' }],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImages.0.asset',
    },
    prepare({ name, image }) {
      const nameFormatted = name ? formatName(name) : 'Untitled Gallery';
      return {
        title: nameFormatted,
        media: image || MdImage,
      };
    },
  },
});
