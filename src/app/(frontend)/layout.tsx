import Footer from '@/components/Footer';
import { SanityLive } from '@/sanity/lib/live';

const FrontendLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      {children}
      <Footer />

      <SanityLive />
    </main>
  );
};

export default FrontendLayout;
