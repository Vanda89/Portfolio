import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import Background from "@/components/common/background/Background";
import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import ScrollArrow from "@/components/common/ScrollArrow";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Sandrine Alcazar | Développeuse Front-End Portfolio",
  description:
    "Portfolio de Sandrine ALCAZAR, développeuse front-end passionnée. Découvrez mes projets React, Next.js et sites web interactifs modernes.",
  keywords: [
    "Sandrine Alcazar",
    "développeuse front-end",
    "portfolio développeur",
    "React",
    "Next.js",
    "création site web",
    "web design",
    "développement web",
    "UI/UX",
    "Three.js",
  ],
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    noarchive: true,
  },
  authors: [
    {
      name: "Sandrine ALCAZAR",
      url: "https://www.linkedin.com/in/alcazar-sandrine/",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  // Métadata Open Graph (to share on Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Sandrine Alcazar | Développeuse Front-End",
    description:
      "Découvrez mes projets de développement front-end en React, Next.js et autres technologies sur mon portfolio.",
    url: "https://sandrinealcazar.ovh",
    siteName: "Portfolio Sandrine Alcazar",
    images: [
      {
        url: "https://sandrinealcazar.ovh/images/portfolio_thumbnail.webp",
        width: 1200,
        height: 630,
        alt: "Sandrine Alcazar - Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandrine Alcazar | Développeuse Front-End",
    description:
      "Découvrez mes projets de développement front-end en React, Next.js et autres technologies sur mon portfolio.",
    images: "https://sandrinealcazar.ovh/images/portfolio_thumbnail.webp",
  },

  alternates: {
    canonical: "https://sandrinealcazar.ovh",
  },
  category: "Portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
        className={`min-w-xs min-h-screen font-sans antialiased mx-auto scroll-smooth ${fontSans.variable} `}
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
