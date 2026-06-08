"use client";

import type { ComponentType } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { socialMedia } from "@/data";
import dynamic from "next/dynamic";
const ContactForm = dynamic(
  () => import("./ContactForm").then((mod) => ({ default: mod.ContactForm })),
  { ssr: false, loading: () => <div className="h-[420px]" /> }
);

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  github: FaGithub,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  linkedin: FaLinkedin,
};

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="pb-24 md:pb-28 xl:pb-20 pt-24 md:pt-32 w-full relative" id="contact">
      <div className="h-screen w-full bg-background dark:bg-grid-white bg-grid-black flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col lg:max-w-[45vw] relative z-10">
          <h1 className="text-3xl md:text-5xl text-center text-foreground font-bold">
            {t("titlePrefix")} <span className="text-gradient">{t("titleAccent")}</span>
          </h1>
          <p className="text-muted-foreground md:mt-10 my-5 text-center">{t("description")}</p>
          <ContactForm />
          <div className="flex mt-10 md:flex-row flex-col justify-between items-center gap-4 md:gap-2">
            <p className="font-normal text-sm">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
            <div className="flex items-center gap-3 lg:gap-6">
              {socialMedia.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <Link
                    key={item.id}
                    href={item.link}
                    aria-label={t(`socialAlt.${item.id}`)}
                    className="h-10 w-10 flex justify-center items-center rounded-lg border border-border bg-card hover:bg-accent text-foreground opacity-75 hover:opacity-100 transition-all duration-200 ease-in-out"
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
