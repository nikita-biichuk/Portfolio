import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { CgWebsite } from "react-icons/cg";
import { FaHome, FaUser } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyWorkExperience from "@/components/MyWorkExperience";
import Projects from "@/components/Projects";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import { FloatingNav } from "@/components/ui/NavBar";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const url = `https://nikita-biichuks-portfolio.vercel.app/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: [t("personName"), t("portfolioKeyword"), "React", "Next.js", "TypeScript", "Node.js"],
    authors: [{ name: t("personName") }],
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      siteName: t("siteName"),
      images: [
        {
          url: "https://nikita-biichuks-portfolio.vercel.app/assets/images/profile/avatar.jpg",
          width: 1200,
          height: 630,
          alt: t("openGraphAlt"),
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("description"),
      images: ["https://nikita-biichuks-portfolio.vercel.app/assets/images/profile/avatar.jpg"],
    },
    alternates: { canonical: url },
    metadataBase: new URL("https://nikita-biichuks-portfolio.vercel.app"),
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "HomePage" });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nikita Biichuk",
    jobTitle: t("person.jobTitle"),
    url: `https://nikita-biichuks-portfolio.vercel.app/${locale}`,
    image: "https://nikita-biichuks-portfolio.vercel.app/assets/images/profile/avatar.jpg",
    sameAs: ["https://github.com/nikitabiichuk2009", "https://twitter.com/nikitabiichuk"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "UA",
      addressRegion: "Ukraine",
    },
    knowsAbout: [
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
      "Full Stack Development",
    ],
    description: t("person.description"),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main
        className="relative bg-background justify-center
      flex flex-col items-center overflow-hidden mx-auto
      sm:px-10 px-5"
      >
        <div className="max-w-7xl w-full">
          <FloatingNav
            navItems={[
              { name: t("nav.home"), link: "#", icon: <FaHome /> },
              { name: t("nav.about"), link: "#about", icon: <FaUser /> },
              {
                name: t("nav.projects"),
                link: "#projects",
                icon: <CgWebsite />,
              },
              {
                name: t("nav.contact"),
                link: "#contact",
                icon: <MdContactPhone />,
              },
            ]}
          />
          <AnimateOnView>
            <Hero />
          </AnimateOnView>
          <SectionDivider />
          <AnimateOnView delay={0.1}>
            <About />
          </AnimateOnView>
          <SectionDivider />
          <AnimateOnView delay={0.1}>
            <MyWorkExperience />
          </AnimateOnView>
          <SectionDivider />
          <AnimateOnView delay={0.1}>
            <Projects />
          </AnimateOnView>
          <SectionDivider />
          <AnimateOnView delay={0.1}>
            <Footer />
          </AnimateOnView>
        </div>
      </main>
    </>
  );
}
