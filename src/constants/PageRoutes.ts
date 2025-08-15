export const PageRoutes = {
  Homepage: "/",
  Dashboard: "/dashboard",
} as const;
export type PageRoute = typeof PageRoutes[keyof typeof PageRoutes];
