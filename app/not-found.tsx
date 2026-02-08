import Link from "next/link";
import { subtitle, title } from "@/styles/primitives";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
      <h1 className={title({ size: "xl", weight: "bold" })}>404</h1>
      <p className={subtitle({ size: "lg" })}>Cette page n&apos;existe pas.</p>
      <Link
        className="px-6 py-3 rounded-full bg-secondary dark:bg-primary text-white font-medium hover:opacity-90 transition-opacity"
        href="/"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
