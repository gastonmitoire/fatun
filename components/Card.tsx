// Card component

import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="flex gap-3 items-center cursor-pointer hover:opacity-75">
      <img
        src={image}
        alt={title}
        className="w-32 h-32 object-cover object-center"
      />
      <p className="text-xl font-bold text-center mt-2">{title}</p>
    </div>
  );
};

export default Card;
