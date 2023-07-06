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
    <header className="container mx-auto bg-white shadow px-10 py-1.5">
      <div className="flex flex-row justify-between items-center">
        <Link href="/">
          <img src={logo} alt="Logo" className="h-20" />
        </Link>

        <div>
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
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            );
          })}
        </div>

        <div>olas</div>
      </div>
    </header>
  );
};

export default Header;
