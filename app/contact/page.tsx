import React from "react";
import Link from "next/link";
import { title } from "@/styles/primitives";
import { ContactForm } from "@/components/contact/ContactForm";
import CTA from "@/components/common/CTA";

const Page = () => {
  return (
    <div className="h-full max-w-lg mx-auto flex flex-col mt-10  px-4 gap-12">
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
