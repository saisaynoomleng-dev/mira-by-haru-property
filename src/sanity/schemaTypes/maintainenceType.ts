import { formatName } from '@/lib/utils';
import { GiAutoRepair } from 'react-icons/gi';
import { defineField, defineType } from 'sanity';

export const maintainanceType = defineType({
  name: 'maintainanceRequest',
  title: 'Maintainance Requests',
  icon: GiAutoRepair,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: "Request's Name",
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: (document) => `${document.name}-${document.date}`,
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'roomNumber',
      title: 'Room Number',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Request Type',
      type: 'string',
      options: {
        list: [
          { title: 'Plumbing', value: 'plumbing' },
          { title: 'Electrical', value: 'electrical' },
          { title: 'HVAC', value: 'hvac' },
          { title: 'Appliances', value: 'appliances' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      type: 'type',
    },
    prepare({ name, type }) {
      const nameFormatted = name ? formatName(name) : 'Unnamed Tenant';
      const typeFormatted = type ? formatName(type) : 'Unknown Type';

      return {
        title: nameFormatted,
        subtitle: typeFormatted,
      };
    },
  },
});
