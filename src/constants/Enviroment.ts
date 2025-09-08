export const Environment = {
  Development: "http://localhost:5000",
  Production: "https://api.exovitae.net",
  GameServerDev: "http://localhost:5080"
} as const;

export type Enviroment =
  (typeof Environment)[keyof typeof Environment];
