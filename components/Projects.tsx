import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import { PinContainer } from "./ui/PinContainer";
import { AnimateOnView } from "./ui/AnimateOnView";

const Projects = () => {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="w-full py-24 md:py-32">
      <h1 className="text-3xl md:text-5xl text-center text-foreground font-bold">
        {t("titlePrefix")} <span className="text-gradient">{t("titleAccent")}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-20 lg:gap-y-16 mt-14">
        {projects.map(({ id, img, iconLists, link }, idx) => {
          const title = t(`items.${id}.title`);

          return (
            <AnimateOnView
              key={id}
              delay={0.05 + idx * 0.07}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[420px] w-[80vw]"
            >
              <PinContainer title={link} href={link}>
                <div
                  className="flex justify-center items-center
                 relative sm:w-[420px] w-[80vw]
                 overflow-hidden h-[25vh] lg:h-[32.5vh] mb-10"
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#13162D]">
                    <Image
                      src="/assets/images/backgrounds/bg.png"
                      alt=""
                      fill
                      sizes="(max-width: 640px) 80vw, 420px"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 z-10">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      sizes="(max-width: 640px) 80vw, 420px"
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-2">
                  <h1 className="font-bold lg:text-2xl md:text-xl text-lg line-clamp-1">{title}</h1>
                  <p className="lg:text-xl font-normal text-sm line-clamp-2">
                    {t(`items.${id}.description`)}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon) => {
                      return (
                        <div
                          key={icon}
                          className="border border-border rounded-full bg-zinc-900
                        lg:w-10 lg:h-10 h-8 w-8 flex justify-center items-center"
                        >
                          <img src={`/assets/${icon}`} alt={icon} className="p-1" />
                        </div>
                      );
                    })}
                  </div>
                  <div className="inline-flex items-center gap-1 hover:text-slate-300 transition-colors ease-in-out duration-300">
                    <p className="text-xs sm:text-sm text-nowrap md:text-lg">
                      {t("viewOn")} <span className="font-semibold">{t("github")}</span>
                    </p>
                    <FaLocationArrow className="ml-1 text-primary" />
                  </div>
                </div>
              </PinContainer>
            </AnimateOnView>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
