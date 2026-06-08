import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { workExperience } from "@/data";

import { Button } from "./ui/MovingBorder";

const MyWorkExperience = () => {
  const t = useTranslations("WorkExperience");

  return (
    <div className="py-24 md:py-32">
      <h1 className="text-3xl md:text-5xl text-center font-bold text-foreground">
        {t("titlePrefix")} <span className="text-gradient">{t("titleAccent")}</span>
      </h1>
      <div className="w-full mt-12 flex flex-col gap-4 justify-center">
        {workExperience.map((exp) => {
          const title = t(`items.${exp.id}.title`);

          return (
            <Button
              key={exp.id}
              duration={6000}
              className="w-full text-foreground border-border h-full min-h-[140px]"
            >
              <div className="flex lg:flex-row flex-col lg:items-center md:gap-5 lg:gap-10 gap-2 p-10 py-6 md:p-8 lg:p-10 w-full min-h-[120px]">
                <div className="relative shrink-0 w-16 h-16 md:w-20 md:h-20 lg:w-12 lg:h-12">
                  <Image
                    src={exp.thumbnail}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 4rem, (max-width: 1024px) 5rem, 3rem"
                    className="object-contain"
                  />
                </div>
                <div className="lg:ms-5 flex-1 min-w-0">
                  <h1 className="text-start text-xl md:text-2xl font-bold cursor-text select-text">
                    {title}
                  </h1>
                  {exp.company && (
                    <h2 className="text-start text-base md:text-lg font-semibold text-primary mt-1 cursor-text select-text">
                      {exp.company}
                    </h2>
                  )}
                  <p className="text-start font-semibold text-muted-foreground mt-3 cursor-text select-text">
                    {t(`items.${exp.id}.description`)}
                  </p>
                </div>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorkExperience;
