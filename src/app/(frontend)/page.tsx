import BlogCard from '@/components/BlogCard';
import Bounded from '@/components/Bounded';
import FAQ from '@/components/FAQ';
import FloorPlanCard from '@/components/FloorPlanCard';
import Hero from '@/components/Hero';
import HomeBanner from '@/components/HomeBanner';
import LinkComponent from '@/components/LinkComponent';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import {
  ALL_BLOGS_QUERY,
  ALL_FLOOR_PLANS_QUERY,
  ALL_NEIGHBORHOODS_QUERY,
} from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';
import { LuDumbbell } from 'react-icons/lu';
import { MdPool } from 'react-icons/md';
import {
  PiBicycle,
  PiChair,
  PiLockersDuotone,
  PiPark,
  PiSolarRoofLight,
} from 'react-icons/pi';

const LINK_COMPONENTS = [
  { text: 'Amenities', imgURL: '/fitness-studio.jpg', url: '/amenities' },
  { text: 'Floor Plans', imgURL: '/one-bed.jpg', url: '/floor-plans' },
  { text: 'Neighborhood', imgURL: '/timesquare.jpg', url: '/neighborhood' },
];

const AMENITIES = [
  {
    body: 'Rise above the ordinary — at Rooftop Haven, where city lights meet starlit skies, and every evening unfolds like a private celebration in the clouds.',
    title: 'Rooftop Haven',
    icon: <PiSolarRoofLight />,
  },
  {
    body: 'Secure, self-service lockers for 24/7 package pickup',
    title: 'Package Locker',
    icon: <PiLockersDuotone />,
  },
  {
    body: 'Covered and secure parking for your ride, just steps from the entrance',
    title: 'Bike Storage',
    icon: <PiBicycle />,
  },
  {
    body: 'Comfortable, shared spaces for work, meetups, or quiet moments',
    title: 'Lounge Areas',
    icon: <PiChair />,
  },
  {
    body: 'Where open skies meet timeless design — The Grand Courtyard is your private stage for elegant gatherings, serene mornings, and unforgettable moments beneath the sun and stars.',
    title: 'The Grand Courtyard',
    icon: <PiPark />,
  },
  {
    body: 'Immerse yourself in Poolside Paradise — where tranquil waters meet timeless elegance, and every moment feels like a five-star escape just beyond your doorstep.',
    title: 'Poolside Paradise',
    icon: <MdPool />,
  },
  {
    body: 'Modern equipment and open space for your daily workout routine',
    title: 'Fitness Studio',
    icon: <LuDumbbell />,
  },
];

const UNIT_FEATURES = [
  { title: 'high ceiling', imgURL: '/high-ceiling.avif' },
  { title: 'natural light', imgURL: '/natural-light.avif' },
  { title: 'sliding barn doors', imgURL: '/sliding.avif' },
  { title: 'oversized balconies', imgURL: '/oversized.png' },
];

export default async function Home() {
  const { data: allFloorPlans } = await sanityFetch({
    query: ALL_FLOOR_PLANS_QUERY,
  });
  const { data: allNeighborHoods } = await sanityFetch({
    query: ALL_NEIGHBORHOODS_QUERY,
  });
  const { data: allBlogs } = await sanityFetch({ query: ALL_BLOGS_QUERY });

  const floorPlans = allFloorPlans.slice(0, 3);
  const blogs = allBlogs.slice(0, 4);

  return (
    <Bounded>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
        <div className="md:place-self-end">
          <Title as="h1" size="lg">
            Your Property. Your Brand. Your Story.
          </Title>
        </div>

        <div className="flex flex-col gap-y-3">
          <p>
            Welcome to The Mira&reg;-Modern rentals crafted for comfort, style,
            and effortless city life.Welcome to The Mira&reg;—modern rentals
            crafted for comfort, style, and effortless city life. Designed to
            help single properties stand out, The Mira&reg; is your all-in-one
            solution for showcasing floor plans, amenities, and neighbourhood.
          </p>
          <div className="flex gap-x-3 md:self-end">
            <Link href="/floor-plans">
              <Button>Explore Floor Plans</Button>
            </Link>
            <Link href="/contact">
              <Button variant="border">Schedule a Tour</Button>
            </Link>
          </div>
        </div>

        <Hero className="col-span-full" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-1">
        {LINK_COMPONENTS.map((component) => (
          <LinkComponent
            text={component.text}
            imgURL={component.imgURL}
            url={component.url}
            key={component.text}
          />
        ))}
      </div>
      <div className="flex flex-col gap-y-5 md:gap-y-8">
        <Title as="h2" size="md" className="text-center">
          Our mission is to make premium living effortless—through modern
          design, curated amenities, and personalized service
        </Title>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-5">
          <p>
            At The Mira&reg;, we believe great living starts with thoughtful
            design and seamless experiences. That&apos;s why every detail—down
            to the finishes, layouts, and amenities—is crafted with modern
            renters in mind. From young professionals to empty nesters, our
            spaces are built for ease, comfort, and everyday elegance.
          </p>
          <p>
            We go beyond four walls and square footage. The Mira&reg; blends
            boutique hospitality with the conveniences of home—smart layouts,
            responsive service, and a sense of community. Whether you&apos;re
            relocating, upsizing, or just looking for your next chapter,
            we&apos;re here to make the process easy, warm, and personal.
          </p>
          <p>
            What drives us is simple: to create homes that feel designed just
            for you. No corporate feel. No wasted space. Just a smarter way to
            rent—where everything works, everything flows, and everything feels
            right.
          </p>
          <p>
            From the moment you step inside, The Mira&reg;&apos;s feels
            different. It&apos;s not just about polished interiors or curated
            amenities—it&apos;s about how everything comes together to support
            the way you live. With attentive management, on-site conveniences,
            and a location that connects you to the best of the city, The
            Mira&apos; is where simplicity meets sophistication. It&apos;s home,
            elevated.
          </p>
        </div>

        <div>
          <Image
            src="/family.avif"
            width={1200}
            height={600}
            alt=""
            priority
            className="w-full object-cover"
          />
        </div>

        <HomeBanner />
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="flex md:justify-between items-center">
          <Title as="h2" size="md" className="capitalize">
            A Plan that fits your life
          </Title>
          <Link href="/floor-plans">
            <Button>All Floor Plans</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5">
          {floorPlans.map((plan) => (
            <FloorPlanCard key={plan.slug?.current} {...plan} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <Title as="h2" size="md">
          All the Essentials, thoughfully arranged
        </Title>
        <p className="text-brand-black/60">
          The Mira&reg; blends stylish interiors with smart features and
          thoughtful shared spaces.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-full">
              <Image
                src="/amenity-1.avif"
                width={400}
                height={400}
                alt=""
                priority
                className="rounded-sm w-full object-cover"
              />
            </div>

            <div>
              <Image
                src="/amenity-2.avif"
                width={400}
                height={400}
                alt=""
                priority
                className="rounded-sm w-full object-cover"
              />
            </div>

            <div>
              <Image
                src="/amenity-3.avif"
                width={400}
                height={400}
                alt=""
                priority
                className="rounded-sm w-full object-cover"
              />
            </div>

            <div className="col-span-full">
              <Link href="/amenities">
                <Button className="w-full">Explore All Amenities</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            {AMENITIES.map((amenity) => (
              <div
                key={amenity.title}
                className="space-y-2 border p-2 rounded-sm border-brand-black/20 flex gap-x-4 items-center"
              >
                <div className="text-fs-500">{amenity.icon}</div>
                <div className="space-y-2">
                  <p className="font-medium">{amenity.title}</p>
                  <p className="text-brand-black/70 text-fs-200">
                    {amenity.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <Title as="h2" size="md" className="capitalize">
          Where Comfort meets Characters
        </Title>
        <p>
          At The Mira&reg;, we design with intention—spaces that feel as good as
          they function. From ceiling height to natural light, every feature is
          chosen to enhance daily life, not distract from it.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 flex-nowrap">
          {UNIT_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-y-3 justify-center items-center bg-brand-blue/5 rounded-sm p-4"
            >
              <div>
                <Image
                  src={feature.imgURL}
                  width={100}
                  height={100}
                  alt=""
                  priority
                  className="max-w-[30px] object-cover"
                />
              </div>
              <p className="text-brand-black/60 capitalize font-semibold text-center">
                {feature.title}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full h-[200px] bg-[url(/amenity-3.avif)] rounded-sm bg-position-[center center] bg-no-repeat bg-cover relative overflow-hidden flex items-center justify-center gap-x-3">
          <div className="absolute inset-0 bg-brand-black/60 z-10" />
          <p className="text-fs-600 text-brand-white relative z-30 text-nowrap uppercase tracking-[8] animate-marquee">
            Effortless city living &bull; thoughtful design &bull; smart
            amenities &bull;
          </p>
          <p className="text-fs-600 text-brand-white relative z-30 text-nowrap uppercase tracking-[8] animate-marquee">
            Effortless city living &bull; thoughtful design &bull; smart
            amenities &bull;
          </p>
          <p className="text-fs-600 text-brand-white relative z-30 text-nowrap uppercase tracking-[8] animate-marquee">
            Effortless city living &bull; thoughtful design &bull; smart
            amenities &bull;
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-5 p-5">
        <Title as="h2" size="md" className="capitalize">
          live connected in every way
        </Title>
        <p>
          Centrally located yet quietly tucked away, The Mira&reg; gives you
          immediate access to daily essentials, dining, green space, and
          cultural spots.
        </p>

        <div className="grid grid-cols-5 gap-x-2">
          {allNeighborHoods.map((neighborhood) => (
            <div
              key={neighborhood.slug?.current}
              className="flex gap-y-3 flex-col p-2 rounded-sm bg-brand-blue/5 text-center"
            >
              <div>
                {neighborhood?.mainImage?.asset?.url ? (
                  <Image
                    src={urlFor(neighborhood.mainImage?.asset?.url)
                      .width(600)
                      .height(600)
                      .format('webp')
                      .url()}
                    width={600}
                    height={600}
                    alt={neighborhood.mainImage.alt || ''}
                    priority
                    className="rounded-sm w-full"
                  />
                ) : null}
              </div>

              <p className="font-semibold text-fs-200">{neighborhood.name}</p>
            </div>
          ))}
        </div>

        <div className="md:self-center">
          <Link href="/neighborhood">
            <Button className="w-full mx-auto">Explore All Neighborhood</Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-y-5">
        <Title as="h2" size="md" className="capitalize ">
          updates, tips & living well
        </Title>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug?.current} {...blog} />
          ))}
        </div>
      </div>
    </Bounded>
  );
}
