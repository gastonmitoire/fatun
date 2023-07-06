import React from "react";

import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Header from "@/components/Header";
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

  const newsByCategory = [
    {
      category: "General",
      news: [
        {
          title: "Title 1",
          description: "Description 1",
          image: "https://picsum.photos/800/400?random=1",
        },
        {
          title: "Title 2",
          description: "Description 2",
          image: "https://picsum.photos/800/400?random=2",
        },
        {
          title: "Title 3",
          description: "Description 3",
          image: "https://picsum.photos/800/400?random=3",
        },
      ],
    },
    {
      category: "Deportes",
      news: [
        {
          title: "Title 1",
          description: "Description 1",
          image: "https://picsum.photos/800/400?random=4",
        },
        {
          title: "Title 2",
          description: "Description 2",
          image: "https://picsum.photos/800/400?random=5",
        },
        {
          title: "Title 3",
          description: "Description 3",
          image: "https://picsum.photos/800/400?random=6",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto flex flex-col gap-3">
      <Header
        logo="https://www.atunpa.org.ar/images/WhatsApp_Image_2022-09-01_at_124852-removebg-preview_1.png"
        links={[
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
        ]}
      />

      <Carousel images={images} />

      <div className="flex flex-col gap-1.5">
        <h2 className="font-bold text-center uppercase">
          Accesos directos de interes
        </h2>

        <HotLinks links={links} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {newsByCategory.map((news, index) => (
          <div className="flex flex-col gap-3" key={index}>
            <h2 className="font-bold text-center uppercase">{news.category}</h2>
            <div className="grid grid-cols-1 gap-3">
              {news.news.map((news, index) => (
                <Card
                  key={index}
                  image={news.image}
                  title={news.title}
                  description={news.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
