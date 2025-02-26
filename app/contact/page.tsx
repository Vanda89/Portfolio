import React from "react";

import { ContactForm } from "@/components/contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="h-full max-w-lg mx-auto flex flex-col justify-center px-4 gap-24">
      <h1 className="font-bold text-center">
        À la recherche d&apos;’un collaboratrice motivée et passionée ?
        Parlons-en !
      </h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
