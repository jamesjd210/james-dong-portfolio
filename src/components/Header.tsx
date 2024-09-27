// src/components/Header.tsx
"use client";

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-tan-500 text-brown-500">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/" className="hover:text-brown-600">
            James Dong
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-brown-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-brown-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-brown-600">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-brown-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
