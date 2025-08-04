
export const SideButtonRoutes = {
  GameOverview: "game-overview",
  Features: "features",
  Media: "media",
  FAQ: "faq",
  Feedback: "feedback",
  About: "about"
} as const;

export type SideButtonRoutes = typeof SideButtonRoutes[keyof typeof SideButtonRoutes];