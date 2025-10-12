import { urlFor } from '@/sanity/lib/image';
import { ALL_TEAM_MEMBERS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const TeamMemberCard = (
  props: NonNullable<ALL_TEAM_MEMBERS_QUERYResult>[number],
) => {
  const { name, position, mainImage, bio, socialLink } = props;
  return (
    <div className="flex flex-col gap-y-3 p-2 bg-brand-purple/5 rounded-sm">
      <div>
        {mainImage?.asset?.url ? (
          <Image
            src={urlFor(mainImage.asset.url)
              .width(500)
              .height(500)
              .format('webp')
              .url()}
            width={500}
            height={500}
            priority
            alt={mainImage.alt || ''}
            className="w-full object-cover"
          />
        ) : null}
      </div>

      <div className="flex flex-col gap-y-5">
        <p className="flex flex-col">
          {name}
          <span className="text-brand-black/60">{position}</span>
        </p>

        <p className="text-brand-black/60">{bio}</p>

        <Link href={socialLink || ''}>
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default TeamMemberCard;
