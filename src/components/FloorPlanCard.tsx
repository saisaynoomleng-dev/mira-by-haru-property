import { formatCurrency, formatSquareFeet } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { ALL_FLOOR_PLANS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FloorPlanCard = (
  props: NonNullable<ALL_FLOOR_PLANS_QUERYResult>[number],
) => {
  const {
    name,
    slug,
    mainImage,
    bedroom,
    bathroom,
    squareFeet,
    price,
    subTitle,
  } = props;

  return (
    <Link
      href={`/floor-plans/${slug?.current}`}
      className="flex flex-col gap-y-3 p-2 bg-brand-purple/5 rounded-md hover:scale-[1.01] transition-transform duration-150 ease-in-out"
    >
      <div>
        {mainImage?.asset?.url ? (
          <Image
            src={urlFor(mainImage.asset.url)
              .width(500)
              .height(800)
              .format('webp')
              .url()}
            alt={mainImage.alt || ''}
            width={500}
            height={800}
            priority
            className="w-full object-cover"
          />
        ) : null}
      </div>

      <div className="flex flex-col gap-y-2">
        <p className="font-medium">{name}</p>
        <div className="flex gap-x-3 md:flex-col lg:flex-row gap-y-1">
          <p>{bedroom} Bed</p>
          <p>{bathroom} Bath</p>
          {squareFeet && <p>{formatSquareFeet(squareFeet)} SqFt</p>}
        </div>

        <div className="divider" />

        <p className="text-brand-black/60">{subTitle}</p>

        {price ? (
          <p className="flex flex-col gap-y-1">
            <span className="text-brand-black/60">From</span>
            {formatCurrency(price)}
          </p>
        ) : null}
      </div>
    </Link>
  );
};

export default FloorPlanCard;
