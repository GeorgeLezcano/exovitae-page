import { SideButtonRoutes } from "./SideButtonRoutes";


export type SideBarItemList = {
  name: string;
  linkTo: string;
  disabled?: boolean;
  tooltip?: string;
};

export const sideBarItemList: SideBarItemList[] = [
  {name: "Login", linkTo: SideButtonRoutes.Login},
  {name: "Game Overview", linkTo: SideButtonRoutes.GameOverview},
  {name: "Features", linkTo: SideButtonRoutes.Features},
  {name: "Media", linkTo: SideButtonRoutes.Media},
  {name: "FAQ", linkTo: SideButtonRoutes.FAQ, tooltip: "Frequently Asked Questions"},
  {name: "Feedback", linkTo: SideButtonRoutes.Feedback},
  {name: "About", linkTo: SideButtonRoutes.About}
];