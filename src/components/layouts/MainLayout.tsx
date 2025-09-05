import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { sideBarItemList } from "../../constants/SideBarItemList";
import "../../styles/main-layout.css";
import { InfoView } from "../elements/InfoView";
import { Logo } from "../elements/Logo";
import { SideBar } from "../elements/SideBar";
import { SideBarItem } from "../elements/SideBarItem";
import { SideButtonRoutes } from "../../constants/SideButtonRoutes";
import GameOverviewSection from "../sections/MainPageSections/GameOverviewSection";
import FeaturesSection from "../sections/MainPageSections/FeaturesSection";
import MediaSection from "../sections/MainPageSections/MediaSection";
import FAQSection from "../sections/MainPageSections/FAQSection";
import FeedBackSection from "../sections/MainPageSections/FeedBackSection";
import AboutSection from "../sections/MainPageSections/AboutSection";
import { AnimatedHeader } from "../elements/AnimatedHeader";
import LoginSection from "../sections/MainPageSections/LoginSection";

export function MainLayout() {
  const [searchParams, setSearchParams] = useSearchParams();

  const tabParamRaw = (searchParams.get("tab") || "").toLowerCase();
  const validRoutes = Object.values(SideButtonRoutes);
  const isValid = validRoutes.includes(
    tabParamRaw as (typeof validRoutes)[number]
  );

  useEffect(() => {
    if (!isValid) {
      setSearchParams(
        { tab: SideButtonRoutes.GameOverview },
        { replace: true }
      );
    }
  }, [isValid, setSearchParams]);

  const selected = isValid
    ? (tabParamRaw as (typeof validRoutes)[number])
    : SideButtonRoutes.GameOverview;

  const handleSideButtonOnClick = (linkTo: (typeof validRoutes)[number]) => {
    setSearchParams({ tab: linkTo }, { replace: true });
  };

  const renderSection = () => {
    switch (selected) {
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
      case SideButtonRoutes.Login:
        return <LoginSection />;
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
            className={`sideBarItemButton ${
              selected === item.linkTo ? "selected" : ""
            }`}
            key={item.name}
            name={item.name}
            onClick={() => handleSideButtonOnClick(item.linkTo)}
            disabled={item.disabled}
            tooltip={item.tooltip}
          />
        ))}
      </SideBar>

      <div className="info-panel">
        <AnimatedHeader height="40vh" />
        <InfoView className="details-view">{renderSection()}</InfoView>
      </div>
    </div>
  );
}
