export interface Concept {
  id: string;
  name: string;
  resourceLink: string;
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
}

export interface Phase {
  id: string;
  title: string;
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
    title: 'Phase 01: Java & CS Foundations',
    concepts: [
      {
        id: 'cs50',
        name: 'CS50x - Harvard Computer Science',
        resourceLink: 'https://cs50.harvard.edu/x/',
        label: 'Video',
        completed: false,
      },
      {
        id: 'java-syntax',
        name: 'Java Syntax & Fundamentals',
        resourceLink: 'https://docs.oracle.com/javase/tutorial/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'data-structures',
        name: 'Data Structures (Arrays, Lists, Maps)',
        resourceLink: 'https://docs.oracle.com/javase/tutorial/collections/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'big-o',
        name: 'Big O Notation & Time Complexity',
        resourceLink: 'https://www.bigocheatsheet.com/',
        label: 'Doc',
        completed: false,
      },
    ],
    videos: [
      {
        id: 'cs50-intro',
        title: 'CS50 - Introduction to Computer Science',
        youtubeId: '3u1fu6f8Hto',
      },
      {
        id: 'java-basics',
        title: 'Java Programming Basics',
        youtubeId: 'eIrMbAQSU34',
      },
    ],
    eliteChallenge: {
      title: 'File System Simulator',
      description:
        'Create a command-line file system simulator with basic operations (create, delete, navigate, list). Implement using core Java data structures.',
    },
  },
  {
    id: 'phase-2',
    title: 'Phase 02: OOP & Java Advanced',
    concepts: [
      {
        id: 'oop',
        name: 'Object-Oriented Programming (Inheritance, Interfaces, Polymorphism)',
        resourceLink: 'https://docs.oracle.com/javase/tutorial/java/concepts/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'exceptions',
        name: 'Exception Handling',
        resourceLink: 'https://docs.oracle.com/javase/tutorial/essential/exceptions/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'streams',
        name: 'Java Streams API',
        resourceLink:
          'https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'optional',
        name: 'Optional & Modern Java Features',
        resourceLink: 'https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'multithreading',
        name: 'Concurrency & Multi-threading',
        resourceLink: 'https://docs.oracle.com/javase/tutorial/essential/concurrency/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'maven',
        name: 'Maven Dependency Management',
        resourceLink: 'https://maven.apache.org/guides/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'junit',
        name: 'JUnit 5 - Unit Testing',
        resourceLink: 'https://junit.org/junit5/docs/current/user-guide/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'effective-java',
        name: 'Effective Java - Joshua Bloch',
        resourceLink: 'https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997',
        label: 'Book',
        completed: false,
      },
    ],
    videos: [
      {
        id: 'java-oop',
        title: 'Java OOP Explained',
        youtubeId: 'bJzb-RuUcMU',
      },
      {
        id: 'java-streams',
        title: 'Java Streams Tutorial',
        youtubeId: 't1-YZ6bF-g0',
      },
    ],
    eliteChallenge: {
      title: 'Enterprise Java Application',
      description:
        'Build a modular Java application using OOP principles, Maven for dependency management, and JUnit for comprehensive unit testing. Include multi-threading features.',
    },
  },
  {
    id: 'phase-3',
    title: 'Phase 03: Database & Persistence',
    concepts: [
      {
        id: 'postgresql',
        name: 'PostgreSQL Fundamentals',
        resourceLink: 'https://www.postgresql.org/docs/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'jdbc',
        name: 'JDBC - Java Database Connectivity',
        resourceLink: 'https://docs.oracle.com/javase/tutorial/jdbc/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'jpa',
        name: 'JPA / Hibernate ORM',
        resourceLink:
          'https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'relationships',
        name: 'Database Relationships (1:N, N:N)',
        resourceLink: 'https://hibernate.org/orm/documentation/6.4/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'transactions',
        name: 'ACID Transactions',
        resourceLink: 'https://www.postgresql.org/docs/current/tutorial-transactions.html',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'indexing',
        name: 'Database Indexing & Optimization',
        resourceLink: 'https://www.postgresql.org/docs/current/indexes.html',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'redis',
        name: 'Redis Caching',
        resourceLink: 'https://redis.io/docs/',
        label: 'Doc',
        completed: false,
      },
    ],
    videos: [
      {
        id: 'postgresql-tutorial',
        title: 'PostgreSQL Complete Course',
        youtubeId: 'qw--VYLpxG4',
      },
      {
        id: 'hibernate-tutorial',
        title: 'Hibernate Tutorial for Beginners',
        youtubeId: 'Yv2xctJxE-w',
      },
    ],
    eliteChallenge: {
      title: 'Inventory Management System',
      description:
        'Create a complex inventory management system with transaction history, relational data modeling, caching with Redis, and optimized database queries.',
    },
  },
  {
    id: 'phase-4',
    title: 'Phase 04: Spring Boot Ecosystem',
    concepts: [
      {
        id: 'spring-boot',
        name: 'Spring Boot Fundamentals',
        resourceLink: 'https://spring.io/projects/spring-boot',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'dependency-injection',
        name: 'Dependency Injection (IoC Container)',
        resourceLink:
          'https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-introduction',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'rest-apis',
        name: 'Spring MVC - REST APIs',
        resourceLink:
          'https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'spring-security',
        name: 'Spring Security',
        resourceLink: 'https://docs.spring.io/spring-security/reference/index.html',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'jwt',
        name: 'JWT Authentication',
        resourceLink: 'https://jwt.io/introduction',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'oauth2',
        name: 'OAuth2 Integration',
        resourceLink: 'https://oauth.net/2/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'validation',
        name: 'Bean Validation',
        resourceLink:
          'https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#validation',
        label: 'Doc',
        completed: false,
      },
    ],
    videos: [
      {
        id: 'spring-boot-full',
        title: 'Spring Boot Full Course',
        youtubeId: '9SGDpanrc8U',
      },
      {
        id: 'spring-security',
        title: 'Spring Security with JWT',
        youtubeId: 'KxqlJblhzfI',
      },
    ],
    eliteChallenge: {
      title: 'E-Learning Platform API',
      description:
        'Build a complete REST API for an e-learning platform with role-based access control (Student/Teacher), JWT authentication, payment integration, and comprehensive validation.',
    },
  },
  {
    id: 'phase-5',
    title: 'Phase 05: Microservices & Cloud Native',
    concepts: [
      {
        id: 'microservices',
        name: 'Microservices Architecture',
        resourceLink: 'https://microservices.io/patterns/microservices.html',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'spring-cloud',
        name: 'Spring Cloud',
        resourceLink: 'https://spring.io/projects/spring-cloud',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'docker',
        name: 'Docker & Containerization',
        resourceLink: 'https://docs.docker.com/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'docker-compose',
        name: 'Docker Compose',
        resourceLink: 'https://docs.docker.com/compose/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'api-gateway',
        name: 'API Gateway Pattern',
        resourceLink: 'https://spring.io/projects/spring-cloud-gateway',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'service-discovery',
        name: 'Service Discovery (Eureka/Consul)',
        resourceLink: 'https://spring.io/projects/spring-cloud-netflix',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'config-server',
        name: 'Configuration Server',
        resourceLink: 'https://spring.io/projects/spring-cloud-config',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'kafka',
        name: 'Apache Kafka - Async Communication',
        resourceLink: 'https://kafka.apache.org/documentation/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'postman',
        name: 'API Testing with Postman',
        resourceLink: 'https://learning.postman.com/',
        label: 'Doc',
        completed: false,
      },
    ],
    videos: [
      {
        id: 'microservices-spring',
        title: 'Microservices with Spring Cloud',
        youtubeId: 'mPPhcU7oWDU',
      },
      {
        id: 'docker-tutorial',
        title: 'Docker Complete Tutorial',
        youtubeId: 'fqMOX6JJhGo',
      },
    ],
    eliteChallenge: {
      title: 'Multi-Service Architecture',
      description:
        'Design and implement an architecture with 3+ microservices communicating via REST and message queues (Kafka). Use Docker Compose for local orchestration and Spring Cloud for service discovery.',
    },
  },
  {
    id: 'phase-6',
    title: 'Phase 06: Architecture Elite & DevOps',
    concepts: [
      {
        id: 'kubernetes',
        name: 'Kubernetes (K8s)',
        resourceLink: 'https://kubernetes.io/docs/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'ci-cd',
        name: 'CI/CD with GitHub Actions',
        resourceLink: 'https://docs.github.com/en/actions',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'prometheus',
        name: 'Monitoring with Prometheus',
        resourceLink: 'https://prometheus.io/docs/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'grafana',
        name: 'Grafana Dashboards',
        resourceLink: 'https://grafana.com/docs/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'system-design',
        name: 'System Design Principles',
        resourceLink: 'https://github.com/donnemartin/system-design-primer',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'scalability',
        name: 'Scalability & Performance',
        resourceLink:
          'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/',
        label: 'Book',
        completed: false,
      },
    ],
    videos: [
      {
        id: 'kubernetes-course',
        title: 'Kubernetes Tutorial',
        youtubeId: 'd6WC5n9G_sM',
      },
      {
        id: 'system-design',
        title: 'System Design Interview',
        youtubeId: 'F2FmTdLtb_4',
      },
    ],
    eliteChallenge: {
      title: 'Production-Ready System',
      description:
        'Build a production-ready system (simplified video streaming or real-time trading platform) with Kubernetes deployment, CI/CD pipeline, monitoring, and comprehensive system design documentation.',
    },
  },
];

export const resourceHub: ResourceLink[] = [
  {
    name: 'Oracle Java Documentation',
    url: 'https://docs.oracle.com/javase/',
    category: 'Documentation',
  },
  {
    name: 'Spring Framework Documentation',
    url: 'https://docs.spring.io/spring-framework/',
    category: 'Documentation',
  },
  {
    name: 'PostgreSQL Documentation',
    url: 'https://www.postgresql.org/docs/',
    category: 'Documentation',
  },
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
    name: 'IntelliJ IDEA',
    url: 'https://www.jetbrains.com/idea/',
    category: 'Tools',
  },
  {
    name: 'Postman',
    url: 'https://www.postman.com/',
    category: 'Tools',
  },
  {
    name: 'Docker Desktop',
    url: 'https://www.docker.com/products/docker-desktop',
    category: 'Tools',
  },
];

export const TARGET_DATE = new Date('2026-12-31T23:59:59');
