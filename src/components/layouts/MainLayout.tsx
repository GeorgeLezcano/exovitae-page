
import { sideBarItemList } from "../../constants/SideBarItemList";
import "../../styles/main-layout.css";
import { Header } from "../elements/Header";
import { InfoView } from "../elements/InfoView";
import { Logo } from "../elements/Logo";
import { SideBar } from "../elements/SideBar";
import { SideBarItem } from "../elements/SideBarItem";
import { useNavigate } from "react-router-dom";

export function MainLayout() {
  const navigate = useNavigate();

  const handleSideButtonOnClick = (linkTo: string) => {
    navigate(linkTo);
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
          {/* TODO: Header content*/}
          <h1>Header Section</h1>
        </Header>

        <InfoView className="details-view">
          {/* TODO: Tab content */}
          <h1>Details Section</h1>
        </InfoView>
      </div>
    </div>
  );
}
