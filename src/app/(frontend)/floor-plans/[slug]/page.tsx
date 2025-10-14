import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { formatCurrency, formatSquareFeet } from '@/lib/utils';
import { myPortableTextComponent } from '@/sanity/components/myPortableText';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { FLOOR_PLAN_QUERY } from '@/sanity/lib/queries';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import { LuBed, LuMaximize, LuShowerHead } from 'react-icons/lu';

const FloorPlanDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: floorPlan } = await sanityFetch({
    query: FLOOR_PLAN_QUERY,
    params: await params,
  });

  if (!floorPlan) notFound();

  return (
    <Bounded>
      <div>
        <Link href="/floor-plans" className="flex items-center gap-x-2 group">
          <FaArrowLeft
            size={10}
            className="group-hover:-translate-x-1 transition-transform duration-150 ease-in"
          />
          <span className="group-hover:translate-x-1 transition-transform duration-150 ease-in">
            Back to All Plans
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3">
        <div className="flex flex-col gap-y-3">
          <Title as="h2" size="md">
            {floorPlan.name}
          </Title>
          <p>{floorPlan.subTitle}</p>

          {floorPlan.price && (
            <p className="text-fs-500 font-bold">
              {formatCurrency(floorPlan.price)}
            </p>
          )}

          <div className="flex gap-x-2">
            <Link href="/apply-now">
              <Button>Apply Now</Button>
            </Link>
            <Link href="/contact">
              <Button>Schedule A Tour</Button>
            </Link>
          </div>

          <div className="divider" />

          <div className="space-y-3">
            <p>Inside the Unit:</p>
            <ul className="list-disc pl-5 flex flex-col gap-y-2">
              {floorPlan.features?.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          {floorPlan.mainImage?.asset?.url ? (
            <Image
              src={urlFor(floorPlan.mainImage.asset.url)
                .width(800)
                .height(1200)
                .format('webp')
                .url()}
              width={800}
              height={1200}
              alt={floorPlan.mainImage.alt || ''}
              className="w-full rounded-sm"
            />
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-3">
        <div className="flex gap-x-2 p-2 border border-brand-black/20 rounded-sm items-center">
          <div>
            <LuBed size={30} />
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Bedrooms</p>
            <p className="text-fs-300 text-brand-black/80">
              {floorPlan.bedroom}{' '}
              {floorPlan.bedroom && floorPlan.bedroom > 1
                ? 'Bedrooms'
                : 'Bedroom'}
            </p>
          </div>
        </div>

        <div className="flex gap-x-2 p-2 border border-brand-black/20 rounded-sm items-center">
          <div>
            <LuShowerHead size={30} />
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Baths</p>
            <p className="text-fs-300 text-brand-black/80">
              {floorPlan.bathroom}{' '}
              {floorPlan.bathroom && floorPlan.bathroom > 1 ? 'Baths' : 'Bath'}
            </p>
          </div>
        </div>

        <div className="flex gap-x-2 p-2 border border-brand-black/20 rounded-sm items-center">
          <div>
            <LuMaximize size={30} />
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Square Feet</p>
            {floorPlan.squareFeet && (
              <p className="text-fs-300 text-brand-black/80">
                {formatSquareFeet(floorPlan.squareFeet)} SF
              </p>
            )}
          </div>
        </div>
      </div>
      {floorPlan.desc && (
        <div className="prose-base md:prose-lg min-w-screen">
          <PortableText
            value={floorPlan.desc}
            components={myPortableTextComponent}
          />
        </div>
      )}
    </Bounded>
  );
};

export default FloorPlanDetailPage;
