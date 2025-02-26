"use client";
import React from "react";
import { Button, Form, Input, Textarea, tv } from "@heroui/react";

import cvData from "@/data/cv.json";

export const formVariants = tv({
  slots: {
    form: "flex flex-col items-center justify-center gap-4",
    input: " h-[64px] mt-20 font-semibold  ",
    inputWrapper: "shadow-lg dark:shadow-cardShadowDark",
    label: "!text-secondary",
    textarea: "font-semibold",
    button: "mt-8 shadow-lg",
    message: "",
  },
  variants: {
    size: {
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export const ContactForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = Object.fromEntries(new FormData(event.currentTarget));

    const mailtoLink = `${cvData.contacts.mail}?subject=${encodeURIComponent(
      formData.subject as string,
    )}&body=${encodeURIComponent(
      `Bonjour,
    
    Je vous contacte concernant ${formData.subject}. 
    
    Voici mes coordonnées :
    **Nom / Société** : ${formData.username}
    **Email** : ${formData.email}
    
    **Message :**
    ${formData.message}
    
    ${formData.username}`,
    )}`;

    window.location.href = mailtoLink;
    setIsLoading(false);
  };

  return (
    <Form
      aria-label="Formulaire de contact"
      className={formVariants.slots.form}
      validationBehavior="native"
      onSubmit={handleSubmit}
    >
      <Input
        isRequired
        aria-invalid="false"
        aria-label="Votre nom ou le nom de votre entreprise"
        aria-required="true"
        className={formVariants.slots.input}
        classNames={{
          inputWrapper: formVariants.slots.inputWrapper,
          label: formVariants.slots.label,
        }}
        isDisabled={isLoading}
        label="Nom/Société"
        labelPlacement="outside"
        name="username"
        placeholder="Entrez votre nom ou le nom de votre entreprise"
        validate={(value) => {
          if (!value)
            return "Veuillez entrer votre nom ou le nom de votre entreprise.";
          if (value.length < 3) return "Veuillez entrer au moins 3 caractères.";

          return value === "admin" ? "Nice try!" : null;
        }}
        variant="faded"
      />

      <Input
        isRequired
        aria-label="Adresse e-mail"
        aria-required="true"
        className={formVariants.slots.input}
        classNames={{
          inputWrapper: formVariants.slots.inputWrapper,
          label: formVariants.slots.label,
        }}
        isDisabled={isLoading}
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Entrez votre email"
        type="email"
        validate={(value) =>
          value.includes("@") ? null : "Adresse e-mail invalide."
        }
        variant="faded"
      />

      <Input
        isRequired
        aria-label="Sujet de votre message"
        aria-required="true"
        className={formVariants.slots.input}
        classNames={{
          inputWrapper: formVariants.slots.inputWrapper,
          label: formVariants.slots.label,
        }}
        isDisabled={isLoading}
        label="Sujet"
        labelPlacement="outside"
        name="subject"
        placeholder="Sujet de votre message"
        validate={(value) =>
          value.length < 3
            ? "Le sujet doit contenir au moins 3 caractères."
            : null
        }
        variant="faded"
      />

      <Textarea
        isRequired
        aria-label="Entre votre message ici"
        aria-required="true"
        className={formVariants.slots.textarea}
        classNames={{
          inputWrapper: formVariants.slots.inputWrapper,
          label: formVariants.slots.label,
        }}
        isDisabled={isLoading}
        label="Message"
        labelPlacement="outside"
        name="message"
        placeholder="Votre message ici..."
        validate={(value) =>
          value.length < 10
            ? "Le message doit contenir au moins 10 caractères."
            : null
        }
        variant="faded"
      />

      <Button
        aria-label="Envoyer le message"
        className={formVariants.slots.button}
        color="secondary"
        isDisabled={isLoading}
        isLoading={isLoading}
        type="submit"
        variant="shadow"
      >
        Envoyer
      </Button>
    </Form>
  );
};
