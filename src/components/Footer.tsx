import Link from 'next/link';
import Image from 'next/image';
import FooterSubscription from './FooterSubscription';
import {
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcMastercard,
  FaCcVisa,
  FaPaypal,
} from 'react-icons/fa';
import FAQ from './FAQ';
import Bounded from './Bounded';

const MAIN_PAGES = [
  { name: 'home', url: '/' },
  { name: 'floor plans', url: '/floor-plans' },
  { name: 'about us', url: '/about' },
  { name: 'contact', url: '/contact' },
];

const COMPANY_PAGES = [
  { name: 'amenities', url: '/amenities' },
  { name: 'gallery', url: '/gallery' },
  { name: 'neighborhood', url: '/neighborhood' },
  { name: 'service shop', url: '/service-shop' },
  { name: 'blog', url: '/blog' },
];

const UTILITY_PAGES = [
  { name: 'apply now', url: '/apply-now' },
  { name: 'maintainance request', url: '/maintainance-request' },
  { name: 'terms & conditions', url: '/terms-and-condition' },
];

const Footer = () => {
  return (
    <>
      <Bounded>
        <FAQ />
      </Bounded>
      <footer className="grid grid-cols-1 md:grid-cols-4 md:gap-x-5 lg:gap-x-8 gap-y-5 p-5 bg-brand-blue/80 text-white text-fs-300">
        <div className="flex flex-col gap-y-4">
          <Link href="/">
            <Image
              src="/logo-white.png"
              width={100}
              height={100}
              alt=""
              priority
            />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
            voluptatum pariatur? Eum quis placeat vero reprehenderit, error ab
            ipsam porro?
          </p>
        </div>

        <div className="flex flex-col gap-y-3">
          <p className="font-bold text-fs-400">Main</p>
          <ul className="flex flex-col gap-y-3">
            {MAIN_PAGES.map((p) => (
              <li key={p.name}>
                <Link
                  href={p.url}
                  className="capitalize hover:underline underline-offset-2"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-3">
          <p className="font-bold text-fs-400">Company</p>
          <ul className="flex flex-col gap-y-3">
            {COMPANY_PAGES.map((p) => (
              <li key={p.name}>
                <Link
                  href={p.url}
                  className="capitalize hover:underline underline-offset-2"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-3">
          <p className="font-bold text-fs-400">Utility</p>
          <ul className="flex flex-col gap-y-3">
            {UTILITY_PAGES.map((p) => (
              <li key={p.name}>
                <Link
                  href={p.url}
                  className="capitalize hover:underline underline-offset-2"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <FooterSubscription className="col-span-full" />

        <div className="divider bg-brand-white col-span-full" />

        <div className="col-span-full flex  justify-between items-center">
          <div className="flex gap-x-2 items-center">
            <p>We accept :</p>
            <FaPaypal size={20} />
            <FaCcMastercard size={20} />
            <FaCcAmazonPay size={20} />
            <FaCcApplePay size={20} />
            <FaCcVisa size={20} />
          </div>
          <div className="flex gap-x-2 text-fs-200 text-brand-white/70">
            <p>Copyright&copy; The Mira&trade; {new Date().getFullYear()}</p>
            <p>Designed & Developed by Sai Say Noom Leng</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
