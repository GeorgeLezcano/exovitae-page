export const Endpoints = {
  Files: "/api/files",
  Health: "/api/health",
  ResetPassword: "/api/auth/me/password",
  Feedback: "/api/feedback",
  Users: "/api/auth/users",
  Register: "/api/auth/register",
  SetRole: "/api/auth/set-role",
  UserEnabled: "/api/auth/set-enabled",
  Login: "/api/auth/login"
} as const;

export type Endpoints =
  (typeof Endpoints)[keyof typeof Endpoints];
