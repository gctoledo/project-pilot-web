export const BackendTechnologies = {
  express_js: "express-js",
  fastify_js: "fastify-js",
  express_ts: "express-ts",
  fastify_ts: "fastify-ts",
  nest: "nest",
  spring_boot: "spring-boot",
  flask: "flask",
  django: "django",
  laravel: "laravel",
  gin: "gin",
  dot_net: "dot-net",
} as const;

export const ExtraBackendTechnologies = {
  docker: "docker",
  rest_api: "rest-api",
  graphql: "graphql",
  websocket: "websocket",
  authentication: "authentication",
  stripe: "stripe",
  rabbitmq: "rabbitmq",
  kafka: "kafka",
  redis: "redis",
} as const;

export const DatabaseTechnologies = {
  none: "none",
  postgresql: "postgresql",
  mysql: "mysql",
  mongodb: "mongodb",
  sqlite: "sqlite",
  sqlserver: "sqlserver",
  redis: "redis",
} as const;

export type BackendTechnologies =
  (typeof BackendTechnologies)[keyof typeof BackendTechnologies];

export type ExtraBackendTechnologies =
  (typeof ExtraBackendTechnologies)[keyof typeof ExtraBackendTechnologies];

export type DatabaseTechnologies =
  (typeof DatabaseTechnologies)[keyof typeof DatabaseTechnologies];
