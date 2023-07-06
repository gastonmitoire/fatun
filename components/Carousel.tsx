import React, { useState } from "react";

interface CarouselImage {
  url: string;
  caption: string;
  link: string;
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

  const handlePrev = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleImageClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    window.open(images[currentImage].link, "_blank");
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
          className="w-full h-full object-cover object-center cursor-pointer"
          onClick={handleImageClick}
        />

        <button
          className="
            absolute
            top-1/2
            left-3
            transform
            -translate-y-1/2
            bg-black
            bg-opacity-50
            text-white
            px-2
            py-2
            rounded-full
            hover:bg-opacity-75
            focus:outline-none
            "
          onClick={handlePrev}
        >
          <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              d="M15.75 19.5L8.25 12l7.5-7.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>

        <button
          className="
            absolute
            top-1/2
            right-3
            transform
            -translate-y-1/2
            bg-black
            bg-opacity-50
            text-white
            px-2
            py-2
            rounded-full
            hover:bg-opacity-75
            focus:outline-none
            "
          onClick={handleNext}
        >
          <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
