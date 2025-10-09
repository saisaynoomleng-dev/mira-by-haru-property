import { formatDate } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { ALL_BLOGS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogCard = (props: NonNullable<ALL_BLOGS_QUERYResult>[number]) => {
  const { name, slug, mainImage, subTitle, category, publishedDate } = props;
  return (
    <Link
      href={`/blog/${slug?.current}`}
      className="flex flex-col gap-y-4 border border-brand-black/10 p-2 rounded-sm hover:scale-[1.01] transition-transform duration-150 ease-in-out"
    >
      <div>
        {mainImage?.asset?.url && (
          <Image
            src={urlFor(mainImage.asset.url)
              .width(500)
              .height(500)
              .format('webp')
              .url()}
            width={500}
            height={500}
            alt={mainImage.alt || ''}
            priority
            className="w-full rounded-sm object-cover"
          />
        )}
      </div>

      <div className="flex flex-col gap-y-3">
        <p className="font-semibold">{name}</p>
        <p className="text-brand-black/60 line-clamp-3">{subTitle}</p>
        <div className="flex justify-between">
          <p className="capitalize">{category}</p>
          {publishedDate && (
            <p className="px-2 py-1 bg-brand-white rounded-sm">
              {new Date(publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
              })}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
