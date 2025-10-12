'use server';

import { client } from '@/sanity/lib/client';
import { PrevFormStateProps } from './types';

export const handleSubscription = async (
  prevState: PrevFormStateProps,
  formData: FormData,
): Promise<{ state: string; message: string }> => {
  const email = formData.get('email')?.toString().trim() || '';
  const reg_email = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  if (!email) {
    return {
      state: 'error',
      message: `Email Field can't be empty`,
    };
  }

  if (!reg_email.test(email)) {
    return {
      state: 'error',
      message: 'Must be a valid ',
    };
  }

  try {
    client.create({
      _type: 'newsletter',
      email,
    });

    return {
      state: 'success',
      message: 'Thank you for your subscription!',
    };
  } catch (error) {
    return {
      state: 'error',
      message: 'Something went wrong! Try again later!',
    };
  }
};
