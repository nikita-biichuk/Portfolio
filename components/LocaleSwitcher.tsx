"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

const localeFlags: Record<(typeof routing.locales)[number], string> = {
  en: "🇺🇸",
  uk: "🇺🇦",
};

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="rounded-full border border-border bg-background/80 p-0.5 backdrop-blur-md shadow-[0px_2px_18px_rgba(0,0,0,0.18)] sm:p-1">
      <div className="flex items-center gap-1">
        {routing.locales.map((nextLocale) => {
          const isActive = nextLocale === locale;

          return (
            <button
              key={nextLocale}
              type="button"
              aria-label={t(`switchTo.${nextLocale}`)}
              disabled={isPending || isActive}
              onClick={() => {
                startTransition(() => {
                  router.replace(pathname, { locale: nextLocale });
                });
              }}
              className={`inline-flex min-w-[64px] items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors sm:min-w-[78px] sm:gap-2 sm:px-3 sm:py-2 sm:text-xs sm:tracking-[0.2em] ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              } ${isPending ? "cursor-wait" : ""}`}
            >
              <span aria-hidden className="text-[13px] leading-none sm:text-sm">
                {localeFlags[nextLocale]}
              </span>
              <span>{t(`label.${nextLocale}`)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
