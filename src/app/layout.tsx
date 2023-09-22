import ProviderRedux from "@/redux/provider";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import { fontMono, fontSans } from "@/lib/fonts";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { env } from "@/env.mjs";
import AuthProvider from "@/lib/sessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "E-commerce",
    "Business",
    "Online Business",
    "Amazon",
    "Flipkart",
  ],
  authors: [
    {
      name: "bharat",
      url: "https://github.com/bharat5604",
    },
  ],
  creator: "bharat",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@bharat5604",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthProvider>
        <ProviderRedux>
          <html lang="en" suppressHydrationWarning>
            <head />
            <body
              className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable,
                fontMono.variable
              )}
            >
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                {children}
                <TailwindIndicator />
              </ThemeProvider>
              <Toaster />
            </body>
          </html>
        </ProviderRedux>
      </AuthProvider>
    </>
  );
}
