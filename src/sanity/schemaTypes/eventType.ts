import { formatDate, formatName } from '@/lib/utils';
import { MdEvent } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const eventType = defineType({
  name: 'event',
  title: 'Events',
  icon: MdEvent,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Event Name',
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
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
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
    defineField({
      name: 'location',
      title: 'Event Location',
      type: 'string',
      options: {
        list: [
          { title: 'Rooftop', value: 'rooftop' },
          { title: 'Pool Area', value: 'pool-area' },
          { title: 'Fitness Studio', value: 'fitness-studio' },
          { title: 'Lounge Area', value: 'lounge-area' },
          { title: 'The Grand Courtyard', value: 'the-grand-courtyard' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      name: 'name',
      date: 'date',
      image: 'mainImage',
      location: 'loacation',
    },
    prepare({ name, date, image, location }) {
      const nameFormatted = name ? formatName(name) : 'Untitled Event';
      const dateFormatted = date ? formatDate(date) : 'Unknown Event Date';
      const locationFormatted = location
        ? formatName(location)
        : 'Unknown Location';

      return {
        title: `${nameFormatted}`,
        subtitle: `Date: ${dateFormatted} | Location: ${locationFormatted} `,
        media: image || MdEvent,
      };
    },
  },
});
