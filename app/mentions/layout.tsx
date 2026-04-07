import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Sandrine Alcazar",
  description:
    "Mentions légales du portfolio de Sandrine Alcazar — hébergement, propriété intellectuelle et données personnelles.",
  alternates: { canonical: "https://sandrinealcazar.ovh/mentions" },
  robots: { index: false, follow: false },
};

export default function MentionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
