import { DashBoardButtonRoutes } from "./DashBoardButtonRoutes";

export type DashboardItem = {
  name: string;
  linkTo: DashBoardButtonRoutes;
  disabled?: boolean;
  tooltip?: string;
};

export const dashboardItemList = [
    {name: "Overview", linkTo: DashBoardButtonRoutes.Overview, disabled: false},
    {name: "Manage Feedback", linkTo: DashBoardButtonRoutes.FeedBack, disabled: false},
    {name: "Game Client", linkTo: DashBoardButtonRoutes.GameClient, disabled: false},
    {name: "Manage Files", linkTo: DashBoardButtonRoutes.Files, disabled: false},
    {name: "User Registration", linkTo: DashBoardButtonRoutes.Register, disabled: false},
    {name: "User Management", linkTo: DashBoardButtonRoutes.Users, disabled: false}
 
] satisfies ReadonlyArray<DashboardItem>;
