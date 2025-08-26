export const Enviroment = {
  Development: "http://localhost:5000",
  Production: "https://api.exovitae.net"
} as const;

export type Enviroment =
  (typeof Enviroment)[keyof typeof Enviroment];
