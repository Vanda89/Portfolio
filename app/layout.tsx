import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollArrow from "@/components/home/ScrollArrow";

export const metadata: Metadata = {
  title: "Portfolio de Sandrine ALCAZAR - Développeuse Front-end",
  description:
    "Découvrez le portfolio de Sandrine ALCAZAR, développeuse front-end passionnée par la création de sites web modernes et interactifs.",
  keywords:
    "développeur front-end, portfolio, création de sites web, développement React, développement Next.js",
  robots: "index, follow",
  authors: [{ name: "Sandrine ALCAZAR", url: "" }],
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fr">
      <head />
      <body
        className={`min-w-xs min-h-screen bg-background font-sans antialiased   mx-auto scroll-smooth ${fontSans.variable}`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen w-full">
            <Navbar />
            <main className=" self-center pt-8 w-full  flex-grow ">
              {children}
            </main>
            <Footer />
            <ScrollArrow />
          </div>
        </Providers>
      </body>
    </html>
  );
}
