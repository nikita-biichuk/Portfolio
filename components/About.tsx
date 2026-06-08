"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { LinkPreview } from "./ui/link-preview";
import { courses } from "@/data";

export default function About() {
  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }
    return age;
  };

  const age = calculateAge("2009-06-30");
  return (
    <section id="about" className="w-full mt-44 pt-32">
      <h1 className="text-3xl md:text-5xl text-center text-white font-bold">
        About <span className="text-purple">me</span>
      </h1>

      <div className="py-20 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">
        <Card
          title="My skills"
          description={
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium">
                <span className="text-xl font-bold">Tech stack:</span> HTML,
                CSS, JavaScript, TailwindCSS, ShadCn, ChakraUI, TypeScript,
                React.js, React Native, Appwrite, Node.js, Phaser, Express.js,
                Mongo_DB, PostgreSQL, Prisma, APIs, Next.js, YAML, UNIT Tests,
                Python, Flask, C#, Unity-2D.
              </p>
              <p className="text-sm font-medium">
                <span className="text-xl font-bold">Teamwork:</span> Experience
                working in collaborative environments, communicating effectively
                with team members.
              </p>
              <p className="text-sm font-medium">
                <span className="text-xl font-bold">Adaptability:</span> Quick
                to learn new technologies and adapt to changing project
                requirements.
              </p>
            </div>
          }
          icon={<AceternityIcon title={"My skills"} />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="My education"
          description={
            <div className="flex flex-col">
              <p className="text-sm font-medium mb-3">
                <span className="text-xl font-bold">Current Education:</span>{" "}
                Currently a high school student with a strong interest in web
                development.
              </p>
              <p className="text-sm font-medium mb-3">
                <span className="text-xl font-bold">Completed courses:</span>
              </p>
              {courses.map((course) => (
                <div key={course.id} className="text-sm font-medium mb-3">
                  {course.imageSrc ? (
                    <LinkPreview url={course.url} imageSrc={course.imageSrc} isStatic={true}>
                      <span className="text-blue-500 underline transition-colors duration-300 ease-in-out hover:text-blue-600">{course.title}</span>
                    </LinkPreview>
                  ) : (
                    <LinkPreview url={course.url}>
                      <span className="text-blue-500 underline transition-colors duration-300 ease-in-out hover:text-blue-600">{course.title}</span>
                    </LinkPreview>
                  )}
                </div>
              ))}
            </div>
          }
          icon={<AceternityIcon title={"Education"} />}
        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-black-300"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Something personal about me"
          description={`Hi, I'm Nikita, a ${age}-year-old web developer. I finished 10 grades at school. I have been wrestling for 8 years, which has taught me discipline and perseverance. My hobbies include mountain biking, reading, and gaming. I’m known for being responsible, kind, and dedicated, always striving to give my best in everything I do.`}
          icon={<AceternityIcon title={"Personal info"} />}
        >
          <CanvasRevealEffect containerClassName="bg-sky-600" />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <div className="dark:text-slate-400 font-semibold text-center text-lg opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ title }: { title: string }) => {
  return (
    <button className="text-2xl px-6 inline-flex h-16 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {title}
    </button>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
