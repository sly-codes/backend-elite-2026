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
    title: 'Phase 01: Foundations',
    coreConcepts: ['Java', 'Computer Science', 'Version Control', 'Linux'],
    concepts: [
      {
        id: 'java-fundamentals',
        name: 'Java Syntax & Fundamentals',
        description:
          'Master the language basics: variables, control flow, type system, and object-oriented principles. This is the foundation that everything else builds upon.',
        docUrl: 'https://docs.oracle.com/javase/tutorial/',
        videoUrl: 'eIrMbAQSU34',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'cs50',
        name: 'CS50x - Computer Science Foundations',
        description:
          'Build computational thinking and problem-solving skills essential for any backend engineer. Covers algorithms, data structures, and programming paradigms.',
        docUrl: 'https://cs50.harvard.edu/x/',
        videoUrl: '3u1fu6f8Hto',
        label: 'Video',
        completed: false,
      },
      {
        id: 'data-structures',
        name: 'Data Structures (Arrays, Lists, Maps, Sets)',
        description:
          'Understanding collections is critical for efficient data manipulation. Learn when to use ArrayList vs LinkedList, HashMap vs TreeMap, and their time complexities.',
        docUrl: 'https://docs.oracle.com/javase/tutorial/collections/',
        videoUrl: 'rWtVo6uIqMs',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'algorithms',
        name: 'Algorithms & Big O Notation',
        description:
          'Essential for writing scalable code and optimizing performance. Master sorting, searching, and understand time/space complexity analysis.',
        docUrl: 'https://www.bigocheatsheet.com/',
        videoUrl: 'dNorFNlDbX0',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'git-github',
        name: 'Git & Github Version Control',
        description:
          'Industry standard for collaboration and code management. Every backend project uses Git and Github. Master branches, merges, rebases, and collaborative workflows.',
        docUrl: 'https://git-scm.com/doc',
        videoUrl: 'USjZcfj8yxE',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'linux',
        name: 'Linux Fundamentals',
        description:
          'Most servers run Linux. Understanding commands, file systems, process management, and shell scripting is essential for backend operations and deployment.',
        docUrl: 'https://www.linux.org/pages/download/',
        videoUrl: 'ROjZy1Zb5tc',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'logging',
        name: 'Logging & Debugging',
        description:
          'Master logging frameworks (SLF4J, Logback). Understand log levels, structured logging, and how to effectively debug production issues. Critical for troubleshooting.',
        docUrl: 'https://www.slf4j.org/manual.html',
        videoUrl: 'HhUyE_rQVfw',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'testing-code-quality',
        name: 'Testing & Code Quality',
        description:
          'JUnit 5, Mockito, Test-Driven Development (TDD), code coverage, and static analysis tools. Writing maintainable, testable code is non-negotiable in professional environments.',
        docUrl: 'https://junit.org/junit5/docs/current/user-guide/',
        videoUrl: '2vttLg43i8k',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'config-management',
        name: 'Configuration Management',
        description:
          'Externalize configuration using properties files, YAML, environment variables, and profiles. Learn Spring Boot @ConfigurationProperties and configuration best practices.',
        docUrl:
          'https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config',
        videoUrl: 'Gz5CX4kLNxw',
        label: 'Doc',
        completed: false,
      },
    ],
    videos: [
      {
        id: 'java-intro',
        title: 'Java Programming Complete Course',
        youtubeId: 'eIrMbAQSU34',
      },
      {
        id: 'cs50-intro',
        title: 'CS50 - Introduction to Computer Science',
        youtubeId: '3u1fu6f8Hto',
      },
    ],
    eliteChallenge: {
      title: 'Command-Line Tools Suite',
      description:
        'Build a collection of command-line utilities (file manager, text processor, system monitor) demonstrating mastery of Java fundamentals, data structures, and Linux integration.',
      mustHaveFeatures: [
        'Multiple utilities in a single modular application',
        'Efficient data structure usage (choose appropriate collections)',
        'File I/O operations with error handling',
        'System process monitoring capabilities',
        'Git repository with meaningful commits',
      ],
    },
  },
  {
    id: 'phase-2',
    title: 'Phase 02: Protocols & Networking',
    coreConcepts: ['HTTP', 'REST', 'Networking', 'API Design'],
    concepts: [
      {
        id: 'http-fundamentals',
        name: 'HTTP Protocol Deep Dive',
        description:
          'Understanding HTTP methods (GET, POST, PUT, DELETE), status codes, headers, and request/response lifecycle. Essential for building and debugging APIs.',
        docUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP',
        videoUrl: 'iYM2zFP3Zn0',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'rest-api',
        name: 'REST API Design Principles',
        description:
          'Learn RESTful architecture: resource-based URLs, stateless communication, HTTP verbs, and status codes. Industry standard for building APIs.',
        docUrl: 'https://restfulapi.net/',
        videoUrl: '7YcW25PHnAA',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'networking',
        name: 'Networking Basics (TCP/IP, DNS, SSL/TLS)',
        description:
          'Understanding TCP/IP stack, DNS resolution, SSL/TLS encryption, and network layers helps debug production issues and design efficient distributed systems.',
        docUrl: 'https://www.cloudflare.com/learning/network-layer/what-is-tcp-ip/',
        videoUrl: 'PpsEaqJV_A0',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'api-versioning',
        name: 'API Versioning & Documentation',
        description:
          'Design APIs that evolve without breaking clients. Learn versioning strategies and API documentation standards (OpenAPI/Swagger).',
        docUrl: 'https://swagger.io/specification/',
        videoUrl: 'wJa5CTIFj7U',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'serialization',
        name: 'Serialization & Deserialization',
        description:
          'JSON (Jackson), XML, and binary serialization. Understand how data is transformed for network transmission. Critical for API development and data persistence.',
        docUrl: 'https://github.com/FasterXML/jackson',
        videoUrl: 'bKkIQIZ6xA8',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'openapi-standards',
        name: 'OpenAPI Standards & Specs',
        description:
          'Industry standard for API documentation. Define contracts, generate client SDKs, and ensure API consistency. Essential for microservices and API-first development.',
        docUrl: 'https://swagger.io/specification/',
        videoUrl: 'wJa5CTIFj7U',
        label: 'Doc',
        completed: false,
      },
    ],
    videos: [
      {
        id: 'http-tutorial',
        title: 'HTTP Protocol Explained',
        youtubeId: 'iYM2zFP3Zn0',
      },
      {
        id: 'rest-api-design',
        title: 'REST API Design Best Practices',
        youtubeId: '7YcW25PHnAA',
      },
    ],
    eliteChallenge: {
      title: 'REST API Mock Server',
      description:
        'Design and document a complete REST API with proper HTTP methods, status codes, request/response formats. Include OpenAPI documentation and Postman collection.',
      mustHaveFeatures: [
        'Full CRUD operations on multiple resources',
        'Proper HTTP status codes and error responses',
        'Request/Response validation',
        'OpenAPI/Swagger documentation',
        'Postman collection with examples',
        'API versioning strategy implemented',
      ],
    },
  },
  {
    id: 'phase-3',
    title: 'Phase 03: API Logic & Middleware',
    coreConcepts: ['Middleware', 'Validation', 'Error Handling', 'Request Processing'],
    concepts: [
      {
        id: 'spring-boot',
        name: 'Spring Boot Fundamentals',
        description:
          'The most popular Java framework for building production-ready applications quickly. Auto-configuration, embedded servers, and production-ready features out of the box.',
        docUrl: 'https://spring.io/projects/spring-boot',
        videoUrl: '9SGDpanrc8U',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'dependency-injection',
        name: 'Dependency Injection (IoC Container)',
        description:
          'Core Spring principle enabling loose coupling, testability, and maintainability. Foundation of Spring Boot architecture. Learn @Autowired, @Component, @Service patterns.',
        docUrl:
          'https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-introduction',
        videoUrl: 'uheGjFm4KO8',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'spring-mvc',
        name: 'Spring MVC - Controllers & Request Mapping',
        description:
          'Build REST endpoints with @RestController, handle path variables, query parameters, and request bodies. Foundation of API development in Spring Boot.',
        docUrl: 'https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc',
        videoUrl: '9SGDpanrc8U',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'middleware',
        name: 'Middleware & Interceptors',
        description:
          'Process requests before controllers: logging, authentication, rate limiting. Spring Interceptors and Filters for cross-cutting concerns.',
        docUrl:
          'https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-handlermapping-interceptor',
        videoUrl: 'nq8Z5gCbxs4',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'validation',
        name: 'Request Validation & Bean Validation',
        description:
          'Ensure data integrity at the API layer. @Valid, @NotNull, @Size annotations prevent invalid data from entering your system and improve error messaging.',
        docUrl:
          'https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#validation',
        videoUrl: 'tUvBWH_ZpPQ',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'error-handling',
        name: 'Global Exception Handling',
        description:
          'Centralized error handling with @ControllerAdvice. Convert exceptions to proper HTTP responses, improve API consistency and developer experience.',
        docUrl: 'https://spring.io/blog/2013/11/01/exception-handling-in-spring-mvc',
        videoUrl: 'xvXb9U8tJDU',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'routing',
        name: 'Advanced Routing & Path Matching',
        description:
          'Master Spring MVC routing: path variables, matrix variables, regex patterns, and request mapping strategies. Essential for building flexible, maintainable APIs.',
        docUrl:
          'https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-ann-requestmapping',
        videoUrl: '9SGDpanrc8U',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'request-context',
        name: 'Request Context & Thread Safety',
        description:
          'Understand request-scoped beans, ThreadLocal usage, and how Spring manages request context. Critical for avoiding concurrency bugs and understanding framework internals.',
        docUrl:
          'https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-scopes',
        videoUrl: 'YviFu5hLgWA',
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
        id: 'spring-mvc',
        title: 'Spring MVC Tutorial',
        youtubeId: '9SGDpanrc8U',
      },
    ],
    eliteChallenge: {
      title: 'Task Management API',
      description:
        'Build a complete REST API with Spring Boot: controllers, validation, error handling, middleware for logging, and comprehensive request/response processing.',
      mustHaveFeatures: [
        'RESTful endpoints with proper HTTP methods',
        'Request validation using Bean Validation',
        'Global exception handler with custom error responses',
        'Middleware for request logging and timing',
        'Request/Response DTOs with proper serialization',
        'API documentation with Swagger',
      ],
    },
  },
  {
    id: 'phase-4',
    title: 'Phase 04: Persistence & Business Logic',
    coreConcepts: ['Database', 'ORM', 'CRUD', 'Transactions', 'Querying'],
    concepts: [
      {
        id: 'postgresql',
        name: 'PostgreSQL Fundamentals',
        description:
          'Most robust open-source relational database. ACID compliance, advanced features, JSON support. Preferred for enterprise applications requiring reliability.',
        docUrl: 'https://www.postgresql.org/docs/',
        videoUrl: 'qw--VYLpxG4',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'jdbc',
        name: 'JDBC - Database Connectivity',
        description:
          'Low-level database access layer. Understanding JDBC helps debug JPA/Hibernate issues and write custom database operations when needed.',
        docUrl: 'https://docs.oracle.com/javase/tutorial/jdbc/',
        videoUrl: '2i4t-SL1VsU',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'jpa-hibernate',
        name: 'JPA / Hibernate ORM',
        description:
          'Eliminates boilerplate SQL code and provides powerful query capabilities. Learn entities, relationships, JPQL, and Hibernate query methods.',
        docUrl:
          'https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html',
        videoUrl: 'Yv2xctJxE-w',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'spring-data-jpa',
        name: 'Spring Data JPA',
        description:
          'Repository pattern that auto-generates queries from method names. Reduces boilerplate and provides pagination, sorting, and custom queries easily.',
        docUrl: 'https://docs.spring.io/spring-data/jpa/docs/current/reference/html/',
        videoUrl: 'XszpJowPCl0',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'database-relationships',
        name: 'Database Relationships (1:1, 1:N, N:N)',
        description:
          'Mastering relationships is crucial for designing normalized schemas. Understand @OneToMany, @ManyToOne, @ManyToMany and their fetch strategies.',
        docUrl: 'https://hibernate.org/orm/documentation/6.4/',
        videoUrl: 'Yv2xctJxE-w',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'transactions',
        name: 'ACID Transactions & Transaction Management',
        description:
          'Ensures data consistency in concurrent environments. Critical for financial systems. Learn @Transactional, isolation levels, and propagation behaviors.',
        docUrl: 'https://www.postgresql.org/docs/current/tutorial-transactions.html',
        videoUrl: 'p0meEGB2-mY',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'query-optimization',
        name: 'Query Optimization & Indexing',
        description:
          'Proper indexing can improve query performance by orders of magnitude. Essential for production systems. Learn EXPLAIN plans, N+1 problems, and eager vs lazy loading.',
        docUrl: 'https://www.postgresql.org/docs/current/indexes.html',
        videoUrl: 'HubezKbFn3s',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'business-logic-layer',
        name: 'Business Logic Layer (BLL) & Service Pattern',
        description:
          'Separate business logic from data access and presentation layers. Learn service layer architecture, domain models, and how to organize business rules effectively.',
        docUrl: 'https://www.baeldung.com/spring-service-layer',
        videoUrl: 'JjTkPQUe6OQ',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'crud-deepdive',
        name: 'CRUD Operations Deep Dive',
        description:
          'Master Create, Read, Update, Delete operations with proper error handling, optimistic locking, soft deletes, and audit trails. Essential for robust data management.',
        docUrl:
          'https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories.query-methods',
        videoUrl: 'XszpJowPCl0',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'object-storage',
        name: 'Object Storage (S3, MinIO)',
        description:
          'Store files, images, and documents in cloud storage. Learn S3-compatible APIs, presigned URLs, multipart uploads, and CDN integration. Essential for modern applications.',
        docUrl: 'https://docs.aws.amazon.com/s3/',
        videoUrl: '77lMCiiMilo',
        label: 'Doc',
        completed: false,
      },
    ],
    videos: [
      {
        id: 'postgresql-course',
        title: 'PostgreSQL Complete Course',
        youtubeId: 'qw--VYLpxG4',
      },
      {
        id: 'hibernate-tutorial',
        title: 'Hibernate & JPA Tutorial',
        youtubeId: 'Yv2xctJxE-w',
      },
    ],
    eliteChallenge: {
      title: 'E-Commerce Backend System',
      description:
        'Build a complete e-commerce backend with product catalog, orders, inventory, and user management. Demonstrate mastery of ORM, transactions, and complex relationships.',
      mustHaveFeatures: [
        'Multi-table database schema with proper relationships',
        'JPA entities with bidirectional mappings',
        'Transaction management for order processing',
        'Optimized queries with proper indexes',
        'Database migration scripts (Flyway/Liquibase)',
        'Business logic layer with service pattern',
        'Complex queries with joins and aggregations',
      ],
    },
  },
  {
    id: 'phase-5',
    title: 'Phase 05: Advanced Features',
    coreConcepts: ['Authentication', 'Authorization', 'Caching', 'Message Queues', 'Security'],
    concepts: [
      {
        id: 'spring-security',
        name: 'Spring Security Fundamentals',
        description:
          'Comprehensive security framework protecting applications from common vulnerabilities. Authentication, authorization, CSRF protection, and session management.',
        docUrl: 'https://docs.spring.io/spring-security/reference/index.html',
        videoUrl: 'KxqlJblhzfI',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'jwt',
        name: 'JWT Authentication',
        description:
          'Stateless authentication standard for microservices. Enables scalable, distributed authentication without session storage. Industry standard for modern APIs.',
        docUrl: 'https://jwt.io/introduction',
        videoUrl: 'KxqlJblhzfI',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'oauth2',
        name: 'OAuth2 & Social Login',
        description:
          'Industry standard for authorization. Enables "Login with Google/GitHub" and secure third-party access to APIs. Essential for modern applications.',
        docUrl: 'https://oauth.net/2/',
        videoUrl: '996OiexHze0',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'rbac',
        name: 'Role-Based Access Control (RBAC)',
        description:
          'Implement fine-grained permissions. Users, roles, and permissions pattern. Critical for multi-tenant applications and enterprise systems.',
        docUrl: 'https://auth0.com/blog/role-based-access-control-rbac/',
        videoUrl: 'V4H_UVDQJlU',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'redis-caching',
        name: 'Redis Caching Strategy',
        description:
          'In-memory caching dramatically reduces database load and improves response times. Learn cache-aside, write-through patterns, and cache invalidation strategies.',
        docUrl: 'https://redis.io/docs/',
        videoUrl: 'OqCK95AS-YE',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'message-queues',
        name: 'Message Queues (RabbitMQ / Kafka)',
        description:
          'Asynchronous communication for decoupled systems. Learn pub/sub patterns, event-driven architecture, and how to handle eventual consistency.',
        docUrl: 'https://kafka.apache.org/documentation/',
        videoUrl: 'mPPhcU7oWDU',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'api-rate-limiting',
        name: 'Rate Limiting & Throttling',
        description:
          'Protect APIs from abuse and ensure fair usage. Implement rate limiting with Redis, bucket algorithms, and graceful degradation strategies.',
        docUrl: 'https://stripe.com/docs/rate-limits',
        videoUrl: 'FUOYU_HrGT4',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'task-queuing-scheduling',
        name: 'Task Queuing & Scheduling (Quartz, @Scheduled)',
        description:
          'Execute background jobs, scheduled tasks, and delayed operations. Learn Spring @Scheduled, Quartz Scheduler, and job persistence for reliable task execution.',
        docUrl:
          'https://docs.spring.io/spring-framework/docs/current/reference/html/integration.html#scheduling',
        videoUrl: 'f3hgd4bDcw4',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'webhooks',
        name: 'Webhooks & Event Notifications',
        description:
          'Implement webhook endpoints for third-party integrations. Learn event delivery, retries, signatures, and idempotency. Essential for SaaS integrations.',
        docUrl: 'https://webhooks.fyi/',
        videoUrl: '41NOoEz3Tzc',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'transactional-emails',
        name: 'Transactional Emails (SendGrid, AWS SES)',
        description:
          'Send reliable transactional emails (welcome, password reset, notifications) using email service providers. Learn templates, tracking, and delivery optimization.',
        docUrl: 'https://docs.sendgrid.com/',
        videoUrl: 'RMY4Nf9W8L4',
        label: 'Doc',
        completed: false,
      },
    ],
    videos: [
      {
        id: 'spring-security-jwt',
        title: 'Spring Security with JWT',
        youtubeId: 'KxqlJblhzfI',
      },
      {
        id: 'redis-caching',
        title: 'Redis Caching Patterns',
        youtubeId: 'OqCK95AS-YE',
      },
    ],
    eliteChallenge: {
      title: 'Social Media API Platform',
      description:
        'Build a secure, scalable social media API with JWT authentication, OAuth2 integration, role-based permissions, Redis caching, and message queue for notifications.',
      mustHaveFeatures: [
        'JWT-based authentication system',
        'OAuth2 social login (Google/GitHub)',
        'Role-based access control (Admin/User/Moderator)',
        'Redis caching for feeds and user data',
        'Message queue for async notifications',
        'Rate limiting on API endpoints',
        'Comprehensive security headers and CSRF protection',
      ],
    },
  },
  {
    id: 'phase-6',
    title: 'Phase 06: Cloud & Scale',
    coreConcepts: ['DevOps', 'Microservices', 'Kubernetes', 'CI/CD', 'Monitoring', 'System Design'],
    concepts: [
      {
        id: 'microservices',
        name: 'Microservices Architecture',
        description:
          'Decomposing monoliths into independent services enables scalability, fault isolation, and team autonomy. Learn service boundaries, communication patterns, and data management.',
        docUrl: 'https://microservices.io/patterns/microservices.html',
        videoUrl: 'mPPhcU7oWDU',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'docker',
        name: 'Docker & Containerization',
        description:
          'Packages applications with dependencies for consistent deployment across environments. Foundation of modern DevOps practices. Learn Dockerfile, multi-stage builds, and best practices.',
        docUrl: 'https://docs.docker.com/',
        videoUrl: 'fqMOX6JJhGo',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'kubernetes',
        name: 'Kubernetes (K8s) Orchestration',
        description:
          'Industry standard for container orchestration. Deploy, scale, and manage containerized applications. Learn Pods, Deployments, Services, and Ingress.',
        docUrl: 'https://kubernetes.io/docs/',
        videoUrl: 'd6WC5n9G_sM',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'spring-cloud',
        name: 'Spring Cloud Ecosystem',
        description:
          'Provides tools for building distributed systems: service discovery (Eureka), configuration server, API gateway, circuit breakers, and distributed tracing.',
        docUrl: 'https://spring.io/projects/spring-cloud',
        videoUrl: 'mPPhcU7oWDU',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'ci-cd',
        name: 'CI/CD with GitHub Actions',
        description:
          'Automates testing and deployment. Ensures code quality and enables rapid, reliable releases. Standard practice in modern teams. Learn pipelines, workflows, and deployment strategies.',
        docUrl: 'https://docs.github.com/en/actions',
        videoUrl: 'R8_veQiYBjI',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'monitoring',
        name: 'Monitoring & Observability (Prometheus, Grafana)',
        description:
          'Time-series database for metrics collection. Essential for understanding system performance and detecting issues before they impact users. Learn metrics, logging, and tracing.',
        docUrl: 'https://prometheus.io/docs/',
        videoUrl: 'h4Sl21AKiD4',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'system-design',
        name: 'System Design Principles',
        description:
          'Design scalable, reliable systems that handle millions of users. Core skill for senior backend engineers. Learn load balancing, caching layers, database sharding, and CAP theorem.',
        docUrl: 'https://github.com/donnemartin/system-design-primer',
        videoUrl: 'F2FmTdLtb_4',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'scaling',
        name: 'Horizontal & Vertical Scaling Strategies',
        description:
          'Scale applications to handle increased load. Learn horizontal scaling (multiple instances), vertical scaling (more resources), auto-scaling policies, and capacity planning.',
        docUrl:
          'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/',
        videoUrl: 'xpnMdD_sE-o',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'twelve-factor-app',
        name: '12-Factor App Methodology',
        description:
          'Best practices for building modern, scalable SaaS applications. Codebase, dependencies, config, backing services, build/release/run stages. Industry standard for cloud-native apps.',
        docUrl: 'https://12factor.net/',
        videoUrl: '8jsF_CN2Puc',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'graceful-shutdown',
        name: 'Graceful Shutdown & Health Checks',
        description:
          'Implement graceful shutdown to finish ongoing requests before termination. Health checks, readiness probes, and lifecycle management for zero-downtime deployments.',
        docUrl:
          'https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html#actuator.endpoints.health',
        videoUrl: '3kPBwQwG0FM',
        label: 'Doc',
        completed: false,
      },
      {
        id: 'observability',
        name: 'Observability (Metrics, Logs, Traces)',
        description:
          'Complete observability stack: metrics (Prometheus), logs (ELK/Loki), and distributed tracing (Jaeger/Zipkin). Understand the three pillars for production debugging and performance analysis.',
        docUrl: 'https://opentelemetry.io/docs/',
        videoUrl: 'h4Sl21AKiD4',
        label: 'Doc',
        completed: false,
      },
    ],
    videos: [
      {
        id: 'kubernetes-tutorial',
        title: 'Kubernetes Complete Tutorial',
        youtubeId: 'd6WC5n9G_sM',
      },
      {
        id: 'system-design',
        title: 'System Design Interview',
        youtubeId: 'F2FmTdLtb_4',
      },
    ],
    eliteChallenge: {
      title: 'Production-Ready Microservices Platform',
      description:
        'Build and deploy a production-ready system with microservices architecture, Docker containers, Kubernetes orchestration, CI/CD pipeline, monitoring, and comprehensive system design documentation.',
      mustHaveFeatures: [
        'Multiple microservices with clear boundaries',
        'Docker containers for each service',
        'Kubernetes deployment manifests (Deployments, Services, Ingress)',
        'CI/CD pipeline with automated testing and deployment',
        'Monitoring stack (Prometheus + Grafana)',
        'System design documentation with architecture diagrams',
        'Horizontal scaling configuration',
        'Health checks and liveness probes',
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
    name: 'IntelliJ IDEA Ultimate',
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
  {
    name: 'RedisInsight',
    url: 'https://redis.io/insight/',
    category: 'Tools',
  },
  {
    name: 'DBeaver',
    url: 'https://dbeaver.io/',
    category: 'Tools',
  },
  {
    name: 'kubectl',
    url: 'https://kubernetes.io/docs/tasks/tools/',
    category: 'Tools',
  },
];

export const TARGET_DATE = new Date('2026-12-31T23:59:59');
