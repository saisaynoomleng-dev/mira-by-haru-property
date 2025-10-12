'use client';

import clsx from 'clsx';
import Form from 'next/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useActionState } from 'react';
import { handleSubscription } from '@/lib/actions';

const initialFormState = {
  state: '',
  message: '',
};

const FooterSubscription = ({ className }: { className?: string }) => {
  const [formState, actionFunction, isPending] = useActionState(
    handleSubscription,
    initialFormState,
  );
  return (
    <Form
      action={actionFunction}
      className={clsx(
        'flex flex-col gap-y-3 justify-center items-center',
        className,
      )}
    >
      <p className="font-semibold text-fs-400">Subscribe to our newsletter</p>
      <label htmlFor="email" className="sr-only">
        Email Address
      </label>

      <div className="flex justify-between gap-x-3">
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
        />
        <Button className="bg-brand-black hover:bg-brand-black/80">
          {isPending ? 'loading' : 'Send'}
        </Button>
      </div>
      {formState.state === 'error' && <p className="italic text-red-400"></p>}
    </Form>
  );
};

export default FooterSubscription;
