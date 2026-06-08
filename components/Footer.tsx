import React from "react";
import { ContactForm } from "./ContactForm";
import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="pb-32 md:pb-28 xl:pb-20 pt-36 w-full relative"
      id="contact"
    >
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white bg-grid-black flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col lg:max-w-[45vw] relative z-10">
          <h1 className="text-3xl md:text-5xl text-center text-white font-bold">
            So Let&apos;s Work <span className="text-purple">Together!</span>
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you!
          </p>
          <ContactForm />
          <div className="flex mt-10 md:flex-row flex-col justify-between items-center gap-4 md:gap-2">
            <p className="font-normal text-sm">
              Copyright © {new Date().getFullYear()} Nikita Biichuk
            </p>
            <div className="flex items-center gap-3 lg:gap-6">
              {socialMedia.map((link) => {
                return (
                  <div
                    key={link.id}
                    className="h-10 w-10 cursor-pointer flex justify-center items-center backdrop:filter backdrop-blur-lg saturate-180 opacity-75 transition-colors duration-200 ease-in-out rounded-lg border-black-300 bg-black-200 hover:bg-black-300"
                  >
                    <Link href={link.link}>
                      <img
                        src={link.img}
                        className="w-20 h-20"
                        alt="social media icon"
                      />
                    </Link>
                  </div>
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
