// Header component with Next.js

import React from "react";
import Link from "next/link";

import Dropdown from "./Dropdown";

interface HeaderProps {
  logo: string;
  links: Array<{
    href: string;
    label: string;
    sublinks?: Array<{
      label: string;
      value: string;
    }>;
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
    <nav className="container mx-auto bg-white shadow px-10 py-1.5">
      <div className="flex flex-row justify-between items-center">
        <Link href="/">
          <img src={logo} alt="Logo" className="h-20" />
        </Link>

        <div className="flex items-center gap-3 text-sm">
          {links.map((link) => {
            if (link.sublinks) {
              return (
                <Dropdown
                  key={link.label}
                  label={link.label}
                  options={link.sublinks}
                  onChange={(value) => console.log(value)}
                />
              );
            }

            return (
              <button
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 bg-white hover:bg-gray-50 border border-transparent focus:border-gray-300"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <Link href={link.href} key={link.label}>
                  {link.label}
                </Link>
              </button>
            );
          })}
        </div>

        <div>olas</div>
      </div>
    </nav>
  );
};

export default Header;
