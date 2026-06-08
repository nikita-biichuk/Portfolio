import { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nikita-biichuks-portfolio.vercel.app";
  const anchors = ["", "#about", "#projects", "#contact"];

  return routing.locales.flatMap((locale) =>
    anchors.map((anchor) => ({
      url: `${baseUrl}/${locale}${anchor}`,
      lastModified: new Date(),
      changeFrequency: anchor === "#projects" ? "weekly" : "monthly",
      priority: anchor === "" ? 1 : anchor === "#projects" ? 0.9 : 0.8,
    }))
  );
}
