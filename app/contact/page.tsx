import React from "react";

import { title } from "@/styles/primitives";
import { ContactForm } from "@/components/contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="h-full max-w-lg mx-auto flex flex-col justify-center py-10 px-4 gap-24">
      <h1
        className={title({
          size: "sm",
          weight: "extrabold",
          class: "text-center",
        })}
      >
        À la recherche d&apos;un collaboratrice motivée et passionée ?
        Parlons-en !
      </h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
