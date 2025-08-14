export const PageRoutes = {
  Homepage: "/exovitae-page/",
  Dashboard: "/exovitae-page/dashboard",
} as const;
export type PageRoute = typeof PageRoutes[keyof typeof PageRoutes];
