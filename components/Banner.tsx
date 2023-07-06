// Banner component

import React from "react";

interface BannerProps {
  iframesrc: string;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ iframesrc, className }) => {
  return (
    <iframe
      className={`w-full ${className}`}
      src={iframesrc}
      title="banner"
    ></iframe>
  );
};

export default Banner;
