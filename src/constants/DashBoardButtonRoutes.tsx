export const DashBoardButtonRoutes = {
  Overview: "overview",
  FeedBack: "feedback"
} as const;

export type DashBoardButtonRoutes =
  (typeof DashBoardButtonRoutes)[keyof typeof DashBoardButtonRoutes];
