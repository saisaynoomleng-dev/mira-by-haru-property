import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';
import React from 'react';

const Bounded = ({
  children,
  className,
  as: Comp = 'section',
}: BoundedProps) => {
  return (
    <Comp
      className={clsx(
        'px-3 py-2 md:px-5 md:py-4 lg:px-8 lg:py-6 space-y-8 md:space-y-10 lg:space-y-12',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
