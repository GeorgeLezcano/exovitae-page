
export const PageRoutes = {
  Homepage: "/exovitae-page/",
} as const;

export type PageRoute = typeof PageRoutes[keyof typeof PageRoutes];