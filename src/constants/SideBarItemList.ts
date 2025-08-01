import { PageRoutes } from "./PageRoutes";

export type SideBarItemList = {
  name: string;
  linkTo: string;
  disabled?: boolean;
  tooltip?: string;
};

export const sideBarItemList: SideBarItemList[] = [
  { name: "Home", linkTo: PageRoutes.Homepage, tooltip: "Home Page"},
  { name: "FAQ", linkTo: "", tooltip: "Frequently Asked Questions"},
];
