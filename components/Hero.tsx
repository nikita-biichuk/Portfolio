"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaFilePdf, FaLocationArrow } from "react-icons/fa";

import { Spotlight } from "./ui/Spotlight";
import { Cover } from "./ui/cover";
import SeeMyWorkButton from "./ui/SeeMyWorkButton";
import ViewCvButton from "./ui/view-cv-button";

const Hero = () => {
  const t = useTranslations("Hero");
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
    <header className="relative isolate pb-24 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32
           md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="-top-1 left-full h-[80vh] w-[90vw]" fill="purple" />
        <Spotlight className="top-30 left-full h-screen w-[40vh] md:w-[60bw]" fill="yellow" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute inset-0 bg-background dark:bg-grid-white bg-grid-black flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w[60vw] flex flex-col justify-center items-center">
          <div className="relative mb-6">
            <span className="absolute -inset-3 rounded-full border-2 border-primary/60 animate-ring-pulse-1 pointer-events-none" />
            <span className="absolute -inset-7 rounded-full border-2 border-primary/40 animate-ring-pulse-2 pointer-events-none" />
            <div className="relative size-44 md:size-48 lg:size-56 rounded-full overflow-hidden">
              {!imageLoaded && (
                <div
                  className="absolute inset-0 rounded-full bg-muted/30 animate-pulse"
                  aria-hidden
                />
              )}
              <Image
                src="/assets/images/profile/avatar.jpg"
                alt="Nikita Biichuk"
                fill
                sizes="(max-width: 768px) 11rem, (max-width: 1024px) 12rem, 14rem"
                className={`object-cover object-[50%_5%] transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                priority
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
          <h2 className="uppercase tracking-widest text-xs text-muted-foreground max-w-80 text-center">
            {t("rolePrefix")} <Cover className="text-sm">{t("roleAccent")}</Cover>
          </h2>
          <h1 className="text-3xl md:text-5xl text-center text-foreground font-bold">
            {t.rich("title", {
              accent: (chunks) => <span className="text-gradient">{chunks}</span>,
            })}
          </h1>
          <p className="text-center md:tracking-wider mb-4 text-lg font-normal text-foreground">
            {t("description")}
          </p>
          <div className="flex gap-4">
            <SeeMyWorkButton
              title={t("seeWork")}
              onClick={scrollToProjects}
              icon={<FaLocationArrow />}
              position="right"
            />
            <ViewCvButton
              title={t("viewCv")}
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
