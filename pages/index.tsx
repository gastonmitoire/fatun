import React from "react";

import Carousel from "../components/Carousel";
import HotLinks from "../components/HotLinks";

export default function index() {
  const images = [
    {
      url: "https://picsum.photos/800/400?random=1",
      caption: "Caption 1",
      link: "https://google.com",
    },
    {
      url: "https://picsum.photos/800/400?random=2",
      caption: "Caption 2",
      link: "https://google.com",
    },
    {
      url: "https://picsum.photos/800/400?random=3",
      caption: "Caption 3",
      link: "https://google.com",
    },
  ];

  const links = [
    {
      caption: "Caption 1",
      url: "https://google.com",
      image: "https://picsum.photos/800/400?random=4",
    },
    {
      caption: "Caption 2",
      url: "https://google.com",
    },
    {
      caption: "Caption 3",
      url: "https://google.com",
    },
    {
      caption: "Caption 4",
      url: "https://google.com",
    },
    {
      caption: "Caption 5",
      url: "https://google.com",
    },
    {
      caption: "Caption 6",

      url: "https://google.com",
    },
    {
      caption: "Caption 7",
      url: "https://google.com",
    },
    {
      caption: "Caption 8",
      url: "https://google.com",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col gap-3">
      <h1>Index</h1>

      <Carousel images={images} />

      <HotLinks links={links} />
    </div>
  );
}
