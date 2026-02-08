import Link from "next/link";

interface CTAProps {
  isHome?: boolean;
  isContact?: boolean;
}

const CTA = ({ isHome = false, isContact = false }: CTAProps) => {
  const renderLinks = (links: { href: string; label: string }[]) => {
    return links.map((link) => (
      <Link
        className="text-secondary dark:text-primary-500 font-semibold hover:underline"
        href={link.href}
        key={link.href}
      >
        {link.label}
      </Link>
    ));
  };

  return (
    <p className="pt-6 text-foreground-500 text-center leading-loose">
      {isHome ? (
        <>
          Intéressé(e) par mes{" "}
          {renderLinks([
            { href: "/about", label: "compétences. " },
            { href: "/contact", label: "Contactez-moi" },
          ])}{" "}
          pour collaborer.
        </>
      ) : isContact ? (
        <>
          Envie d&apos;en savoir {renderLinks([{ href: "/about", label: "plus" }])} ?
          <br />
          Explorez mes {renderLinks([{ href: "/", label: "projets" }])} ou utilisez le formulaire
          ci-dessus !
        </>
      ) : (
        <>
          Intéressé(e) par une collaboration ?{" "}
          {renderLinks([{ href: "/contact", label: "Contactez-moi sans attendre" }])} !
          <br />
          Retour sur la page d&apos;accueil {renderLinks([{ href: "/", label: "ici" }])}.
        </>
      )}
    </p>
  );
};

export default CTA;
