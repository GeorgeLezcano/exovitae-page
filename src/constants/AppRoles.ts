export const AppRoles = {
  Admin: "Admin",
  User: "User",
  Tester: "Tester",
} as const;
export type AppRoles = (typeof AppRoles)[keyof typeof AppRoles];
