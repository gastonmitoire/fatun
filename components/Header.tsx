// Header component with Next.js

import React from "react";
import Link from "next/link";

interface HeaderProps {
  logo: string;
  links: Array<{
    href: string;
    label: string;
  }>;
  leftLinks?: Array<{
    href: string;
    label: string;
  }>;
  rightLinks?: Array<{
    href: string;
    label: string;
  }>;
}

const Header = ({ logo, links }: HeaderProps) => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex flex-row justify-between items-center">
        {links.map((link) => (
          <Link href={link.href} key={link.label}>
            <span className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
