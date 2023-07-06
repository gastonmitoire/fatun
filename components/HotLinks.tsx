// HotLinks component

import React from "react";

interface Link {
  image?: string;
  caption: string;
  url: string;
}

interface HotLinksProps {
  links: Link[];
}

const HotLinks: React.FC<HotLinksProps> = ({ links }) => {
  const handleLinkClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    window.open(links[0].url, "_blank");
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      {links.map((link, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center cursor-pointer"
          onClick={handleLinkClick}
        >
          {link.image ? (
            <img
              src={link.image}
              alt={link.caption}
              className="w-full h-24 object-cover object-center hover:opacity-75"
            />
          ) : (
            <div className="w-full h-24 flex items-center justify-center p-3 bg-slate-500 hover:opacity-75">
              <p className="text-white text-center">{link.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HotLinks;
