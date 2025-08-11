
export const SideButtonRoutes = {
  GameOverview: "game-overview",
  Features: "features",
  Media: "media",
  FAQ: "faq",
  Feedback: "feedback",
  About: "about",
  Login: "login"
} as const;

export type SideButtonRoutes = typeof SideButtonRoutes[keyof typeof SideButtonRoutes];