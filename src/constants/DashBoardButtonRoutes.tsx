export const DashBoardButtonRoutes = {
  Overview: "overview",
  FeedBack: "feedback",
  Files: "files",
  Register: "register",
  Users: "users"

} as const;

export type DashBoardButtonRoutes =
  (typeof DashBoardButtonRoutes)[keyof typeof DashBoardButtonRoutes];
