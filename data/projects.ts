import { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    id: 18,
    title: "Portfolio",
    date: "01/2025",
    technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    category: {
      technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    },
    description:
      "Ce portfolio présente mes projets et compétences en développement web. Réalisé avec Next.js, React, et TailwindCSS, il met en avant une interface moderne et responsive, avec un système de gestion de thèmes et une navigation fluide. L'objectif est de démontrer mon savoir-faire en matière de conception d'interface utilisateur et d'expérience utilisateur.",
    resume:
      "Mon portfolio rassemble mes projets réalisés avec Next.js, React, et TailwindCSS. Il reflète mon évolution en développement web moderne, en mettant l'accent sur des designs responsives et une gestion flexible des thèmes. Ce projet m'a permis de consolider mes compétences tout en explorant de nouvelles approches créatives.",

    url: "https://sandrinealcazar.ovh",
    image: "/images/projects_thumbnails/portfolio.png",
    github: "https://github.com/Vanda89/Portfolio",
  },

  {
    id: 17,
    title: "KidsBook Adventures",
    date: "10/2024",
    technologies: [
      "Next.js",
      "React",
      "TailwindCSS",
      "NextUI",
      "OpenAI",
      "TypeScript",
      "MongoDB",
    ],
    category: {
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "NextUI",
        "OpenAI",
        "TypeScript",
      ],
    },
    description:
      "KidsBook Adventures est une application web permettant de générer des histoires personnalisées pour enfants. Utilisant Next.js, React, TailwindCSS, et l'API OpenAI, elle offre une expérience interactive avec un système de gestion de thèmes colorés et un design kawaii engageant. L'objectif est de stimuler l'imagination des enfants tout en offrant une interface ludique et facile à utiliser.",
    resume:
      "Kids Book Adventures génère des histoires personnalisées pour enfants avec Next.js, React et OpenAI. L'application utilise un design kawaii, un système de thèmes colorés et une expérience utilisateur ludique.",
    url: "https://kidsbookadventures.sandrinealcazar.ovh",
    image: "/images/projects_thumbnails/kidsbook_adventures.png",
    github: "https://github.com/Vanda89/KidsBook_Adventures",
  },

  {
    id: 16,
    title: "Wealth Health",
    date: "10/2024",
    technologies: ["TailwindCSS", "React", "Redux"],
    category: {
      technologies: ["TailwindCSS", "React", "Redux"],
    },
    description:
      "WealthHealth est un projet réalisé dans le cadre d'un bootcamp pour moderniser une application interne de gestion des dossiers employés, appelée HRnet. L'objectif principal était de convertir l'application existante, développée avec jQuery, en une version utilisant React, tout en améliorant ses performances, son accessibilité, et son apparence. Ce projet a permis d’illustrer la transition d’une technologie obsolète vers une pile technologique moderne et performante, en répondant aux problématiques d’ergonomie et de stabilité rencontrées par les utilisateurs.",
    resume:
      "WealthHealth est un projet de modernisation d’une application interne de gestion des dossiers employés (HRnet). L'objectif était de convertir l'application de jQuery à React, tout en améliorant ses performances, son accessibilité et son design. Ce projet met en évidence la transition d’une technologie obsolète à une pile moderne et performante, tout en résolvant des problèmes d’ergonomie et de stabilité pour les utilisateurs.",
    url: "https://wealth-health.sandrinealcazar.ovh",
    image: "/images/projects_thumbnails/wealth-health.png",
    github: "https://github.com/Vanda89/WealthHealth",
  },

  {
    id: 15,
    title: "Argent Bank",
    date: "08/2024",
    technologies: [
      "TailwindCSS",
      "React",
      "Redux",
      "Swagger",
      "NodeJS",
      "MongoDB",
    ],
    category: {
      technologies: ["TailwindCSS", "React", "Redux", "NodeJS"],
    },
    description:
      "Argent Bank est une application bancaire en ligne développée pour répondre aux besoins d'une banque en pleine expansion. Ce projet avait pour objectif principal de permettre aux utilisateurs de gérer leurs comptes bancaires de manière sécurisée et efficace via une interface moderne et responsive. Les tâches réalisées incluaient la mise en place d'un système d'authentification pour que les utilisateurs puissent se connecter, se déconnecter et accéder uniquement à leurs données personnelles. La création d'une interface intuitive pour la gestion des profils et des comptes utilisateurs. La spécification des endpoints API nécessaires pour une éventuelle extension permettant la gestion des transactions (visualisation, modification et suppression).",
    resume:
      "ArgentBank est une application bancaire en ligne offrant une gestion sécurisée des comptes bancaires. Ce projet inclut l'authentification des utilisateurs, la gestion des profils et des comptes via une interface moderne et responsive. Il prépare également une extension API pour la gestion des transactions (visualisation, modification, suppression).",
    url: "https://argentbank.sandrinealcazar.ovh/",
    image: "/images/projects_thumbnails/argentbank.png",
    github: "https://github.com/Vanda89/ArgentBank",
  },

  {
    id: 14,
    title: "Sport See",
    date: "07/2024",
    technologies: ["React", "Recharts", "TailwindCSS", "NodeJS"],
    category: {
      technologies: ["React", "Recharts", "TailwindCSS", "NodeJS"],
    },
    description:
      "SportSee est une application web en React centrée sur un tableau de bord analytique interactif et visuellement attrayant. Ce projet a pour but d’améliorer la présentation des données sportives en utilisant des bibliothèques graphiques avancées et une API backend. une startup spécialisée dans le coaching sportif, souhaite améliorer l'expérience utilisateur en lançant une nouvelle version de la page de profil. Cette refonte permet aux utilisateurs de suivre leurs performances sportives à travers des indicateurs visuels tels que le nombre de sessions réalisées et les calories brûlées. ",
    resume:
      "SportSee est une application React dédiée à l’analyse des performances sportives. Elle utilise Recharts pour afficher des graphiques dynamiques des sessions d’entraînement et des calories brûlées. Le projet intègre Axios pour récupérer les données d'une API backend, et offre une interface utilisateur intuitive permettant aux utilisateurs de suivre leurs progrès via un tableau de bord interactif.",
    url: "https://sportsee.sandrinealcazar.ovh",
    image: "/images/projects_thumbnails/sportsee.png",
    github: "https://github.com/Vanda89/SportSee",
  },
  {
    id: 13,
    title: "Kasa",
    date: "06/2024",
    technologies: ["React", "React Router", "TailwindCSS"],
    category: {
      technologies: ["React", "TailwindCSS"],
    },
    description:
      "Kasa est une plateforme React dédiée à la location de logements entre particuliers. Ce projet a pour objectif de développer une interface utilisateur moderne, ergonomique et responsive, permettant aux utilisateurs de parcourir les annonces, consulter les informations détaillées des logements sur des pages dynamiques générées à partir des données de l'API, et interagir avec des fonctionnalités essentielles, telles que la gestion des galeries photo, des évaluations et des descriptions.",
    resume:
      "Kasa est une plateforme de location de logements développée en React. L'application utilise React Router pour une navigation fluide et dynamique. Elle récupère les données d'une API pour afficher les annonces, les galeries photo et les évaluations. L'interface est responsive, offrant une expérience optimale sur tous les appareils.",
    url: "https://kasa.sandrinealcazar.ovh",
    image: "/images/projects_thumbnails/kasa.png",
    github: "https://github.com/Vanda89/Kasa",
  },
  {
    id: 12,
    title: "Learn@home",
    date: "04/2024",
    technologies: ["Figma", "Notion", "Draw.io"],
    category: {
      technologies: [],
    },
    description:
      "Learn@Home est un projet visant à définir les besoins pour une plateforme de soutien scolaire. Ce projet a consisté à créer des maquettes sous Figma, des user stories, des diagrammes de cas d'usage et un tableau Kanban pour structurer le développement d'une application facilitant la mise en relation entre enfants en difficulté scolaire et tuteurs bénévoles. Les fonctionnalités principales incluent la gestion du chat, du calendrier, des tâches et du tableau de bord, avec des maquettes réalisées pour chaque page clé de l'application.",
    url: "https://www.figma.com/design/AjDV7imr4r4IGSE1fYwhEI/Learn%40home?node-id=0-1&m=dev&t=uA6sl25XH8Kfg5Nh-1",
    resume:
      "Learn@home est un projet de conception d’une plateforme de soutien scolaire. Le projet inclut des maquettes sur Figma, des user stories et des diagrammes de cas d’usage. L’objectif est de définir les besoins d'enfants en difficulté scolaire et des tuteurs bénévoles, avec des fonctionnalités comme le chat, le calendrier et le tableau de bord.",
    image: "/images/projects_thumbnails/learn@home.png",
    github: "https://github.com/Vanda89/Learn-home",
  },
  {
    id: 11,
    title: "Billed",
    date: "03/2024",
    technologies: ["JavaScript", "Chrome Debugger", "Notion", "NodeJS"],
    category: {
      technologies: ["JavaScript", "NodeJS"],
    },
    description:
      "Billed est une mission de renfort sur la fonctionnalité \"Note de frais\" au sein d'une entreprise SaaS pour les équipes RH. Mon rôle était de tester et de débugger le parcours Employé en suivant un plan de tests End-to-End, de corriger les bugs identifiés dans le Kanban, et de finaliser les tests pour garantir la fiabilité du système. J'ai également assisté à la correction des bugs du parcours Administrateur RH pour assurer la stabilité de la fonctionnalité avant la présentation de la solution à l'entreprise.",
    resume:
      "Billed est un projet de formation axé sur la fonctionnalité Note de frais au sein d'une entreprise SaaS. Le projet a consisté à tester et déboguer le parcours Employé en suivant un plan de tests End-to-End, corriger les bugs dans le Kanban, et valider la fiabilité du système. Une participation a également eu lieu dans la correction des bugs du parcours Administrateur RH pour garantir la stabilité avant la présentation de la solution.",
    url: "https://billed.sandrinealcazar.ovh/",
    image: "/images/projects_thumbnails/billed.png",
    github: "https://github.com/Vanda89/BilledApp",
  },

  {
    id: 10,
    title: "Les petits plats",
    date: "02/2024",
    technologies: ["JavaScript", "TailwindCSS"],
    category: {
      technologies: ["JavaScript", "TailwindCSS"],
    },
    description:
      "Les Petits Plats est une application web permettant aux utilisateurs de rechercher des recettes de manière rapide et intuitive grâce à des filtres dynamiques (ingrédients, appareils, ustensiles) et un champ de recherche optimisé. Ce projet, développé entièrement en JavaScript pur, se concentre sur la création d'algorithmes performants pour gérer efficacement les recherches (filtrage avancé, gestion des tags et des mots-clés) et offrir une expérience fluide, même avec une base de données importante.",
    resume:
      "Les Petits Plats est une application web permettant de rechercher des recettes grâce à des filtres dynamiques (ingrédients, appareils, ustensiles) et un champ de recherche optimisé. Développée en JavaScript pur avec HTML/CSS et CSS, l'application gère efficacement les recherches et le filtrage avancé pour offrir une expérience fluide même avec une base de données importante.",
    url: "https://lespetitsplats.sandrinealcazar.ovh",
    image: "/images/projects_thumbnails/lespetitsplats.png",
    github: "https://github.com/Vanda89/Lespetitsplats",
  },

  {
    id: 9,
    title: "FishEye",
    date: "01/2024",
    technologies: ["HTML/CSS", "JavaScript"],
    category: {
      technologies: ["HTML/CSS", "JavaScript"],
    },
    description:
      "FishEye est une plateforme dédiée à la photographie, permettant aux utilisateurs d'explorer les portfolios de photographes professionnels. Le projet met l'accent sur l'accessibilité et propose des fonctionnalités telles qu'un tri des médias par popularité, date ou titre, une visionneuse interactive pour naviguer dans les galeries, et un formulaire de contact fonctionnel. Développé avec HTML/CSS, CSS et JavaScript, FishEye offre une expérience utilisateur fluide et accessible à tous.",
    resume:
      "FishEye est une plateforme dédiée à la photographie, permettant aux utilisateurs d'explorer les portfolios de photographes professionnels. Le projet offre un tri des médias par popularité, date ou titre, une visionneuse interactive des galeries et un formulaire de contact. Développé avec HTML/CSS, CSS et JavaScript, FishEye propose une expérience utilisateur fluide et accessible.",
    url: "https://fisheye.sandrinealcazar.ovh",
    image: "/images/projects_thumbnails/fisheye.png",
    github: "https://github.com/Vanda89/Fisheye",
  },
  {
    id: 8,
    title: "GameOn",
    date: "11/2023",
    technologies: ["HTML/CSS", "JavaScript"],
    category: {
      technologies: ["HTML/CSS", "JavaScript"],
    },
    description:
      "GameOn est une plateforme dédiée à la gestion des inscriptions pour des tournois de jeux vidéo. Ce projet a consisté à finaliser et optimiser un formulaire d'inscription déjà partiellement développé par un ancien employé. Les tâches réalisées incluent l'implémentation de fonctionnalités JavaScript manquantes, l'analyse et l'amélioration du code existant, ainsi que la validation des entrées utilisateur. Le projet a également impliqué des tests manuels pour garantir une compatibilité responsive et une documentation détaillée par des commentaires pour faciliter la compréhension et la maintenance du code. ",
    resume:
      "GameOn est une plateforme de gestion des inscriptions pour des tournois de jeux vidéo. Le projet a consisté à optimiser et finaliser un formulaire d'inscription en ajoutant des fonctionnalités JavaScript manquantes, améliorant le code existant, validant les entrées utilisateur, et assurant la compatibilité responsive. Des tests manuels ont été réalisés pour garantir la stabilité et une documentation détaillée a été fournie.",
    url: "https://gameon.sandrinealcazar.ovh",
    image: "/images/projects_thumbnails/gameon.png",
    github: "https://github.com/Vanda89/GameOn",
  },
  {
    id: 7,
    title: "OhmyFood",
    date: "10/2023",
    technologies: ["SCSS"],
    category: {
      technologies: ["SCSS"],
    },
    description:
      "OhMyFood est une application web statique mettant en avant des menus de restaurants gastronomiques. Le projet avait pour objectif de développer une interface utilisateur responsive et interactive, mettant l'accent sur une expérience visuelle moderne. Il a impliqué la création de pages statiques présentant les menus, avec des animations CSS personnalisées pour améliorer l'engagement utilisateur.",
    resume:
      "OhMyFood est une application web statique présentant des menus de restaurants gastronomiques. Le projet a visé à créer une interface moderne et responsive avec des animations CSS pour une expérience utilisateur engageante. Il a impliqué la conception de pages statiques présentant les menus de manière interactive.",
    url: "https://ohmyfood.sandrinealcazar.ovh",
    image: "/images/projects_thumbnails/ohmyfood.png",
    github: "https://github.com/Vanda89/ohmyfood",
  },

  {
    id: 6,
    title: "Booki",
    date: "09/2023",
    technologies: ["HTML/CSS"],
    category: {
      technologies: ["HTML/CSS"],
    },
    description:
      "Booki est un projet de site web statique visant à permettre aux utilisateurs de rechercher des hébergements et des activités touristiques selon leur destination. Le projet avait pour objectif de concevoir une interface moderne, responsive et accessible, avec une mise en page soignée conforme aux maquettes fournies.",
    resume:
      "Booki est un projet de site web statique visant à permettre aux utilisateurs de rechercher des hébergements et des activités touristiques selon leur destination. Le projet avait pour objectif de concevoir une interface moderne, responsive et accessible, avec une mise en page soignée conforme aux maquettes fournies.",
    url: "https://booki.sandrinealcazar.ovh",
    image: "/images/projects_thumbnails/booki.png",
    github: "https://github.com/Vanda89/Booki",
  },
  {
    id: 5,
    title: "L'univers Fabuleux",
    date: "08/2018",
    technologies: [
      "HTML/CSS",
      "JavaScript",
      "PHP",
      "Bootstrap",
      "jquery",
      "MySQL",
    ],
    category: {
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "PHP",
        "Bootstrap",
        "jquery",
        "MySQL",
      ],
    },
    description:
      "L'univers Fabuleux est un site de jeux pour enfants en mobile first avec espace personnel personnalisable. L'objectif étant d'utiliser toutes les technologies et connaissances abordées pendant la formation afin de créer un site web réactif et cohérent graphiquement.",
    resume:
      "L'univers Fabuleux est un site de jeux mobile-first pour enfants, offrant un espace personnel personnalisable. Il inclut des jeux interactifs, tels qu'un jeu de Memory et un jeu de Tape lettre au clavier, conçus pour aider les enfants à développer leur mémoire et leur rapidité. Le projet comprend également une interface admin permettant d'ajouter, modifier et supprimer des éléments du site de manière dynamique.",
    url: "https://univers-fabuleux.sandrinealcazar.ovh",
    image: "/images/projects_thumbnails/univers-fabuleux.png",
    github: "https://github.com/Vanda89/Univers_Fabuleux",
  },
  {
    id: 4,
    title: "Jean Forteroche",
    date: "06/2018",
    technologies: ["HTML/CSS", "PHP", "MySQL"],
    category: {
      technologies: ["HTML/CSS", "PHP", "MySQL"],
    },
    description:
      "Développement d'un blog pour un écrivain avec intégration d'un système de CRUD pour la partie admin, afin qu'il puisse gérer ses articles ; et pour la partie user, afin que les utilisateurs puissent commenter les publications. Il dispose d'une structure MVC et d'une base de donnée MySQL.",
    resume:
      "Le site de Jean Forteroche est un blog développé pour un écrivain, avec un système de CRUD pour l'admin afin de gérer les articles, et une fonctionnalité de commentaires pour les utilisateurs. Ce projet utilise une architecture MVC avec une base de données MySQL pour stocker les articles et commentaires. Il dispose d'une gestion efficace du contenu tout en offrant une expérience utilisateur simple et intuitive.",
    url: "https://blog-jean-forteroche.sandrinealcazar.ovh",
    image: "/images/projects_thumbnails/blog-jean-forteroche.png",
    github: "https://github.com/Vanda89/Blog_jean_forteroche",
  },
  {
    id: 3,
    title: "Velo'v Me Lyon",
    date: "05/2018",
    technologies: ["HTML/CSS", "JavaScript", "jquery"],
    category: {
      technologies: ["HTML/CSS", "JavaScript", "jquery"],
    },
    description:
      "Velo'v Me Lyon est une simulation d'application web responsive qui permet aux utilisateurs de localiser et de réserver des vélos à Lyon. L'objectif est de fournir une interface claire et intuitive, permettant de trouver rapidement les stations les plus proches, de consulter la disponibilité des vélos et des emplacements, et d'effectuer une réservation en quelques clics. Ce projet a été conçu à des fins d'apprentissage du JavaScript",
    resume:
      "Velo'v Me Lyon est une simulation d'application web responsive qui permet aux utilisateurs de localiser et de réserver des vélos à Lyon. L'objectif est de fournir une interface claire et intuitive, permettant de trouver rapidement les stations les plus proches, de consulter la disponibilité des vélos et des emplacements, et d'effectuer une réservation en quelques clics. Ce projet a été conçu à des fins d'apprentissage du JavaScript",
    url: "https://velovme-lyon.sandrinealcazar.ovh/",
    image: "/images/projects_thumbnails/velovme.png",
    github: "https://github.com/Vanda89/Velo-v-me-Lyon",
  },
  {
    id: 2,
    title: "Strasbourg",
    date: "04/2018",
    technologies: ["Wordpress"],
    category: {
      technologies: ["Wordpress"],
    },
    description:
      "Strasbourg est une version Wordpress fonctionnelle du site internet de l'Office de Tourisme de Strasbourg. Le but est de mettre en avant les atouts touristiques de la ville avec une navigation intuitive et un design attractif.",
    resume:
      "Strasbourg est une application WordPress fonctionnelle créée pour simuler un site de l'Office de Tourisme de Strasbourg. Le projet visait à concevoir un site mettant en avant les attraits touristiques de la ville, tout en respectant un cahier des charges précis. L'objectif était de créer une interface claire et intuitive, avec un design attractif, tout en personnalisant le thème WordPress choisi. ",
    url: "https://strasbourg.sandrinealcazar.ovh",
    image: "/images/projects_thumbnails/strasbourg.png",
    github: "https://github.com/Vanda89/Strasbourg",
  },
  {
    id: 1,
    title: "Webagency",
    date: "03/20",
    technologies: ["HTML/CSS"],
    category: {
      technologies: ["HTML/CSS"],
    },
    description:
      "Création d'une maquette fonctionnelle pour un site d'agence web en utilisant uniquement de l'HTML/CSS et du CSS, tout en respectant les bonnes pratiques de responsive design et d'accessibilité.",
    resume:
      "Webagency est une maquette fonctionnelle d'un site pour une agence web, développée uniquement en HTML/CSS et CSS. Le projet met l'accent sur l'application des bonnes pratiques de responsive design et d'accessibilité pour offrir une expérience utilisateur optimale sur tous les appareils.",
    url: "https://webagency.sandrinealcazar.ovh",
    image: "/images/projects_thumbnails/webagency.png",
    github: "https://github.com/Vanda89/Webagency",
  },
];
