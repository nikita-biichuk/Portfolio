import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaLocationArrow } from "react-icons/fa";

import { projects } from "@/data";

import { PinContainer } from "./ui/PinContainer";
import { AnimateOnView } from "./ui/AnimateOnView";

const Projects = () => {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="w-full py-20 md:py-28">
      <h1 className="text-center text-3xl font-bold text-foreground md:text-5xl">
        {t("titlePrefix")} <span className="text-gradient">{t("titleAccent")}</span>
      </h1>
      <div className="mt-14 grid justify-items-center gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
        {projects.map(({ id, img, iconLists, link }, idx) => {
          const title = t(`items.${id}.title`);

          return (
            <AnimateOnView
              key={id}
              delay={0.05 + idx * 0.07}
              className="flex h-[27rem] w-full max-w-[25rem] items-center justify-center"
            >
              <PinContainer title={link ?? title} href={link}>
                <div
                  className="relative mb-7 flex h-56 w-[min(78vw,23rem)] items-center justify-center overflow-hidden rounded-lg border border-border bg-card"
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src="/assets/images/backgrounds/bg.png"
                      alt=""
                      fill
                      sizes="(max-width: 640px) 80vw, 420px"
                      className="object-cover opacity-75"
                    />
                  </div>
                  <div className="absolute inset-0 z-10">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      sizes="(max-width: 640px) 80vw, 420px"
                      className="object-contain object-bottom p-4 transition duration-500 group-hover/pin:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="flex min-h-28 flex-col">
                  <h2 className="line-clamp-1 text-lg font-bold leading-tight md:text-xl">
                    {title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm font-normal leading-6 text-muted-foreground">
                    {t(`items.${id}.description`)}
                  </p>
                </div>
                <div className="mb-2 mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center">
                    {iconLists.slice(0, 5).map((icon) => {
                      return (
                        <div
                          key={icon}
                          className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-zinc-950 first:ml-0 lg:h-10 lg:w-10"
                        >
                          <Image
                            src={`/assets/${icon}`}
                            alt={icon}
                            className="p-1"
                            width={32}
                            height={32}
                            style={{ height: "auto" }}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="inline-flex items-center gap-1 text-primary transition-colors duration-300 ease-in-out hover:text-foreground">
                    {link ? (
                      <>
                        <p className="text-nowrap text-xs font-semibold sm:text-sm">
                          {t("viewOn")} <span className="font-semibold">{t("github")}</span>
                        </p>
                        <FaLocationArrow className="ml-1 text-primary" />
                      </>
                    ) : (
                      <p className="text-xs font-semibold text-muted-foreground sm:text-sm">
                        {t("closedSource")}
                      </p>
                    )}
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
