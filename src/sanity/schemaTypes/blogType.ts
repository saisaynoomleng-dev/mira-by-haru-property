import { formatDate, formatName } from '@/lib/utils';
import { FaRegNewspaper } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const blogType = defineType({
  name: 'blog',
  title: 'Blogs',
  icon: FaRegNewspaper,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
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
      name: 'subTitle',
      title: 'Sub Title',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categories',
      type: 'string',
      options: {
        list: [
          { title: 'Trends', value: 'trends' },
          { title: 'Community', value: 'community' },
          { title: 'Living Tips', value: 'living-tips' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
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
      date: 'publishedDate',
      image: 'image',
      category: 'category',
    },
    prepare({ name, date, image, category }) {
      const nameFormatted = name ? formatName(name) : 'Untitled Blog';
      const dateFormatted = date ? formatDate(date) : 'Unknown published Date';
      const categoryFormatted = category
        ? formatName(category)
        : 'Unknown Category';

      return {
        title: nameFormatted,
        subtitle: `Published: ${dateFormatted} | Category: ${categoryFormatted}`,
        media: image || FaRegNewspaper,
      };
    },
  },
});
