/**
 * Roadmap Data Structure for Elite Java Backend 2026
 *
 * This file contains all phases, concepts, videos, and project challenges.
 * Each concept includes a short description explaining WHY it's important.
 * Each phase includes core concept badges for quick reference.
 */

export interface Concept {
  id: string;
  name: string;
  shortDescription: string; // WHY this concept matters
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
  mustHaveFeatures: string[]; // List of must-have features for the project
}

export interface Phase {
  id: string;
  title: string;
  coreConcepts: string[]; // Badge list (e.g., "Networking", "Security", "Architecture")
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
    coreConcepts: ['Algorithms', 'Data Structures', 'Java Fundamentals'],
    concepts: [
      {
        id: 'cs50',
        name: 'CS50x - Harvard Computer Science',
        shortDescription:
          'Builds computational thinking and problem-solving skills essential for any backend engineer.',
        resourceLink: 'https://cs50.harvard.edu/x/',
        label: 'Video',
        completed: false,
      },
      {
        id: 'java-syntax',
        name: 'Java Syntax & Fundamentals',
        shortDescription:
          'Master the language basics: variables, control flow, and type system before diving into complex frameworks.',
        resourceLink: 'https://docs.oracle.com/javase/tutorial/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'data-structures',
        name: 'Data Structures (Arrays, Lists, Maps)',
        shortDescription:
          'Understanding collections is critical for efficient data manipulation and algorithm implementation.',
        resourceLink: 'https://docs.oracle.com/javase/tutorial/collections/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'big-o',
        name: 'Big O Notation & Time Complexity',
        shortDescription:
          'Essential for writing scalable code and optimizing performance in production systems.',
        resourceLink: 'https://www.bigocheatsheet.com/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'git',
        name: 'Git & Version Control',
        shortDescription:
          'Industry standard for collaboration and code management. Every backend project uses Git.',
        resourceLink: 'https://git-scm.com/doc',
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
      mustHaveFeatures: [
        'Directory tree structure using custom Node class',
        'CRUD operations (create, delete, move, copy)',
        'Path resolution and navigation (cd, ls, pwd)',
        'File content storage and retrieval',
        'Error handling for invalid operations',
      ],
    },
  },
  {
    id: 'phase-2',
    title: 'Phase 02: OOP & Java Advanced',
    coreConcepts: ['OOP', 'Concurrency', 'Testing', 'Build Tools'],
    concepts: [
      {
        id: 'oop',
        name: 'Object-Oriented Programming (Inheritance, Interfaces, Polymorphism)',
        shortDescription:
          'Core paradigm for building maintainable, extensible enterprise applications. Spring Boot heavily relies on OOP principles.',
        resourceLink: 'https://docs.oracle.com/javase/tutorial/java/concepts/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'exceptions',
        name: 'Exception Handling',
        shortDescription:
          'Proper error handling prevents production crashes and improves system reliability. Critical for backend services.',
        resourceLink: 'https://docs.oracle.com/javase/tutorial/essential/exceptions/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'streams',
        name: 'Java Streams API',
        shortDescription:
          'Functional-style data processing that makes code more readable and efficient for large datasets.',
        resourceLink:
          'https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'optional',
        name: 'Optional & Modern Java Features',
        shortDescription:
          'Prevents NullPointerException bugs and makes code intent explicit. Widely used in Spring Boot codebases.',
        resourceLink: 'https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'multithreading',
        name: 'Concurrency & Multi-threading',
        shortDescription:
          'Required for building high-performance systems that handle thousands of concurrent requests efficiently.',
        resourceLink: 'https://docs.oracle.com/javase/tutorial/essential/concurrency/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'maven',
        name: 'Maven Dependency Management',
        shortDescription:
          'Industry-standard build tool for managing dependencies and project lifecycle. Essential for Spring Boot projects.',
        resourceLink: 'https://maven.apache.org/guides/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'junit',
        name: 'JUnit 5 - Unit Testing',
        shortDescription:
          'Writing tests ensures code quality and prevents regressions. No professional project goes without comprehensive tests.',
        resourceLink: 'https://junit.org/junit5/docs/current/user-guide/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'effective-java',
        name: 'Effective Java - Joshua Bloch',
        shortDescription:
          'The definitive guide to writing production-quality Java code. Written by a former Google engineer.',
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
      mustHaveFeatures: [
        'Multi-module Maven project structure',
        'Complete unit test coverage (>80%)',
        'Thread pool implementation for concurrent tasks',
        'Custom exception hierarchy',
        'Configuration management (properties files)',
        'Logging framework integration (SLF4J)',
      ],
    },
  },
  {
    id: 'phase-3',
    title: 'Phase 03: Database & Persistence',
    coreConcepts: ['SQL', 'ORM', 'Caching', 'Transactions'],
    concepts: [
      {
        id: 'postgresql',
        name: 'PostgreSQL Fundamentals',
        shortDescription:
          'Most robust open-source relational database. Preferred for enterprise applications due to ACID compliance and advanced features.',
        resourceLink: 'https://www.postgresql.org/docs/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'jdbc',
        name: 'JDBC - Java Database Connectivity',
        shortDescription:
          'Low-level database access layer. Understanding JDBC helps debug JPA/Hibernate issues and write custom database operations.',
        resourceLink: 'https://docs.oracle.com/javase/tutorial/jdbc/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'jpa',
        name: 'JPA / Hibernate ORM',
        shortDescription:
          'Eliminates boilerplate SQL code and provides powerful query capabilities. Spring Data JPA builds on top of JPA.',
        resourceLink:
          'https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'relationships',
        name: 'Database Relationships (1:N, N:N)',
        shortDescription:
          'Mastering relationships is crucial for designing normalized database schemas that scale and maintain data integrity.',
        resourceLink: 'https://hibernate.org/orm/documentation/6.4/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'transactions',
        name: 'ACID Transactions',
        shortDescription:
          'Ensures data consistency in concurrent environments. Critical for financial systems and any application handling critical data.',
        resourceLink: 'https://www.postgresql.org/docs/current/tutorial-transactions.html',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'indexing',
        name: 'Database Indexing & Optimization',
        shortDescription:
          'Proper indexing can improve query performance by orders of magnitude. Essential for production systems handling large datasets.',
        resourceLink: 'https://www.postgresql.org/docs/current/indexes.html',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'redis',
        name: 'Redis Caching',
        shortDescription:
          'In-memory caching dramatically reduces database load and improves response times. Industry standard for high-performance backends.',
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
      mustHaveFeatures: [
        'Multi-table database schema with proper relationships',
        'JPA entities with bidirectional mappings',
        'Transaction management for inventory updates',
        'Redis caching for frequently accessed items',
        'Optimized queries with proper indexes',
        'Database migration scripts (Flyway/Liquibase)',
      ],
    },
  },
  {
    id: 'phase-4',
    title: 'Phase 04: Spring Boot Ecosystem',
    coreConcepts: ['REST APIs', 'Security', 'Dependency Injection', 'Validation'],
    concepts: [
      {
        id: 'spring-boot',
        name: 'Spring Boot Fundamentals',
        shortDescription:
          'The most popular Java framework for building production-ready applications quickly. Powers millions of backend services worldwide.',
        resourceLink: 'https://spring.io/projects/spring-boot',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'dependency-injection',
        name: 'Dependency Injection (IoC Container)',
        shortDescription:
          'Core Spring principle that enables loose coupling, testability, and maintainability. Foundation of Spring Boot architecture.',
        resourceLink:
          'https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-introduction',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'rest-apis',
        name: 'Spring MVC - REST APIs',
        shortDescription:
          'Industry standard for building HTTP APIs. Every modern backend service exposes REST endpoints for client consumption.',
        resourceLink:
          'https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'spring-security',
        name: 'Spring Security',
        shortDescription:
          'Comprehensive security framework protecting applications from common vulnerabilities. Mandatory for production systems.',
        resourceLink: 'https://docs.spring.io/spring-security/reference/index.html',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'jwt',
        name: 'JWT Authentication',
        shortDescription:
          'Stateless authentication standard for microservices. Enables scalable, distributed authentication without session storage.',
        resourceLink: 'https://jwt.io/introduction',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'oauth2',
        name: 'OAuth2 Integration',
        shortDescription:
          'Industry standard for authorization. Enables "Login with Google/GitHub" and secure third-party access to APIs.',
        resourceLink: 'https://oauth.net/2/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'validation',
        name: 'Bean Validation',
        shortDescription:
          'Ensures data integrity at the API layer. Prevents invalid data from entering your system and improves error messaging.',
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
      mustHaveFeatures: [
        'RESTful API with proper HTTP status codes',
        'JWT-based authentication and authorization',
        'Role-based access control (RBAC)',
        'Request/Response validation',
        'Error handling with custom exception handlers',
        'API documentation (Swagger/OpenAPI)',
        'Integration with payment gateway (Stripe/PayPal)',
      ],
    },
  },
  {
    id: 'phase-5',
    title: 'Phase 05: Microservices & Cloud Native',
    coreConcepts: ['Microservices', 'Docker', 'Message Queues', 'Service Discovery'],
    concepts: [
      {
        id: 'microservices',
        name: 'Microservices Architecture',
        shortDescription:
          'Decomposing monoliths into independent services enables scalability, fault isolation, and team autonomy. Industry trend for large-scale systems.',
        resourceLink: 'https://microservices.io/patterns/microservices.html',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'spring-cloud',
        name: 'Spring Cloud',
        shortDescription:
          'Provides tools for building distributed systems: service discovery, configuration management, and circuit breakers.',
        resourceLink: 'https://spring.io/projects/spring-cloud',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'docker',
        name: 'Docker & Containerization',
        shortDescription:
          'Packages applications with dependencies for consistent deployment across environments. Foundation of modern DevOps practices.',
        resourceLink: 'https://docs.docker.com/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'docker-compose',
        name: 'Docker Compose',
        shortDescription:
          'Orchestrates multi-container applications locally. Essential for running complex microservices architectures on your machine.',
        resourceLink: 'https://docs.docker.com/compose/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'api-gateway',
        name: 'API Gateway Pattern',
        shortDescription:
          'Single entry point for clients, handling routing, authentication, and rate limiting. Simplifies client integration with microservices.',
        resourceLink: 'https://spring.io/projects/spring-cloud-gateway',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'service-discovery',
        name: 'Service Discovery (Eureka/Consul)',
        shortDescription:
          'Enables services to find and communicate with each other dynamically. Critical for resilient microservices architectures.',
        resourceLink: 'https://spring.io/projects/spring-cloud-netflix',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'config-server',
        name: 'Configuration Server',
        shortDescription:
          'Centralized configuration management. Update settings across services without redeployment. Essential for production microservices.',
        resourceLink: 'https://spring.io/projects/spring-cloud-config',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'kafka',
        name: 'Apache Kafka - Async Communication',
        shortDescription:
          'High-throughput message broker for event-driven architectures. Powers real-time data pipelines in major tech companies.',
        resourceLink: 'https://kafka.apache.org/documentation/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'postman',
        name: 'API Testing with Postman',
        shortDescription:
          'Essential tool for testing REST APIs during development. Build and document API collections for your microservices.',
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
      mustHaveFeatures: [
        'Minimum 3 independent microservices',
        'API Gateway for routing requests',
        'Service discovery (Eureka or Consul)',
        'Asynchronous communication via Kafka',
        'Docker Compose for local development',
        'Inter-service authentication',
        'Distributed tracing (optional)',
      ],
    },
  },
  {
    id: 'phase-6',
    title: 'Phase 06: Architecture Elite & DevOps',
    coreConcepts: ['Kubernetes', 'CI/CD', 'Monitoring', 'System Design'],
    concepts: [
      {
        id: 'kubernetes',
        name: 'Kubernetes (K8s)',
        shortDescription:
          'Industry standard for container orchestration. Deploy, scale, and manage containerized applications in production environments.',
        resourceLink: 'https://kubernetes.io/docs/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'ci-cd',
        name: 'CI/CD with GitHub Actions',
        shortDescription:
          'Automates testing and deployment. Ensures code quality and enables rapid, reliable releases. Standard practice in modern teams.',
        resourceLink: 'https://docs.github.com/en/actions',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'prometheus',
        name: 'Monitoring with Prometheus',
        shortDescription:
          'Time-series database for metrics collection. Essential for understanding system performance and detecting issues before they impact users.',
        resourceLink: 'https://prometheus.io/docs/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'grafana',
        name: 'Grafana Dashboards',
        shortDescription:
          'Visualization tool for monitoring data. Create dashboards to track system health, performance, and business metrics.',
        resourceLink: 'https://grafana.com/docs/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'system-design',
        name: 'System Design Principles',
        shortDescription:
          'Design scalable, reliable systems that handle millions of users. Core skill for senior backend engineers and architects.',
        resourceLink: 'https://github.com/donnemartin/system-design-primer',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'linux',
        name: 'Linux Fundamentals',
        shortDescription:
          'Most servers run Linux. Understanding commands, file systems, and process management is essential for backend operations.',
        resourceLink: 'https://www.linux.org/pages/download/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'networking',
        name: 'Networking Basics',
        shortDescription:
          'Understanding TCP/IP, HTTP, and DNS helps debug production issues and design efficient distributed systems.',
        resourceLink: 'https://www.ietf.org/standards/rfcs/',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'scalability',
        name: 'Scalability & Performance',
        shortDescription:
          'Learn patterns and techniques for building systems that scale horizontally and handle exponential traffic growth.',
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
      mustHaveFeatures: [
        'Kubernetes deployment manifests (Deployments, Services)',
        'CI/CD pipeline with automated testing',
        'Monitoring stack (Prometheus + Grafana)',
        'System design documentation (architecture diagrams)',
        'Horizontal scaling configuration',
        'Health checks and liveness probes',
        'Load testing results and performance metrics',
      ],
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
