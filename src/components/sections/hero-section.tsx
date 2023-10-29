import Image from "next/image";
import React from "react";
import { Images } from "..";

export const HeroSection = () => {
  return (
    <section className="h-scree bg-black ">
      <Image
        className="object-cover bg-no-repeat"
        src={Images.HeroBg}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        alt="hero-bg"
      />
    </section>
  );
};
