import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

const description = "Nikita Biichuk - Full Stack Web Developer from Ukraine. Specialized in React, Next.js, TypeScript, Node.js, MongoDB, and modern web technologies. View my portfolio, projects, and experience."
const siteUrl = "https://nikita-biichuks-portfolio.vercel.app"

export const metadata: Metadata = {
  title: {
    default: "Nikita Biichuk - Full Stack Web Developer Portfolio",
    template: "%s | Nikita Biichuk"
  },
  description,
  keywords: [
    "Nikita Biichuk",
    "Nikita Biichuk Portfolio",
  ],
  authors: [{ name: "Nikita Biichuk" }],
  creator: "Nikita Biichuk",
  publisher: "Nikita Biichuk",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/images/profile/avatar.jpg",
    apple: "/assets/images/profile/avatar.jpg",
  },
  openGraph: {
    title: "Nikita Biichuk - Full Stack Web Developer Portfolio",
    description,
    url: siteUrl,
    siteName: "Nikita Biichuk's Portfolio",
    images: [
      {
        url: "/assets/images/profile/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Nikita Biichuk - Full Stack Web Developer",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@nikitabiichuk",
    creator: "@nikitabiichuk",
    title: "Nikita Biichuk - Full Stack Web Developer",
    description,
    images: ["/assets/images/profile/avatar.jpg"],
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
