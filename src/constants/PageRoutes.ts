export const PageRoutes = {
  Homepage: "/",
  AdminDashboard: "/dashboard",
  UserPage: "/user",
} as const;
export type PageRoute = (typeof PageRoutes)[keyof typeof PageRoutes];
