"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "../assets/img/slider/1.jpg";
import img2 from "../assets/img/slider/2.jpg";
import img3 from "../assets/img/slider/3.jpg";
import img4 from "../assets/img/slider/4.jpg";

import Link from "next/link";

const slides = [img1, img2, img3, img4];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[900px] overflow-hidden">
      {/* Background Images with fade */}
      {slides.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          fill
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
          priority={i === 0}
        />
      ))}

      {/* Static Text Content */}
      <div className="absolute inset-0 bg-black/50 z-10 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-white text-center mb-10 text-4xl md:text-6xl uppercase font-bold">
          Full-Service Auto Glass and Residential Glass Replacement
        </h2>
        <Link className="btn btn-primary p-8 md:p-6 mt-14 text-xl text-white hover:bg-black hover:text-primary" href={'/quote'}>Learn More About the Auto Glass Services We Offer</Link>
      </div>
    </div>
  );
};

export default Slider;
