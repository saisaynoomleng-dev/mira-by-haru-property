'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Hero = ({ className }: { className?: string }) => {
  const images = [
    '/home-hero-1.webp',
    '/home-hero-2.webp',
    '/home-hero-3.webp',
    '/home-hero-4.webp',
  ];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={clsx('relative', className)}>
      <Image
        src={images[activeImage]}
        width={1200}
        height={800}
        alt=""
        priority
        className="w-full object-cover relative"
      />
      <div className="flex gap-x-4 absolute bottom-5 left-[50%] -translate-x-[50%]">
        {Array.from({ length: images.length }, (_, i) => i).map((block) => (
          <button
            onClick={() => setActiveImage(block)}
            key={block}
            className={clsx(
              'w-[10px] h-[10px] rounded-full cursor-pointer',
              block === activeImage
                ? 'bg-brand-white/100'
                : 'bg-brand-white/60',
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
