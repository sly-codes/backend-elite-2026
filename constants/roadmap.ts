/**
 * Guided Learning Path - Elite Java Backend 2026
 *
 * This roadmap follows a strict "Backend Lifecycle" order:
 * 1. Foundations
 *  2. Protocols
 *  3. API Logic
 * 4. Persistence →
 * 5. Advanced →
 * 6. Cloud/Scale
 *
 * Each concept includes:
 * - description: Deep dive explanation
 * - docUrl: Primary documentation link
 * - videoUrl: Optional YouTube intro video
 */

export interface Concept {
  id: string;
  name: string;
  description: string;
  docUrl: string;
  videoUrl?: string;
  label: 'Doc' | 'Video' | 'Code' | 'Book';
  completed: boolean;
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
}

export interface EliteChallenge {
  title: string;
  description: string;
  mustHaveFeatures: string[];
}

export interface Phase {
  id: string;
  title: string;
  coreConcepts: string[];
  concepts: Concept[];
  videos: Video[];
  eliteChallenge: EliteChallenge;
}

export interface ResourceLink {
  name: string;
  url: string;
  category: 'Documentation' | 'Books' | 'Tools';
}

export const phases: Phase[] = [
  {
    id: 'phase-1',
    title: 'Phase 01: Foundations & Java Mastery',
    coreConcepts: ['Java 21', 'CS Fundamentals', 'Git', 'Linux'],
    concepts: [
      {
        id: 'cs-logic',
        name: 'CS50 & Computational Thinking',
        description:
          'Comprendre comment les ordinateurs gèrent la mémoire et les algorithmes. Indispensable pour ne pas être juste un "codeur" mais un ingénieur, Apres avoir regarder la video,veuillez cliquer sur le lien ci-dessous pour accéder au cours.',
        docUrl: 'https://cs50.harvard.edu/x/',
        videoUrl: 'h6lqxDwUmJQ',
        label: 'Video',
        completed: false,
      },
      {
        id: 'java-fundamentals',
        name: 'Java Syntax & OOP (Bro Code 2025)',
        description:
          'Maîtrise les bases de Java 21+ : types, structures de contrôle et surtout les piliers de la POO (Héritage, Encapsulation, Polymorphisme).',
        docUrl: 'https://dev.java/learn/',
        videoUrl: 'xTtL8E4LzTQ',
        label: 'Video',
        completed: false,
      },
      {
        id: 'dsa-big-o',
        name: 'Data Structures & Algorithms',
        description:
          'Arrays, Lists, Maps, Sets et complexité Big O. Savoir quelle structure choisir pour garantir la performance du backend.',
        docUrl: 'https://www.bigocheatsheet.com/',
        videoUrl: 'CBYHwZcbD-s',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'git-mastery',
        name: 'Git & Version Control',
        description:
          'Apprends le workflow professionnel : commits, branches, merges et collaboration sur GitHub.',
        docUrl: 'https://git-scm.com/doc',
        videoUrl: 'Kr8l7rQGwNs',
        label: 'Code',
        completed: false,
      },
      {
        id: 'linux-foundations',
        name: 'Linux & Terminal Mastery',
        description:
          'Le backend vit sous Linux. Apprends à naviguer, gérer les permissions et automatiser via le terminal.',
        docUrl: 'https://linuxjourney.com/',
        videoUrl: 'v392lEyM29A',
        label: 'Doc',
        completed: false,
      },
    ],
    videos: [
      { id: 'java-full', title: 'Java Full Course 2025', youtubeId: 'xTtL8E4LzTQ' },
      { id: 'cs50-intro', title: 'Harvard CS50 Intro', youtubeId: '3u1fu6f8Hto' },
    ],
    eliteChallenge: {
      title: 'CLI Personal Utility Suite',
      description:
        'Crée un outil en ligne de commande qui gère des fichiers, traite du texte et monitore le système en utilisant les collections Java et Git.',
      mustHaveFeatures: [
        'Utilisation de Java 21 (Records, Sealed Classes)',
        'Tests unitaires avec JUnit 5',
        'Gestion propre des erreurs (Exceptions personnalisées)',
        'Workflow Git avec au moins 3 branches',
      ],
    },
  },
  {
    id: 'phase-2',
    title: 'Phase 02: Networking & API Design',
    coreConcepts: ['HTTP/3', 'REST', 'JSON', 'OpenAPI'],
    concepts: [
      {
        id: 'http-deep-dive',
        name: 'HTTP/HTTPS & Networking',
        description:
          'Comprendre le cycle Request/Response, les headers, les codes de statut et le TLS. La base de toute communication web.',
        docUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP',
        videoUrl: 'iYM2zFP3Zn0',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'rest-design',
        name: 'RESTful Architecture',
        description:
          "Concevoir des APIs propres, sans état (stateless) et respectant les standards de l'industrie.",
        docUrl: 'https://restfulapi.net/',
        videoUrl: '7YcW25PHnAA',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'openapi-swagger',
        name: 'API Documentation (OpenAPI)',
        description:
          "Documenter ses APIs avec Swagger. Le contrat d'interface est plus important que le code lui-même.",
        docUrl: 'https://swagger.io/specification/',
        videoUrl: 'wJa5CTIFj7U',
        label: 'Video',
        completed: false,
      },
      {
        id: 'serialization-jackson',
        name: 'Serialization (JSON/Jackson)',
        description:
          'Comment transformer des objets Java en JSON et vice-versa. Maîtrise de la bibliothèque Jackson.',
        docUrl: 'https://github.com/FasterXML/jackson',
        videoUrl: 'bKkIQIZ6xA8',
        label: 'Doc',
        completed: false,
      },
    ],
    videos: [
      { id: 'http-guide', title: 'HTTP Protocol Explained', youtubeId: 'iYM2zFP3Zn0' },
      { id: 'rest-pro', title: 'REST API Best Practices', youtubeId: '7YcW25PHnAA' },
    ],
    eliteChallenge: {
      title: 'API Design Blueprint',
      description:
        "Concevoir le schéma complet d'une API complexe (ex: système bancaire) avec documentation OpenAPI et mock server.",
      mustHaveFeatures: [
        'Spécification OpenAPI complète',
        "Gestion des versions de l'API (v1, v2)",
        "Définition précise des types d'erreurs HTTP",
        'Collection Postman documentée',
      ],
    },
  },
  {
    id: 'phase-3',
    title: 'Phase 03: Spring Boot & Middleware',
    coreConcepts: ['Spring Boot 3', 'Dependency Injection', 'Validation', 'Filters'],
    concepts: [
      {
        id: 'spring-core',
        name: 'Spring Core & IoC',
        description:
          "Comprendre l'Inversion de Contrôle et l'Injection de Dépendances. C'est le \"moteur\" de Spring.",
        docUrl: 'https://docs.spring.io/spring-framework/reference/core/beans.html',
        videoUrl: '9SGDpanrc8U',
        label: 'Video',
        completed: false,
      },
      {
        id: 'spring-mvc-logic',
        name: 'Spring MVC & Controllers',
        description:
          'Créer des endpoints REST robustes avec @RestController et gérer les flux de données.',
        docUrl: 'https://docs.spring.io/spring-framework/reference/web/webmvc.html',
        videoUrl: 'xvXb9U8tJDU',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'middleware-filters',
        name: 'Filters & Interceptors',
        description:
          "Traiter les requêtes avant qu'elles n'arrivent au contrôleur (logging, auth, modification de headers).",
        docUrl: 'https://www.baeldung.com/spring-mvc-handlerinterceptor',
        videoUrl: 'nq8Z5gCbxs4',
        label: 'Code',
        completed: false,
      },
      {
        id: 'validation-handling',
        name: 'Validation & Error Handling',
        description:
          "Utiliser Bean Validation (@Valid) et @ControllerAdvice pour des réponses d'erreurs propres.",
        docUrl: 'https://spring.io/blog/2013/11/01/exception-handling-in-spring-mvc',
        videoUrl: 'tUvBWH_ZpPQ',
        label: 'Doc',
        completed: false,
      },
    ],
    videos: [{ id: 'sb3-master', title: 'Spring Boot 3 Full Course', youtubeId: '9SGDpanrc8U' }],
    eliteChallenge: {
      title: 'Robust Task Management API',
      description:
        'Créer une API de gestion de tickets avec validation stricte, logs middleware et gestion globale des exceptions.',
      mustHaveFeatures: [
        'Validation des entrées DTO',
        "Gestionnaire d'erreurs centralisé",
        'Intercepteur de logs de performance',
        'Swagger UI intégré',
      ],
    },
  },
  {
    id: 'phase-4',
    title: 'Phase 04: Data Persistence & SQL',
    coreConcepts: ['PostgreSQL', 'JPA/Hibernate', 'Transactions', 'Migration'],
    concepts: [
      {
        id: 'sql-postgres',
        name: 'PostgreSQL Mastery',
        description:
          'Apprendre le SQL avancé, les index, les jointures et les contraintes. Comprendre pourquoi PostgreSQL est le roi du backend.',
        docUrl: 'https://www.postgresql.org/docs/',
        videoUrl: 'qw--VYLpxG4',
        label: 'Video',
        completed: false,
      },
      {
        id: 'jpa-hibernate-core',
        name: 'JPA & Hibernate ORM',
        description:
          'Mappage objet-relationnel. Gérer les relations (1:N, N:N) et le chargement paresseux (Lazy Loading).',
        docUrl: 'https://hibernate.org/orm/documentation/',
        videoUrl: 'Yv2xctJxE-w',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'spring-data-jpa',
        name: 'Spring Data JPA repositories',
        description:
          'Le pattern Repository pour manipuler les données sans écrire de SQL complexe.',
        docUrl: 'https://spring.io/projects/spring-data-jpa',
        videoUrl: 'XszpJowPCl0',
        label: 'Code',
        completed: false,
      },
      {
        id: 'db-migrations',
        name: 'Database Migrations (Flyway)',
        description: "Gérer l'évolution du schéma de base de données de manière versionnée.",
        docUrl: 'https://flywaydb.org/documentation/',
        videoUrl: 'p0meEGB2-mY',
        label: 'Doc',
        completed: false,
      },
    ],
    videos: [
      { id: 'pg-full', title: 'PostgreSQL Complete Course', youtubeId: 'qw--VYLpxG4' },
      { id: 'hibernate-pro', title: 'Hibernate JPA mastery', youtubeId: 'Yv2xctJxE-w' },
    ],
    eliteChallenge: {
      title: 'E-Commerce Persistence Layer',
      description:
        'Concevoir une base de données pour un shop avec produits, commandes et stocks, incluant des transactions complexes.',
      mustHaveFeatures: [
        'Gestion des transactions ACID',
        'Migrations avec Flyway ou Liquibase',
        'Optimisation des requêtes (Indexation)',
        'Gestion du N+1 problem',
      ],
    },
  },
  {
    id: 'phase-5',
    title: 'Phase 05: Security & Scalability',
    coreConcepts: ['Spring Security', 'JWT', 'Redis', 'Kafka'],
    concepts: [
      {
        id: 'spring-security-auth',
        name: 'Spring Security & OAuth2',
        description:
          "Sécuriser les endpoints, gérer les rôles (RBAC) et l'authentification sociale.",
        docUrl: 'https://docs.spring.io/spring-security/reference/',
        videoUrl: 'KxqlJblhzfI',
        label: 'Video',
        completed: false,
      },
      {
        id: 'jwt-stateless',
        name: 'JWT Stateless Auth',
        description: "Implémenter l'authentification par jeton pour les APIs modernes.",
        docUrl: 'https://jwt.io/introduction',
        videoUrl: 'h-9vhFeM3MY',
        label: 'Code',
        completed: false,
      },
      {
        id: 'redis-caching',
        name: 'Redis Caching',
        description: 'Accélérer les réponses en mettant en cache les données fréquemment accédées.',
        docUrl: 'https://redis.io/docs/',
        videoUrl: 'OqCK95AS-YE',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'messaging-kafka',
        name: 'Event-Driven (Kafka)',
        description: 'Communication asynchrone entre services. Indispensable pour la scalabilité.',
        docUrl: 'https://kafka.apache.org/documentation/',
        videoUrl: 'SqVfCyfCJqw',
        label: 'Video',
        completed: false,
      },
    ],
    videos: [
      { id: 'security-jwt', title: 'Spring Security + JWT', youtubeId: 'KxqlJblhzfI' },
      { id: 'kafka-intro', title: 'Kafka in 10 minutes', youtubeId: 'SqVfCyfCJqw' },
    ],
    eliteChallenge: {
      title: 'Secure Real-time API',
      description:
        "Créer un service de notifications sécurisé par JWT qui utilise Redis pour le cache et Kafka pour l'envoi asynchrone.",
      mustHaveFeatures: [
        'Auth JWT avec Refresh Tokens',
        "Cache d'invalidation avec Redis",
        'Producer/Consumer Kafka',
        'Rate Limiting par utilisateur',
      ],
    },
  },
  {
    id: 'phase-6',
    title: 'Phase 06: Cloud Native & DevOps',
    coreConcepts: ['Docker', 'Kubernetes', 'CI/CD', 'Monitoring'],
    concepts: [
      {
        id: 'docker-containers',
        name: 'Dockerization',
        description:
          "Emballer son application Java dans un conteneur pour qu'elle tourne partout de la même façon.",
        docUrl: 'https://docs.docker.com/',
        videoUrl: 'fqMOX6JJhGo',
        label: 'Video',
        completed: false,
      },
      {
        id: 'k8s-orchestration',
        name: 'Kubernetes Fundamentals',
        description:
          'Gérer des dizaines de conteneurs : auto-scaling, auto-healing et déploiement.',
        docUrl: 'https://kubernetes.io/docs/home/',
        videoUrl: 'd6WC5n9G_sM',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'ci-cd-github',
        name: 'CI/CD Pipelines',
        description: 'Automatiser les tests et le déploiement à chaque commit avec GitHub Actions.',
        docUrl: 'https://docs.github.com/en/actions',
        videoUrl: 'R8_veQiYBjI',
        label: 'Code',
        completed: false,
      },
      {
        id: 'monitoring-observability',
        name: 'Prometheus & Grafana',
        description: "Surveiller la santé de l'application en temps réel (CPU, RAM, erreurs HTTP).",
        docUrl: 'https://prometheus.io/docs/',
        videoUrl: 'h4Sl21AKiD4',
        label: 'Doc',
        completed: false,
      },
    ],
    videos: [
      { id: 'docker-full', title: 'Docker for Java Devs', youtubeId: 'fqMOX6JJhGo' },
      { id: 'k8s-full', title: 'Kubernetes Tutorial', youtubeId: 'd6WC5n9G_sM' },
    ],
    eliteChallenge: {
      title: 'The Cloud-Native Monolith',
      description:
        'Déployer ton API sur un cluster Kubernetes local (Minikube) avec monitoring et pipeline CI/CD automatisé.',
      mustHaveFeatures: [
        'Dockerfile multi-stage optimisé',
        'Manifests Kubernetes (Deploy/Service/Ingress)',
        'Pipeline GitHub Actions',
        'Tableau de bord Grafana fonctionnel',
      ],
    },
  },
];

export const resourceHub: ResourceLink[] = [
  // Documentation - Les bibles du développeur
  {
    name: 'Java Dev Portal (Oracle)',
    url: 'https://dev.java/learn/',
    category: 'Documentation',
  },
  {
    name: 'Spring Quickstart Guide',
    url: 'https://spring.io/quickstart',
    category: 'Documentation',
  },
  {
    name: 'PostgreSQL Manual',
    url: 'https://www.postgresql.org/docs/current/index.html',
    category: 'Documentation',
  },
  {
    name: 'Baeldung (Spring/Java Guides)',
    url: 'https://www.baeldung.com/',
    category: 'Documentation',
  },

  // Books - Pour approfondir la théorie (Elite Level)
  {
    name: 'Effective Java - Joshua Bloch',
    url: 'https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997',
    category: 'Books',
  },
  {
    name: 'Designing Data-Intensive Applications',
    url: 'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/',
    category: 'Books',
  },
  {
    name: 'Clean Code - Robert C. Martin',
    url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
    category: 'Books',
  },

  // Tools - L'arsenal technique
  {
    name: 'IntelliJ IDEA',
    url: 'https://www.jetbrains.com/idea/',
    category: 'Tools',
  },
  {
    name: 'Postman (API Testing)',
    url: 'https://www.postman.com/',
    category: 'Tools',
  },
  {
    name: 'Docker Desktop',
    url: 'https://www.docker.com/products/docker-desktop',
    category: 'Tools',
  },
  {
    name: 'DBeaver (Universal DB Tool)',
    url: 'https://dbeaver.io/',
    category: 'Tools',
  },
  {
    name: 'RedisInsight (GUI for Redis)',
    url: 'https://redis.io/insight/',
    category: 'Tools',
  },
  {
    name: 'Flyway (DB Migrations)',
    url: 'https://flywaydb.org/',
    category: 'Tools',
  },
  {
    name: 'Offset Explorer (Kafka Tool)',
    url: 'https://www.kafkatool.com/',
    category: 'Tools',
  },
  {
    name: 'Lens (Kubernetes IDE)',
    url: 'https://k8slens.dev/',
    category: 'Tools',
  },
];

export const TARGET_DATE = new Date('2026-12-31T23:59:59');
