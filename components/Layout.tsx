// Layout component

import React from "react";

import Header from "@/components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const headerLinks = [
    {
      href: "https://facebook.com",
      label: "Inicio",
    },
    {
      href: "https://twitter.com",
      label: "Instiucional",
      sublinks: [
        {
          value: "https://twitter.com",
          label: "Twitter",
        },
        {
          value: "https://twitter.com",
          label: "Twitter",
        },
      ],
    },
    {
      href: "https://google.com",
      label: "Noticias",
    },
    {
      href: "https://twitter.com",
      label: "Menu 4",
      sublinks: [
        {
          value: "https://twitter.com",
          label: "Twitter",
        },
        {
          value: "https://twitter.com",
          label: "Twitter",
        },
      ],
    },
    {
      href: "https://twitter.com",
      label: "Menu 5",
      sublinks: [
        {
          value: "https://twitter.com",
          label: "Twitter",
        },
        {
          value: "https://twitter.com",
          label: "Twitter",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full h-full gap-3">
      <Header
        logo="https://www.atunpa.org.ar/images/WhatsApp_Image_2022-09-01_at_124852-removebg-preview_1.png"
        links={headerLinks}
        leftLinks={[
          {
            href: "https://facebook.com",
            label: "Facebook",
          },
        ]}
      />
      {children}
    </div>
  );
};

export default Layout;
