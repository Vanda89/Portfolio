"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import Link from "next/link";

import Button from "@/components/common/Button";
import cvData from "@/data/cv.json";
import { textBase, title } from "@/styles/primitives";

interface Contact {
  email: string;
  linkedin: string;
  github: string;
}

export default function Page() {
  const contacts: Contact = cvData.contacts;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <Card className="p-6 shadow-md bg-white dark:bg-gray-800">
        <CardHeader className="pb-4 border-b border-gray-300 dark:border-gray-700">
          <h1
            className={title({
              size: "lg",
              weight: "extrabold",
              class: "text-center w-full text-gray-900 dark:text-gray-100",
            })}
          >
            Mentions légales
          </h1>
        </CardHeader>
        <CardBody className="space-y-12 mt-6 text-gray-800 dark:text-gray-200">
          <section aria-labelledby="editor-section">
            <h2 className={title({ size: "sm", weight: "bold" })} id="editor-section">
              Éditeur du site
            </h2>
            <div className="flex flex-col sm:flex-row gap-2">
              <p>Ce site est édité par :</p>
              <p className="font-semibold">{cvData.name}</p>
            </div>
            <p>
              Contact :{" "}
              <Link
                className="text-primary-500 dark:text-primary-600 underline underline-offset-4 hover:text-primary-600 dark:hover:text-primary-700 transition-colors"
                href={`mailto:${contacts.email}`}
                rel="noopener noreferrer"
              >
                {contacts.email}
              </Link>
            </p>
          </section>

          <section aria-labelledby="hosting-section">
            <h2 className={title({ size: "sm", weight: "bold" })} id="hosting-section">
              Hébergement
            </h2>
            <div className={textBase({ class: "space-y-1" })}>
              <p>Le site est hébergé par :</p>
              <p className="font-semibold">OVH</p>
              <p>2 rue Kellermann - 59100 Roubaix - France</p>
              <p>
                Site web :{" "}
                <Link
                  className="text-primary-500 dark:text-primary-600 underline underline-offset-4 hover:text-primary-600 dark:hover:text-primary-700 transition-colors"
                  href="https://ovh.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ovh.com
                </Link>
              </p>
            </div>
          </section>

          <section aria-labelledby="intellectual-section">
            <h2 className={title({ size: "sm", weight: "bold" })} id="intellectual-section">
              Propriété intellectuelle
            </h2>
            <div className={textBase({ class: "space-y-2" })}>
              <p>
                Les contenus de ce site (textes, images, graphismes, logo) sont la propriété
                exclusive de <span className="font-semibold">{cvData.name}</span>, sauf mention
                contraire.
              </p>
              <p>Toute reproduction, modification ou diffusion sans autorisation est interdite.</p>
            </div>
          </section>

          <section aria-labelledby="data-section">
            <h2 className={title({ size: "sm", weight: "bold" })} id="data-section">
              Données personnelles
            </h2>
            <div className={textBase({ class: "space-y-2" })}>
              <p>
                Ce site ne collecte aucune donnée personnelle. Le formulaire de contact utilise un
                simple lien <span className="font-semibold">mailto:</span> permettant d&apos;envoyer
                un email directement depuis votre messagerie.
              </p>
            </div>
          </section>

          <section aria-labelledby="cookies-section">
            <h2 className={title({ size: "sm", weight: "bold" })} id="cookies-section">
              Cookies
            </h2>
            <div className={textBase({ class: "space-y-2" })}>
              <p>
                Ce site n&apos;utilise <span className="font-semibold">aucun cookie</span>.
              </p>
            </div>
          </section>

          <section aria-labelledby="liability-section">
            <h2 className={title({ size: "sm", weight: "bold" })} id="liability-section">
              Responsabilité
            </h2>
            <div className={textBase({ class: "space-y-2" })}>
              <p>
                L&apos;éditeur du site ne saurait être tenu responsable des éventuels dommages liés
                à l&apos;utilisation du site ou des informations qui y sont publiées.
              </p>
            </div>
          </section>

          <div className="flex justify-center py-6">
            <Button
              as="a"
              className="font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
              color="secondary"
              href="/"
              variant="ghost"
            >
              Retour à l&apos;accueil
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
