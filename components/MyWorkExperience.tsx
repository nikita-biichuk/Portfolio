import React from "react";
import Image from "next/image";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";

const MyWorkExperience = () => {
  return (
    <div className="pb-20">
      <h1 className="text-3xl md:text-5xl text-center font-bold text-white">
        My <span className="text-purple">Work Experience</span>
      </h1>
      <div className="w-full mt-12 flex flex-col gap-4 justify-center">
        {workExperience.map((exp) => (
          <Button
            key={exp.id}
            duration={6000}
            className="w-full text-white border-neutral-300 dark:border-slate-800 h-full min-h-[140px]"
          >
            <div
              className="flex lg:flex-row flex-col lg:items-center md:gap-5 lg:gap-10 gap-2 p-10 py-6 md:p-8 lg:p-10 w-full min-h-[120px]"
            >
              <div className="relative shrink-0 w-16 h-16 md:w-20 md:h-20 lg:w-12 lg:h-12">
                <Image
                  src={exp.thumbnail}
                  alt={exp.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="lg:ms-5 flex-1 min-w-0">
                <h1 className="text-start text-xl md:text-2xl font-bold cursor-text select-text">
                  {exp.title}
                </h1>
                {exp.company && (
                  <h2 className="text-start text-base md:text-lg font-semibold text-purple mt-1 cursor-text select-text">
                    {exp.company}
                  </h2>
                )}
                <p className="text-start font-semibold text-white-100 mt-3 cursor-text select-text">
                  {exp.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MyWorkExperience;
