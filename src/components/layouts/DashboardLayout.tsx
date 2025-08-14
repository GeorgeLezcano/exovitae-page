import { useEffect } from "react";
import { useSearchParams, createSearchParams } from "react-router-dom";
import { setAuthToken } from "../../api/client";
import { useAuth } from "../../auth/AuthContext";
import { PageRoutes } from "../../constants/PageRoutes";
import { SideButtonRoutes } from "../../constants/SideButtonRoutes";

import { DashBoardButtonRoutes } from "../../constants/DashBoardButtonRoutes";
import {
  dashboardItemList,
  type DashboardItem,
} from "../../constants/DashboardtemList";
import OverviewSection from "../sections/DashboardSections/OverviewSection";
import ManageFeedbackSection from "../sections/DashboardSections/ManageFeedbackSection";
import ManageFilesSection from "../sections/DashboardSections/ManageFilesSection";

export default function DashboardLayout() {
  const { setToken } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  const tabParamRaw = (searchParams.get("tab") || "").toLowerCase();
  const validRoutes = Object.values(DashBoardButtonRoutes);
  const isValid = validRoutes.includes(
    tabParamRaw as (typeof validRoutes)[number]
  );

  useEffect(() => {
    if (!isValid) {
      setSearchParams(
        { tab: DashBoardButtonRoutes.Overview },
        { replace: true }
      );
    }
  }, [isValid, setSearchParams]);

  const selected = isValid
    ? (tabParamRaw as (typeof validRoutes)[number])
    : DashBoardButtonRoutes.Overview;

  const handleSideButtonOnClick = (linkTo: (typeof validRoutes)[number]) => {
    setSearchParams({ tab: linkTo }, { replace: true });
  };

  const handleLogout = () => {
    setAuthToken(null);
    setToken(null);
    window.location.assign(
      `${PageRoutes.Homepage}?${createSearchParams({
        tab: SideButtonRoutes.Login,
      })}`
    );
  };

  const renderSection = () => {
    switch (selected) {
      case DashBoardButtonRoutes.Overview:
        return <OverviewSection />;
      case DashBoardButtonRoutes.FeedBack:
        return <ManageFeedbackSection />;
      case DashBoardButtonRoutes.Files:
        return <ManageFilesSection />;
      default:
        return <h1>Not Found</h1>;
    }
  };

  return (
    <div className="main-layout">
      {/* Sidebar */}
      <aside className="side-bar">
        {/* Profile */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <img
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              marginBottom: "0.5rem",
              border: "2px solid #2196f3",
            }}
          />
          <div style={{ fontSize: "1rem", fontWeight: "bold", color: "#fff" }}>
            User Name
          </div>
        </div>

        {dashboardItemList.map((item: DashboardItem) => (
          <button
            key={item.name}
            className={`sideBarItemButton ${
              selected === item.linkTo ? "selected" : ""
            }`}
            onClick={() => handleSideButtonOnClick(item.linkTo)}
            disabled={item.disabled}
            title={item.tooltip}
            style={{ marginBottom: "2rem" }}
          >
            {item.name}
          </button>
        ))}
      </aside>

      {/* Right panel */}
      <section className="info-panel">
        {/* Header */}
        <header className="header" style={{ width: "100%" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div style={{ flex: 1 }}>Header stuff here</div>

            <button
              className="sectionButton"
              onClick={handleLogout}
              aria-label="Logout"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="details-view">{renderSection()}</div>
      </section>
    </div>
  );
}
