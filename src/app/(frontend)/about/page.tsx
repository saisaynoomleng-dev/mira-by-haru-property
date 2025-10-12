import Bounded from '@/components/Bounded';
import HomeBanner from '@/components/HomeBanner';
import TeamMemberCard from '@/components/TeamMemberCard';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_TEAM_MEMBERS_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';

const AboutPage = async () => {
  const { data: members } = await sanityFetch({
    query: ALL_TEAM_MEMBERS_QUERY,
  });
  return (
    <Bounded>
      <div className="flex flex-col md:flex-row md:gap-x-5 gap-y-3">
        <div>
          <Image
            src="/office-members.webp"
            width={1200}
            height={800}
            alt="a group of white, asian, black team member smiling to the camera"
            className="w-full rounded-sm"
            priority
          />
        </div>
        <div className="space-y-3">
          <Title as="h1" size="md" className="capitalize">
            Modern living, Thoughfully designed
          </Title>
          <p>
            The Mira&reg; blends thoughtful architecture, efficient layouts, and
            premium amenities into a refined living experience—crafted for
            comfort, connection, and everyday ease.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <Title as="h2" size="md" className="text-center">
          Our mission is to make premium living effortless—through modern
          design, curated amenities, and personalized service
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 gap-y-3">
          <p>
            At The Mira&reg;, we believe great living starts with thoughtful
            design and seamless experiences. That&apos;s why every detail—down
            to the finishes, layouts, and amenities—is crafted with modern
            renters in mind. From young professionals to empty nesters, our
            spaces are built for ease, comfort, and everyday elegance.
          </p>
          <p>
            We go beyond four walls and square footage. Homis blends boutique
            hospitality with the conveniences of home—smart layouts, responsive
            service, and a sense of community. Whether you're relocating,
            upsizing, or just looking for your next chapter, we&apos;re here to
            make the process easy, warm, and personal.
          </p>
          <p>
            What drives us is simple: to create homes that feel designed just
            for you. No corporate feel. No wasted space. Just a smarter way to
            rent—where everything works, everything flows, and everything feels
            right.
          </p>
          <p>
            From the moment you step inside, Homis feels different. It&apos;s
            not just about polished interiors or curated amenities—it&apos;s
            about how everything comes together to support the way you live.
            With attentive management, on-site conveniences, and a location that
            connects you to the best of the city, Homis is where simplicity
            meets sophistication. It&apos;s home, elevated.
          </p>
        </div>

        <div>
          <Image
            src="/home-hero-4.webp"
            width={1200}
            height={800}
            alt=""
            className="w-full rounded-sm"
            priority
          />
        </div>
        <HomeBanner />
      </div>

      <div className="space-y-3">
        <Title as="h2">Built by People Who Care</Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-4">
          {members.map((member) => (
            <TeamMemberCard key={member.slug?.current} {...member} />
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AboutPage;
