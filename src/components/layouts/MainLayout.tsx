import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { sideBarItemList } from "../../constants/SideBarItemList";
import "../../styles/main-layout.css";
import { InfoView } from "../common/InfoView";
import { Logo } from "../common/Logo";
import { SideBar } from "../common/SideBar";
import { SideBarItem } from "../common/SideBarItem";
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
        { tab: SideButtonRoutes.Login },
        { replace: true }
      );
    }
  }, [isValid, setSearchParams]);

  const selected = isValid
    ? (tabParamRaw as (typeof validRoutes)[number])
    : SideButtonRoutes.Login;

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
        <footer className="menu-footer">
          <div>© {new Date().getFullYear()} Exovitae</div>
        </footer>
      </SideBar>

      <div className="info-panel">
        <AnimatedHeader height="40vh" />
        <InfoView className="details-view">{renderSection()}</InfoView>
      </div>
    </div>
  );
}
