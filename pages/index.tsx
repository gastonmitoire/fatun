import React from "react";

import Carousel from "../components/Carousel";

export default function index() {
  return (
    <div className="container mx-auto">
      <h1>Index</h1>

      <Carousel
        images={[
          {
            url: "https://picsum.photos/800/400?random=1",
            caption: "Caption 1",
          },
          {
            url: "https://picsum.photos/800/400?random=2",
            caption: "Caption 2",
          },
          {
            url: "https://picsum.photos/800/400?random=3",
            caption: "Caption 3",
          },
        ]}
      />
    </div>
  );
}
