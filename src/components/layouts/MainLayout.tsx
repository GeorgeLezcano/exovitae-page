import { useState } from "react";
import { sideBarItemList } from "../../constants/SideBarItemList";
import "../../styles/main-layout.css";
import { Header } from "../elements/Header";
import { InfoView } from "../elements/InfoView";
import { Logo } from "../elements/Logo";
import { SideBar } from "../elements/SideBar";
import { SideBarItem } from "../elements/SideBarItem";
import { SideButtonRoutes } from "../../constants/SideButtonRoutes";

export function MainLayout() {
  const [selectedSection, setSelectedSection] = useState<string>(SideButtonRoutes.GameOverview);

  const handleSideButtonOnClick = (linkTo: string) => {
    setSelectedSection(linkTo);
  };

  const renderSection = () => {
  switch (selectedSection) {
    case SideButtonRoutes.GameOverview:
      return <h1>Game Overview</h1>;
    case SideButtonRoutes.Features:
      return <h1>Features</h1>;
    case SideButtonRoutes.Media:
      return <h1>Media</h1>;
    case SideButtonRoutes.FAQ:
      return <h1>FAQ</h1>;
    case SideButtonRoutes.Feedback:
      return <h1>FeedBack</h1>;
    case SideButtonRoutes.About:
      return <h1>About</h1>;
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
        <Header className="header">
          {/* TODO Add header content */}
        </Header>

        <InfoView className="details-view">
          {renderSection()}
        </InfoView>
      </div>
    </div>
  );
}
