import { formatDate, formatName } from '@/lib/utils';
import { FaWpforms } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const applicationFormType = defineType({
  name: 'applicationForm',
  title: 'Application Forms',
  icon: FaWpforms,
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
        source: (doc) => `${doc.name} - ${doc.date}`,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'preferredFloorPlan',
      title: 'Preferred Floor Plan',
      type: 'reference',
      to: [{ type: 'floorPlan' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'moveInDate',
      title: 'Preferred Move-In Date',
      type: 'date',
      initialValue: new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'employmentInfo',
      title: 'Employment Info',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      moveIn: 'moveInDate',
      floorPlan: 'preferredFloorPlan',
    },
    prepare({ name, moveIn, floorPlan }) {
      const nameFormatted = name ? formatName(name) : 'Unnamed Tenant';
      const moveInFormatted = moveIn
        ? formatDate(moveIn)
        : 'Unspecified Move In Date';

      return {
        title: nameFormatted,
        subtitle: `Move-in: ${moveInFormatted} | Preferred: ${floorPlan}`,
      };
    },
  },
});
