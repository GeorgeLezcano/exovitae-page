import { useState } from "react";
import { sideBarItemList } from "../../constants/SideBarItemList";
import "../../styles/main-layout.css";
import { InfoView } from "../elements/InfoView";
import { Logo } from "../elements/Logo";
import { SideBar } from "../elements/SideBar";
import { SideBarItem } from "../elements/SideBarItem";
import { SideButtonRoutes } from "../../constants/SideButtonRoutes";
import GameOverviewSection from "../sections/GameOverviewSection";
import FeaturesSection from "../sections/FeaturesSection";
import MediaSection from "../sections/MediaSection";
import FAQSection from "../sections/FAQSection";
import FeedBackSection from "../sections/FeedBackSection";
import AboutSection from "../sections/AboutSection";
import { AnimatedHeader } from "../elements/AnimatedHeader";

export function MainLayout() {
  const [selectedSection, setSelectedSection] = useState<string>(
    SideButtonRoutes.GameOverview
  );

  const handleSideButtonOnClick = (linkTo: string) => {
    setSelectedSection(linkTo);
  };

  const renderSection = () => {
    switch (selectedSection) {
      case SideButtonRoutes.GameOverview:
        return <GameOverviewSection />;
      case SideButtonRoutes.Features:
        return <FeaturesSection />;
      case SideButtonRoutes.Media:
        return <MediaSection />;
      case SideButtonRoutes.FAQ:
        return <FAQSection />;
      case SideButtonRoutes.Feedback:
        return <FeedBackSection />;
      case SideButtonRoutes.About:
        return <AboutSection />;
      default:
        return <h1>Not Found</h1>;
    }
  };

  return (
    <div className="main-layout">
      <SideBar className="side-bar">
        <div
          style={{
            marginBottom: "3rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Logo size={"100%"} />
        </div>

        {sideBarItemList.map((item) => (
          <SideBarItem
            className={`sideBarItemButton`}
            key={item.name}
            name={item.name}
            onClick={() => {
              handleSideButtonOnClick(item.linkTo);
            }}
            disabled={item.disabled}
            tooltip={item.tooltip}
          />
        ))}
      </SideBar>

      <div className="info-panel">
        <AnimatedHeader height="40vh"></AnimatedHeader>
        <InfoView className="details-view">{renderSection()}</InfoView>
      </div>
    </div>
  );
}
