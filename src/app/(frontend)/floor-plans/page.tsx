import Bounded from '@/components/Bounded';
import FloorPlanCard from '@/components/FloorPlanCard';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import { FLOOR_PLANS_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const FILTERS = [
  { name: 'all', filter: '' },
  { name: 'studio', filter: 'studio' },
  { name: '1 Bedroom', filter: 'one-bed' },
  { name: '2 Bedrooms', filter: 'two-bed' },
];

const FloorPlanPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter: string }>;
}) => {
  const { filter = '' } = await searchParams;
  const params = {
    filter: filter || null,
  };
  const { data: floorPlans } = await sanityFetch({
    query: FLOOR_PLANS_QUERY,
    params,
  });

  return (
    <Bounded>
      <div className="space-y-3">
        <Title as="h1" size="md" className="text-center capitalize">
          Layouts that fit how you live
        </Title>
        <p className="text-center">
          Whether you&apos;re downsizing, upsizing, or just starting out—Terris
          offers floor plans tailored to real life. Light-filled rooms. Smart
          finishes. Room to breathe.
        </p>

        <div className="grid grid-cols-3 gap-3 place-items-center">
          <div>
            <Image
              src="/floor-plan-1.jpg"
              width={600}
              height={600}
              alt=""
              priority
              className="w-full rounded-tl-full rounded-bl-full"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <div>
              <Image
                src="/floor-plan-2.jpg"
                width={600}
                height={600}
                alt=""
                priority
                className="w-full rounded-tl-full rounded-tr-full"
              />
            </div>
            <div>
              <Image
                src="/floor-plan-3.jpg"
                width={600}
                height={600}
                alt=""
                priority
                className="w-full rounded-bl-full rounded-br-full"
              />
            </div>
          </div>

          <div>
            <Image
              src="/floor-plan-4.jpg"
              width={600}
              height={600}
              alt=""
              priority
              className="w-full rounded-tr-full rounded-br-full"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5">
        <div className="col-span-full flex justify-around border rounded-sm p-2 border-brand-black/30">
          {FILTERS.map((f) => (
            <Link
              key={f.name}
              href={{
                pathname: '/floor-plans',
                query: {
                  filter: f.filter,
                },
              }}
              className={clsx(
                'capitalize w-full text-center p-2',
                filter === f.filter &&
                  'bg-brand-blue text-brand-white rounded-sm',
              )}
              scroll={false}
            >
              {f.name}
            </Link>
          ))}
        </div>
        {floorPlans.map((plan) => (
          <FloorPlanCard key={plan.slug?.current} {...plan} />
        ))}
      </div>
    </Bounded>
  );
};

export default FloorPlanPage;
