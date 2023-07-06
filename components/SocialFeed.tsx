// Social Feed component

import React from "react";

interface SocialFeedProps {
  title: string;
  description: string;
  image: string;
}

const SocialFeed: React.FC<SocialFeedProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="flex flex-col w-full p-2">
      <div className="flex flex-col w-full h-full rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src={image}
          alt="social feed"
        />
      </div>
    </div>
  );
};

export default SocialFeed;
