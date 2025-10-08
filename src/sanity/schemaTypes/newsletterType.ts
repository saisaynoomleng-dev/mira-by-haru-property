import { IoMailUnreadOutline } from 'react-icons/io5';
import { defineField, defineType } from 'sanity';

export const newsletterType = defineType({
  name: 'newsletter',
  title: 'Newsletters',
  type: 'document',
  icon: IoMailUnreadOutline,
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
});
