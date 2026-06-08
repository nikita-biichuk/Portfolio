import { FloatingControls } from "@/components/FloatingControls";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const siteUrl = "https://nikita-biichuks-portfolio.vercel.app";
const openGraphLocaleMap = {
  en: "en_US",
  uk: "uk_UA",
} as const;

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<Props, "params">): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: t("title"),
      template: `%s | ${t("personName")}`,
    },
    description: t("description"),
    keywords: [t("personName"), t("portfolioKeyword")],
    authors: [{ name: t("personName") }],
    creator: t("personName"),
    publisher: t("personName"),
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        uk: "/uk",
      },
    },
    manifest: "/favicon/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon/favicon.ico" },
        { url: "/favicon/favicon.svg", type: "image/svg+xml" },
        {
          url: "/favicon/favicon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
      ],
      shortcut: "/favicon/favicon.ico",
      apple: [
        {
          url: "/favicon/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${siteUrl}/${locale}`,
      siteName: t("siteName"),
      images: [
        {
          url: "/assets/images/profile/avatar.jpg",
          width: 1200,
          height: 630,
          alt: t("openGraphAlt"),
        },
      ],
      type: "website",
      locale: openGraphLocaleMap[locale],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      card: "summary_large_image",
      site: "@nikitabiichuk",
      creator: "@nikitabiichuk",
      title: t("twitterTitle"),
      description: t("description"),
      images: ["/assets/images/profile/avatar.jpg"],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <FloatingControls />
      {children}
    </NextIntlClientProvider>
  );
}
