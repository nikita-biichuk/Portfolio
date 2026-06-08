"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, m } from "framer-motion";
import dynamic from "next/dynamic";
import { courses } from "@/data";
const CanvasRevealEffect = dynamic(
  () => import("./ui/CanvasRevealEffect").then((mod) => ({ default: mod.CanvasRevealEffect })),
  { ssr: false, loading: () => null }
);
import { LinkPreview } from "./ui/link-preview";

export default function About() {
  const t = useTranslations();

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
    <section id="about" className="w-full py-24 md:py-32">
      <h1 className="text-3xl md:text-5xl text-center text-foreground font-bold">
        {t("About.titlePrefix")} <span className="text-gradient">{t("About.titleAccent")}</span>
      </h1>

      <div className="py-20 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">
        {/* Skills — violet / indigo */}
        <Card
          title={t("About.cards.skills.title")}
          hoverClass="hover:border-violet-500/50 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)]"
          description={
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium">
                <span className="text-xl font-bold">{t("About.cards.skills.techStackLabel")}</span>{" "}
                {t("About.cards.skills.techStackValue")}
              </p>
              <p className="text-sm font-medium">
                <span className="text-xl font-bold">{t("About.cards.skills.teamworkLabel")}</span>{" "}
                {t("About.cards.skills.teamworkValue")}
              </p>
              <p className="text-sm font-medium">
                <span className="text-xl font-bold">{t("About.cards.skills.adaptabilityLabel")}</span>{" "}
                {t("About.cards.skills.adaptabilityValue")}
              </p>
            </div>
          }
          icon={<AceternityIcon title={t("About.cards.skills.badge")} accentClass="text-violet-400" />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-violet-950"
            colors={[[139, 92, 246], [99, 102, 241]]}
          />
        </Card>

        {/* Education — emerald / teal */}
        <Card
          title={t("About.cards.education.title")}
          hoverClass="hover:border-emerald-500/50 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.6)]"
          description={
            <div className="flex flex-col">
              <p className="text-sm font-medium mb-3">
                <span className="text-xl font-bold">
                  {t("About.cards.education.currentEducationLabel")}
                </span>{" "}
                {t("About.cards.education.currentEducationValue")}
              </p>
              <p className="text-sm font-medium mb-3">
                <span className="text-xl font-bold">
                  {t("About.cards.education.completedCoursesLabel")}
                </span>
              </p>
              {courses.map((course) => (
                <div key={course.id} className="text-sm font-medium mb-3">
                  {course.imageSrc ? (
                    <LinkPreview url={course.url} imageSrc={course.imageSrc} isStatic={true}>
                      <span className="text-emerald-400 underline transition-colors duration-300 ease-in-out hover:text-emerald-300">
                        {t(`Courses.${course.id}`)}
                      </span>
                    </LinkPreview>
                  ) : (
                    <LinkPreview url={course.url}>
                      <span className="text-emerald-400 underline transition-colors duration-300 ease-in-out hover:text-emerald-300">
                        {t(`Courses.${course.id}`)}
                      </span>
                    </LinkPreview>
                  )}
                </div>
              ))}
            </div>
          }
          icon={<AceternityIcon title={t("About.cards.education.badge")} accentClass="text-emerald-400" />}
        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-emerald-950"
            colors={[[16, 185, 129], [20, 184, 166]]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-background/60" />
        </Card>

        {/* Personal — rose / orange */}
        <Card
          title={t("About.cards.personal.title")}
          hoverClass="hover:border-rose-500/50 hover:shadow-[0_0_40px_-10px_rgba(244,63,94,0.6)]"
          description={t("About.cards.personal.description", { age })}
          icon={<AceternityIcon title={t("About.cards.personal.badge")} accentClass="text-rose-400" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-rose-950"
            colors={[[244, 63, 94], [251, 146, 60]]}
          />
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
  hoverClass = "",
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: React.ReactNode;
  hoverClass?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border border-border transition-all duration-500 group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto px-4 py-8 md:p-4 relative min-h-[30rem] md:h-[30rem] lg:h-[35rem] rounded-3xl overflow-hidden ${hoverClass}`}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-foreground" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-foreground" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-foreground" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-foreground" />

      <AnimatePresence>
        {hovered && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </m.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center">
        <div className="absolute top-[50%] left-[50%] hidden w-full -translate-x-1/2 -translate-y-1/2 justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 md:flex">
          {icon}
        </div>
        <div className="flex flex-col items-center justify-center md:min-h-[9rem]">
          <div className="mb-5 flex justify-center md:hidden">{icon}</div>
          <h2 className="relative z-10 text-center text-2xl font-bold text-foreground opacity-100 transition duration-200 md:mt-4 md:text-3xl md:opacity-0 md:group-hover/canvas-card:-translate-y-2 md:group-hover/canvas-card:opacity-100 md:group-hover/canvas-card:text-white">
            {title}
          </h2>
        </div>
        <div className="relative z-10 mt-6 text-center text-base font-semibold text-muted-foreground opacity-100 transition duration-200 md:mt-4 md:opacity-0 md:group-hover/canvas-card:-translate-y-2 md:group-hover/canvas-card:opacity-100 md:group-hover/canvas-card:text-white/90">
          {description}
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ title, accentClass }: { title: string; accentClass?: string }) => {
  return (
    <button className={`text-2xl px-6 inline-flex h-16 animate-shimmer items-center justify-center rounded-md border border-border bg-[linear-gradient(110deg,var(--color-card),45%,var(--color-accent),55%,var(--color-card))] bg-[length:200%_100%] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background ${accentClass ?? "text-muted-foreground"}`}>
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
