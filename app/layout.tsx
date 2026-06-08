import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Toaster } from "@/components/ui/sonner";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";

export const metadata: Metadata = {
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
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale ?? routing.defaultLocale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollProgressBar />
          <Toaster />
          <CustomCursor />
          <GrainOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
