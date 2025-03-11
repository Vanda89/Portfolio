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
            className="text-secondary font-semibold hover:underline"
            href="/about"
          >
            compétences
          </Link>
          {" ? "}
          <Link
            className="text-secondary font-semibold hover:underline"
            href="/contact"
          >
            Contactez-moi
          </Link>{" "}
          pour collaborer.
        </>
      ) : isContact ? (
        <>
          Envie d&apos;en savoir{" "}
          <Link
            className="text-secondary font-semibold hover:underline"
            href="/about"
          >
            plus
          </Link>
          {" ?"}
          <br />
          Explorez mes{" "}
          <Link
            className="text-secondary font-semibold hover:underline"
            href="/"
          >
            projets
          </Link>{" "}
          ou utilisez le formulaire ci-dessus !
        </>
      ) : (
        <>
          Intéressé(e) par une collaboration ?{" "}
          <Link
            className="text-secondary font-semibold hover:underline"
            href="/contact"
          >
            Contactez-moi
          </Link>{" "}
          !
          <br />
          Retour sur la page d&apos;accueil{" "}
          <Link
            className="text-secondary font-semibold hover:underline"
            href="/"
          >
            ici
          </Link>
        </>
      )}
    </p>
  );
};

export default CTA;
