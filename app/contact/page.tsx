import type { Metadata } from "next";
import CTA from "@/components/common/CTA";
import { ContactForm } from "@/components/contact/ContactForm";
import { title } from "@/styles/primitives";

export const metadata: Metadata = {
  title: "Contact | Sandrine Alcazar — Conceptrice Développeuse Full-Stack",
  description:
    "Contactez Sandrine Alcazar, développeuse web full-stack, pour toute opportunité de collaboration ou question.",
  alternates: { canonical: "https://sandrinealcazar.ovh/contact" },
};

const Page = () => {
  return (
    <div className="h-full max-w-lg mx-auto flex flex-col mt-10  px-4 gap-16">
      <h1
        className={title({
          size: "sm",
          weight: "extrabold",
          class: "text-center",
        })}
      >
        À la recherche d’une collaboratrice motivée ? Parlons-en !
      </h1>
      <ContactForm />
      <CTA isContact={true} />
    </div>
  );
};

export default Page;
