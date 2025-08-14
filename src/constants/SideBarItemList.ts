import { SideButtonRoutes } from "./SideButtonRoutes";

export type SideBarItem = {
  name: string;
  linkTo: SideButtonRoutes;
  disabled?: boolean;
  tooltip?: string;
};

export const sideBarItemList = [
  { name: "Login", linkTo: SideButtonRoutes.Login, disabled: false },
  {
    name: "Game Overview",
    linkTo: SideButtonRoutes.GameOverview,
    disabled: false,
  },
  { name: "Features", linkTo: SideButtonRoutes.Features, disabled: false },
  { name: "Media", linkTo: SideButtonRoutes.Media, disabled: false },
  {
    name: "FAQ",
    linkTo: SideButtonRoutes.FAQ,
    tooltip: "Frequently Asked Questions",
    disabled: false,
  },
  { name: "Feedback", linkTo: SideButtonRoutes.Feedback, disabled: false },
  { name: "About", linkTo: SideButtonRoutes.About, disabled: false },
] satisfies ReadonlyArray<SideBarItem>;
