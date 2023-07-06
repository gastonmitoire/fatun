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

const Header: React.FC<HeaderProps> = ({
  logo,
  links,
  leftLinks,
  rightLinks,
}) => {
  return (
    <header className="bg-white shadow">
      {leftLinks || rightLinks ? (
        <nav className="bg-blue-500 text-white px-10">
          <div className="container mx-auto">
            <div
              className={`flex flex-row justify-between items-center ${
                leftLinks ? "visible" : "hidden"
              }`}
            >
              {leftLinks &&
                leftLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.label}
                    className="flex items-center gap-1"
                  >
                    <small>{">"}</small>
                    {link.label}
                  </Link>
                ))}
            </div>

            <div
              className={`flex flex-row justify-between items-center ${
                leftLinks ? "visible" : "hidden"
              }`}
            >
              {rightLinks &&
                rightLinks.map((link) => (
                  <Link href={link.href} key={link.label}>
                    {link.label}
                  </Link>
                ))}
            </div>
          </div>
        </nav>
      ) : null}

      <nav className="container mx-auto px-10 py-1.5">
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
                  key={link.label}
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
    </header>
  );
};

export default Header;
