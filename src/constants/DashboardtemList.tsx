import { DashBoardButtonRoutes } from "./DashBoardButtonRoutes";

export type DashboardItem = {
  name: string;
  linkTo: DashBoardButtonRoutes;
  disabled?: boolean;
  tooltip?: string;
};

export const dashboardItemList = [
    {name: "Overview", linkTo: DashBoardButtonRoutes.Overview, disabled: false},
    {name: "Manage Feedback", linkTo: DashBoardButtonRoutes.FeedBack, disabled: false}
 
] satisfies ReadonlyArray<DashboardItem>;
