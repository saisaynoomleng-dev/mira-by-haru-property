'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavLinks = [
  { name: 'home', url: '/' },
  { name: 'about', url: '/about' },
  { name: 'floor plans', url: '/floor-plans' },
  { name: 'contact', url: '/contact' },
  { name: 'amenities', url: '/amenities' },
  { name: 'gallery', url: '/gallery' },
  { name: 'neighborhood', url: '/neighborhood' },
  { name: 'service shop', url: '/service-shop' },
  { name: 'blog', url: '/blog' },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="flex justify-between px-4 md:px-8 py-3 max-w-[1200px] mx-auto items-center relative">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo-black.png"
          width={50}
          height={50}
          alt="Company logo"
          priority
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-6 font-medium text-sm">
        {NavLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            className="capitalize hover:text-brand-primary transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link href="/sign-up">
          <FaUser className="text-lg" />
        </Link>
      </nav>

      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden text-xl"
        aria-label="Toggle menu"
        onClick={() => setNavOpen((prev) => !prev)}
      >
        {navOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Nav */}
      {navOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden z-50">
          <ul className="grid grid-cols-1 md:grid-cols-2 px-10 items-center gap-4 py-6">
            {NavLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className="capitalize text-base hover:underline transition-colors"
                  onClick={() => setNavOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/sign-up" onClick={() => setNavOpen(false)}>
                <FaUser className="text-lg" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
