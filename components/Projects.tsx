import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-36">
      <h1 className="text-3xl md:text-5xl text-center text-white font-bold">
        A small selection of <span className="text-purple">Top Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-20 lg:gap-y-16 mt-14">
        {projects.map(({ id, title, des, img, iconLists, link }) => {
          return (
            <div
              key={id}
              className="lg:min-h-[32.5rem] h-[25rem] flex 
              items-center justify-center sm:w-[420px] w-[80vw]"
            >
              <PinContainer title={link} href={link}>
                <div
                  className="flex justify-center items-center
                 relative sm:w-[420px] w-[80vw]
                 overflow-hidden h-[25vh] lg:h-[32.5vh] mb-10"
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#13162D">
                    <img src="/assets/images/backgrounds/bg.png" alt="bg image" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <div className="flex flex-col flex-2">
                  <h1 className="font-bold lg:text-2xl md:text-xl text-lg line-clamp-1">
                    {title}
                  </h1>
                  <p className="lg:text-xl font-normal text-sm line-clamp-2">
                    {des}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => {
                      return (
                        <div
                          key={icon}
                          className="border border-white/[0.2] rounded-full bg-black 
                        lg:w-10 lg:h-10 h-8 w-8 flex justify-center items-center"
                        >
                          <img
                            src={`/assets/${icon}`}
                            alt={icon}
                            className="p-1"
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="inline-flex items-center gap-1 hover:text-slate-300 transition-colors ease-in-out duration-300">
                    <p className="text-xs sm:text-sm text-nowrap md:text-lg">
                      View on <span className="font-semibold">GitHub</span>
                    </p>
                    <FaLocationArrow className="ml-1" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
