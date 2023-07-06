// Carouse component

import React, { useState } from "react";

interface CarouselImage {
  url: string;
  caption: string;
  link?: string;
}

interface CarouselProps {
  images: CarouselImage[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const handlePrev = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="bg-slate-500">
      <div
        className="
        relative
        w-full
        h-96
        flex
        justify-center
        items-center
        overflow-hidden
      "
      >
        <img
          src={images[currentImage].url}
          alt={images[currentImage].caption}
          className="w-full h-full object-cover"
        />
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-full
            flex
            justify-between
            items-center
            px-4
            text-white
            text-2xl
            font-bold
            cursor-pointer
        "
        >
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
