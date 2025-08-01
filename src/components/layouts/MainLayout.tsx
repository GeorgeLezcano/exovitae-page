import "../../styles/main-layout.css";
import { Header } from "../elements/Header";
import { InfoView } from "../elements/InfoView";
import { Logo } from "../elements/Logo";
import { SideBar } from "../elements/SideBar";

export function MainLayout() {
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
          <Logo size={150} />
        </div>

        {/* TODO: Side bar content */}
        <h2>Temp Item 1</h2>
        <h2>Temp Item 2</h2>
        <h2>Temp item 3</h2>
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
