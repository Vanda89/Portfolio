"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import Link from "next/link";

import Button from "@/components/common/Button";
import { title, textBase } from "@/styles/primitives";
import cvData from "@/data/cv.json";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <Card className="p-6">
        <CardHeader className="pb-4 border-b border-foreground-300">
          <h1
            className={title({
              size: "lg",
              weight: "extrabold",
              class: "text-center w-full",
            })}
          >
            Mentions légales
          </h1>
        </CardHeader>
        <CardBody className="space-y-12 mt-6 ">
          <section className="flex flex-col space-y-1">
            <h2 className={title({ size: "sm", weight: "bold" })}>
              Éditeur du site
            </h2>
            <div className="flex flex-col sm:flex-row gap-2">
              <p>Ce site est édité par :</p>
              <p className="font-semibold">{cvData.name}</p>
            </div>
            <p>
              Contact :{" "}
              <Link
                className="text-primary underline underline-offset-4"
                href={cvData.contacts.email}
                rel="noopener noreferrer"
                target="_blank"
              >
                {cvData.contacts.email}
              </Link>{" "}
            </p>
          </section>

          <section className="flex flex-col space-y-1">
            <h2 className={title({ size: "sm", weight: "bold" })}>
              Hébergement
            </h2>
            <div className={textBase({ class: "space-y-1" })}>
              <p>Le site est hébergé par :</p>
              <p className="font-semibold">OVH</p>
              <p>2 rue Kellermann - 59100 Roubaix - France</p>
              <p>
                Site web :{" "}
                <Link
                  className="text-primary underline underline-offset-4"
                  href="https://ovh.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ovh.com{" "}
                </Link>{" "}
              </p>
            </div>
          </section>

          <section className="flex flex-col space-y-1">
            <h2 className={title({ size: "sm", weight: "bold" })}>
              Propriété intellectuelle
            </h2>
            <div className={textBase({ class: "space-y-2" })}>
              <p>
                Les contenus de ce site (textes, images, graphismes, logo) sont
                la propriété exclusive de{" "}
                <span className="font-semibold">{cvData.name}</span>, sauf
                mention contraire.
              </p>
              <p>
                Toute reproduction, modification ou diffusion sans autorisation
                est interdite.
              </p>
            </div>
          </section>

          <section className="flex flex-col space-y-1">
            <h2 className={title({ size: "sm", weight: "bold" })}>
              Données personnelles
            </h2>
            <div className={textBase({ class: "space-y-2" })}>
              <p>
                Ce site ne collecte aucune donnée personnelle. Le formulaire de
                contact utilise un simple lien{" "}
                <span className="font-semibold">mailto:</span> permettant
                d&apos;envoyer un email directement depuis votre messagerie.
              </p>
            </div>
          </section>

          <section className="flex flex-col space-y-1">
            <h2 className={title({ size: "sm", weight: "bold" })}>Cookies</h2>
            <div className={textBase({ class: "space-y-2" })}>
              <p>
                Ce site n&apos;utilise{" "}
                <span className="font-semibold">aucun cookie</span>.
              </p>
            </div>
          </section>

          <section className="flex flex-col space-y-1">
            <h2 className={title({ size: "sm", weight: "bold" })}>
              Responsabilité
            </h2>
            <div className={textBase({ class: "space-y-2" })}>
              <p>
                L&apos;éditeur du site ne saurait être tenu responsable des
                éventuels dommages liés à l&apos;utilisation du site ou des
                informations qui y sont publiées.
              </p>
            </div>
          </section>

          <div className="flex justify-center py-6">
            <Button
              as="a"
              className="font-medium"
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
