"use client";
import React, { useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import { FaLocationArrow, FaFilePdf } from "react-icons/fa";
import { Cover } from "./ui/cover";
import SeeMyWorkButton from "./ui/SeeMyWorkButton";
import ViewCvButton from "./ui/view-cv-button";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const checkCv = () => {
    window.open("/assets/documents/NikitaBiichukResume.pdf", "_blank");
  };

  return (
    <header className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32
           md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-1 left-full h-[80vh] w-[90vw]"
          fill="purple"
        />
        <Spotlight
          className="top-30 left-full h-screen w-[40vh] md:w-[60bw]"
          fill="yellow"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen absolute top-0 left-0 w-full dark:bg-black-100 bg-white dark:bg-grid-white bg-grid-black flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w[60vw] flex flex-col justify-center items-center">
          <div className="relative size-44 md:size-48 lg:size-56 rounded-full overflow-hidden mb-6">
            {/* Skeleton placeholder while image loads */}
            {!imageLoaded && (
              <div
                className="absolute inset-0 rounded-full bg-white/10 dark:bg-white/5 animate-pulse"
                aria-hidden
              />
            )}
            <Image
              src="/assets/images/profile/avatar.jpg"
              alt="Nikita Biichuk"
              fill
              sizes="(max-width: 768px) 11rem, (max-width: 1024px) 12rem, 14rem"
              className={`object-cover object-[50%_65%] transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              priority
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80 text-center">
            Full Stack <Cover className="text-sm">Developer</Cover>
          </h2>
          <h1 className="text-3xl md:text-5xl text-center text-white font-bold">
            <span className="text-purple">Nikita Biichuk&apos;s</span> Portfolio
          </h1>
          <p className="text-center md:tracking-wider mb-4 text-lg font-normal text-white">
            Hi! I am Nikita, a full stack web developer based in Ukraine. Specialized in React, Next.js, TypeScript, Node.js, and modern web technologies.
          </p>
          <div className="flex gap-4">
            <SeeMyWorkButton
              title="See my work"
              onClick={scrollToProjects}
              icon={<FaLocationArrow />}
              position="right"
            />
            <ViewCvButton
              title="View CV"
              onClick={checkCv}
              icon={<FaFilePdf />}
              position="right"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
