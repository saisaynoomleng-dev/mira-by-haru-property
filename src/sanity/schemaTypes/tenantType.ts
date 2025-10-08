import { formatDate, formatName } from '@/lib/utils';
import { GrUserAdmin } from 'react-icons/gr';
import { defineField, defineType } from 'sanity';

export const tenantType = defineType({
  name: 'tenant',
  title: 'Tenants',
  icon: GrUserAdmin,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tenant Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'moveInDate',
      title: 'Move In Date',
      type: 'date',
      initialValue: new Date().toISOString().slice(0, 10),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (document) =>
          document?.name && document?.moveInDate
            ? `${document?.name} - ${document?.moveInDate}`
            : '',
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
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ssn',
      title: 'Social Security Number',
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
      name: 'employmentInfo',
      title: 'Employment Info',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'blockImage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contract',
      title: 'Contract Type',
      type: 'number',
      initialValue: 6,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      contract: 'contract',
      image: 'mainImage',
      roomNumber: 'roomNumber',
      moveInDate: 'moveInDate',
    },
    prepare({ name, contract, image, roomNumber, moveInDate }) {
      const nameFormatted = name ? formatName(name) : 'Unnamed Tenant';
      const dateFormatted = moveInDate
        ? formatDate(moveInDate)
        : 'Unknown Move in Date';
      return {
        title: `${nameFormatted} | Room: ${roomNumber}`,
        subtitle: `${contract} months | Moved-In: ${dateFormatted}`,
        media: image || GrUserAdmin,
      };
    },
  },
});
