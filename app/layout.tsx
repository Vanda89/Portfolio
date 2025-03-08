import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import Background from "@/components/common/background/Background";
import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import ScrollArrow from "@/components/common/ScrollArrow";
import { fontSans } from "@/config/fonts";

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
        className={`min-w-xs min-h-screen font-sans antialiased   mx-auto scroll-smooth ${fontSans.variable} `}
        cz-shortcut-listen="true"
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen w-full gap-10">
            <Navbar />
            <Background />

            <main className=" self-center  w-full  flex-grow ">{children}</main>
            <Footer />
            <ScrollArrow />
          </div>
        </Providers>
      </body>
    </html>
  );
}
