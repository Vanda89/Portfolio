"use client";
import { Form, Input, Textarea, tv } from "@heroui/react";
import log from "loglevel";
import React from "react";
import cvData from "@/data/cv.json";
import Button from "../common/Button";

export const formVariants = tv({
  slots: {
    form: "flex flex-col items-center justify-center gap-8",
    input: "  placeholder:text-gray-500 dark:placeholder:text-gray-300",
    inputWrapper:
      "shadow-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg mb-1",
    label: "!text-secondary dark:!text-primary-600 text-sm md:text-medium",
    textarea: "font-semibold",
    button: "mt-8 shadow-lg text-white bg-violet-600 dark:bg-primary-400",
    errorMessage: "text-red-700 dark:text-red-500",
  },
});

export const ContactForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [globalError, setGlobalError] = React.useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setGlobalError(null);
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setIsLoading(false);

      return;
    }

    const formData = Object.fromEntries(new FormData(form));

    const username = formData.username as string;
    const email = formData.email as string;
    const subject = formData.subject as string;
    const message = formData.message as string;

    const mailtoLink = `mailto:${cvData.contacts.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(
      `Bonjour,

Je vous contacte concernant ${subject}.

Voici mes coordonnées :
**Nom / Société** : ${username}
**Email** : ${email}

**Message :**
${message}

${username}`,
    )}`;

    try {
      window.location.href = mailtoLink;
    } catch (err) {
      log.error("Error sending email", err);
      setGlobalError("Une erreur s'est produite. Vérifiez votre client email.");
      setIsLoading(false);
    }
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
        aria-label="Votre nom ou le nom de votre entreprise"
        aria-required="true"
        classNames={{
          input: formVariants.slots.input,
          inputWrapper: formVariants.slots.inputWrapper,
          label: formVariants.slots.label,
          errorMessage: formVariants.slots.errorMessage,
        }}
        isDisabled={isLoading}
        label="Nom/Société"
        labelPlacement="outside"
        name="username"
        placeholder="Entrez votre nom ou le nom de votre entreprise"
        validate={(value) => {
          if (!value) return "Veuillez entrer votre nom.";
          if (value.length < 3) return "Au moins 3 caractères requis.";

          return value === "admin" ? "Nice try!" : null;
        }}
        variant="faded"
      />

      <Input
        isRequired
        aria-label="Adresse e-mail"
        aria-required="true"
        classNames={{
          input: formVariants.slots.input,
          inputWrapper: formVariants.slots.inputWrapper,
          label: formVariants.slots.label,
          errorMessage: formVariants.slots.errorMessage,
        }}
        isDisabled={isLoading}
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Entrez votre email"
        type="email"
        validate={(value) =>
          !value || !value.includes("@") ? "Votre adresse mail est invalide." : null
        }
        variant="faded"
      />

      <Input
        isRequired
        aria-label="Sujet de votre message"
        aria-required="true"
        classNames={{
          input: formVariants.slots.input,
          inputWrapper: formVariants.slots.inputWrapper,
          label: formVariants.slots.label,
          errorMessage: formVariants.slots.errorMessage,
        }}
        isDisabled={isLoading}
        label="Sujet"
        labelPlacement="outside"
        name="subject"
        placeholder="Sujet de votre message"
        validate={(value) => (!value ? "Veuillez entrer le sujet de votre message." : null)}
        variant="faded"
      />

      <Textarea
        isRequired
        aria-label="Entrez votre message ici"
        aria-required="true"
        classNames={{
          input: formVariants.slots.input,
          inputWrapper: formVariants.slots.inputWrapper,
          label: formVariants.slots.label,
          errorMessage: formVariants.slots.errorMessage,
        }}
        isDisabled={isLoading}
        label="Message"
        labelPlacement="outside"
        name="message"
        placeholder="Votre message ici..."
        validate={(value) =>
          !value || value.length < 10 ? "Votre message doit contenir au moins 10 caractères." : null
        }
        variant="faded"
      />

      {globalError && <p className={formVariants.slots.errorMessage}>{globalError}</p>}

      <Button
        aria-label="Envoyer le message"
        className={formVariants.slots.button}
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
