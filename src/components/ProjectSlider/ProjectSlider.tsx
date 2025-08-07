"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";

type Props = {
  images: { url: string; alt: string }[];
};

export default function ProjectSlider({ images }: Props) {
  return (
    <Splide aria-label="Project Images">
      {images.map((image, index) => (
        <SplideSlide key={index}>
          <Image
            src={image.url}
            alt={image.alt}
            width={800}
            height={400}
            className="rounded-lg shadow-lg mb-6"
            priority
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}
