import {
  BackendTechnologies,
  DatabaseTechnologies,
  ExtraBackendTechnologies,
} from "@/types/backend_technologies";

export const BACKEND_TECHNOLOGIES_LABEL = {
  [BackendTechnologies.express_js]: "Express.js (JavaScript)",
  [BackendTechnologies.fastify_js]: "Fastify.js (JavaScript)",
  [BackendTechnologies.express_ts]: "Express.js (TypeScript)",
  [BackendTechnologies.fastify_ts]: "Fastify.js (TypeScript)",
  [BackendTechnologies.nest]: "Nest.js (TypeScript)",
  [BackendTechnologies.spring_boot]: "Spring Boot (Java)",
  [BackendTechnologies.flask]: "Flask (Python)",
  [BackendTechnologies.django]: "Django (Python)",
  [BackendTechnologies.laravel]: "Laravel (PHP)",
  [BackendTechnologies.gin]: "Gin (Go)",
  [BackendTechnologies.dot_net]: ".NET (C#)",
};

export const BACKEND_EXTRA_TECHNOLOGIES_LABEL = {
  [ExtraBackendTechnologies.authentication]: "Autenticação",
  [ExtraBackendTechnologies.docker]: "Docker",
  [ExtraBackendTechnologies.rest_api]: "API REST",
  [ExtraBackendTechnologies.graphql]: "GraphQL",
  [ExtraBackendTechnologies.websocket]: "WebSocket",
  [ExtraBackendTechnologies.stripe]: "Stripe",
  [ExtraBackendTechnologies.rabbitmq]: "RabbitMQ",
  [ExtraBackendTechnologies.kafka]: "Kafka",
  [ExtraBackendTechnologies.redis]: "Redis",
};

export const DATABASE_TECHNOLOGIES_LABEL = {
  [DatabaseTechnologies.postgresql]: "PostgreSQL",
  [DatabaseTechnologies.mysql]: "MySQL",
  [DatabaseTechnologies.mongodb]: "MongoDB",
  [DatabaseTechnologies.sqlite]: "SQLite",
  [DatabaseTechnologies.sqlserver]: "SQL Server",
  [DatabaseTechnologies.redis]: "Redis",
  [DatabaseTechnologies.none]: "Não utilizarei banco de dados",
};
