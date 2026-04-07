import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import Background from "@/components/common/background/Background";
import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import ScrollArrow from "@/components/common/ScrollArrow";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Sandrine Alcazar | Conceptrice Développeuse Full-Stack Portfolio",
  description:
    "Portfolio de Sandrine ALCAZAR, développeuse web full-stack. Découvrez mes projets React, Next.js, Spring Boot et sites web interactifs modernes.",
  keywords: [
    "Sandrine Alcazar",
    "développeuse web",
    "développeuse full-stack",
    "développeuse front-end",
    "portfolio développeur",
    "React",
    "Next.js",
    "Spring Boot",
    "TypeScript",
    "création site web",
    "web design",
    "développement web",
    "UI/UX",
    "Three.js",
    "Montpellier",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: "Sandrine ALCAZAR",
      url: "https://www.linkedin.com/in/alcazar-sandrine/",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  // Métadata Open Graph (to share on Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Sandrine Alcazar | Conceptrice Développeuse Full-Stack",
    description:
      "Découvrez mes projets de développement web full-stack en React, Next.js, Spring Boot et autres technologies sur mon portfolio.",
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
    title: "Sandrine Alcazar | Conceptrice Développeuse Full-Stack",
    description:
      "Découvrez mes projets de développement web full-stack en React, Next.js, Spring Boot et autres technologies sur mon portfolio.",
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
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sandrine Alcazar",
  url: "https://sandrinealcazar.ovh",
  jobTitle: "Conceptrice Développeuse d'Applications Full-Stack",
  sameAs: ["https://www.linkedin.com/in/alcazar-sandrine/", "https://github.com/Vanda89"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="fr">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
      </head>
      <body
        suppressHydrationWarning
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
