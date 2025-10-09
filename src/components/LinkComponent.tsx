import { LinkComponentProps } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const LinkComponent = ({ url, imgURL, text }: LinkComponentProps) => {
  return (
    <Link
      href={url}
      className="p-5 rounded-sm bg-brand-blue/20 grid grid-cols-[auto_1fr_auto] place-items-center group hover:scale-[1.001] transition-transform duration-150 ease-in-out gap-x-2"
    >
      <div>
        <Image src={imgURL} width={100} height={100} alt="" priority />
      </div>

      <p className="font-semibold justify-self-start">{text}</p>

      <div className="group-hover:translate-x-1 duration-150 ease-in-out transition-transform">
        <FaArrowRight />
      </div>
    </Link>
  );
};

export default LinkComponent;
