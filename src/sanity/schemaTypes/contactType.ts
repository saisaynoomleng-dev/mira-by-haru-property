import { formatName } from '@/lib/utils';
import { MdOutlinePhone } from 'react-icons/md';
import { VscCallIncoming } from 'react-icons/vsc';
import { defineField, defineType } from 'sanity';

export const contactType = defineType({
  name: 'contact',
  title: 'Contacts',
  icon: VscCallIncoming,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
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
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      email: 'email',
    },
    prepare({ name, email }) {
      const nameFormatted = name ? formatName(name) : 'Name not provided';
      return {
        title: nameFormatted,
        subtitle: email,
      };
    },
  },
});
