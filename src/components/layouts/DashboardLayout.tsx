import { useEffect, useState } from "react";
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
import HealthStatus from "../elements/HealthStatus";
import RegistrationSection from "../sections/DashboardSections/RegistrationSection";
import UserManagementSection from "../sections/DashboardSections/UserManagementSection";
import ResetPasswordModal from "../elements/ResetPasswordModal"; // <-- NEW

export default function DashboardLayout() {
  const { setToken, username, setUsername, role } = useAuth();
  const isAdmin = (role || "").toLowerCase() === "admin";

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
    setUsername(null);
    window.location.assign(
      `${PageRoutes.Homepage}?${createSearchParams({
        tab: SideButtonRoutes.Login,
      })}`
    );
  };

  const renderSection = () => {
    switch (selected) {
      case DashBoardButtonRoutes.Overview:
        return (
          <OverviewSection
            username={
              username
                ? username.charAt(0).toUpperCase() + username.slice(1)
                : null
            }
          />
        );
      case DashBoardButtonRoutes.FeedBack:
        return <ManageFeedbackSection />;
      case DashBoardButtonRoutes.Files:
        return <ManageFilesSection />;
      case DashBoardButtonRoutes.Register:
        return <RegistrationSection />;
      case DashBoardButtonRoutes.Users:
        return <UserManagementSection />;
      default:
        return <h1>Not Found</h1>;
    }
  };

  const [pwOpen, setPwOpen] = useState(false);

  return (
    <div className="main-layout">
      <aside className="side-bar">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <img
            src="default_profile_icon.png"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              marginBottom: "0.5rem",
              border: "2px solid #2196f3",
            }}
            alt="Profile"
          />
          <div style={{ fontSize: "1rem", fontWeight: "bold", color: "#fff" }}>
            <div
              style={{ fontSize: "1rem", fontWeight: "bold", color: "#fff" }}
            >
              {username
                ? username.charAt(0).toUpperCase() + username.slice(1)
                : ""}
            </div>
          </div>
        </div>

        {dashboardItemList
          .filter((item: DashboardItem) =>
            isAdmin
              ? true
              : item.linkTo !== DashBoardButtonRoutes.Users &&
                item.linkTo !== DashBoardButtonRoutes.Register
          )
          .map((item: DashboardItem) => (
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

      <section className="info-panel">
        <header
          className="header"
          style={{ width: "100%", position: "relative", minHeight: 96 }}
        >
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              zIndex: 10,
              display: "flex",
              gap: 8,
            }}
          >
            <button
              className="sectionButton"
              onClick={handleLogout}
              aria-label="Logout"
              title="Logout"
            >
              Logout
            </button>
            <button
              className="sectionButton"
              onClick={() => setPwOpen(true)}
              aria-label="Reset password"
              title="Reset password"
            >
              Reset Password
            </button>
          </div>
          <HealthStatus />
        </header>

        <div className="details-view">{renderSection()}</div>
      </section>

      <ResetPasswordModal open={pwOpen} onClose={() => setPwOpen(false)} />
    </div>
  );
}
