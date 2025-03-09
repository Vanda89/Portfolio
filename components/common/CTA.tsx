import React from "react";
import Link from "next/link";

interface CTAProps {
  isHome?: boolean;
  isContact?: boolean;
}

const CTA = ({ isHome = false, isContact = false }: CTAProps) => {
  return (
    <p className="pt-6 text-gray-500 text-center leading-loose ">
      {isHome ? (
        <>
          Intéressé(e) par mes{" "}
          <Link
            href="/about"
            className="text-secondary font-semibold hover:underline"
          >
            compétences
          </Link>
          {" ? "}
          <Link
            href="/contact"
            className="text-secondary font-semibold hover:underline"
          >
            Contactez-moi
          </Link>{" "}
          pour collaborer.
        </>
      ) : isContact ? (
        <>
          Envie d&apos;en savoir{" "}
          <Link
            href="/about"
            className="text-secondary font-semibold hover:underline"
          >
            plus
          </Link>
          {" ?"}
          <br />
          Explorez mes{" "}
          <Link
            href="/"
            className="text-secondary font-semibold hover:underline"
          >
            projets
          </Link>{" "}
          ou utilisez le formulaire ci-dessus !
        </>
      ) : (
        <>
          Intéressé(e) par une collaboration ?{" "}
          <Link
            href="/contact"
            className="text-secondary font-semibold hover:underline"
          >
            Contactez-moi
          </Link>{" "}
          !
          <br />
          Retour sur la page d&apos;accueil{" "}
          <Link
            href="/"
            className="text-secondary font-semibold hover:underline"
          >
            ici
          </Link>
        </>
      )}
    </p>
  );
};

export default CTA;
