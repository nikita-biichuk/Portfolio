import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyWorkExperience from "@/components/MyWorkExperience";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/NavBar";
import { CgWebsite } from "react-icons/cg";
import { FaHome, FaRProject, FaUser } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nikita Biichuk",
    "jobTitle": "Full Stack Web Developer",
    "url": "https://nikita-biichuks-portfolio.vercel.app",
    "image": "https://nikita-biichuks-portfolio.vercel.app/assets/images/profile/avatar.jpg",
    "sameAs": [
      "https://github.com/nikitabiichuk2009",
      "https://twitter.com/nikitabiichuk"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UA",
      "addressRegion": "Ukraine"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "HTML",
      "CSS",
      "TailwindCSS",
      "Python",
      "Flask",
      "Unity",
      "Web Development",
      "Full Stack Development"
    ],
    "description": "Full Stack Web Developer from Ukraine specializing in React, Next.js, TypeScript, Node.js, and modern web technologies."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main
        className="relative bg-black-100 justify-center 
      flex flex-col items-center overflow-hidden mx-auto
      sm:px-10 px-5"
      >
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "#", icon: <FaHome /> },
            { name: "About", link: "#about", icon: <FaUser /> },
            { name: "Projects", link: "#projects", icon: <CgWebsite /> },
            { name: "Contact", link: "#contact", icon: <MdContactPhone /> },
          ]}
        />
        <Hero />
        <About />
        <MyWorkExperience />
        <Projects />
        <Footer />
      </div>
    </main>
    </>
  );
}
