export const DashBoardButtonRoutes = {
  Overview: "overview",
  FeedBack: "feedback",
  Files: "files"
} as const;

export type DashBoardButtonRoutes =
  (typeof DashBoardButtonRoutes)[keyof typeof DashBoardButtonRoutes];
