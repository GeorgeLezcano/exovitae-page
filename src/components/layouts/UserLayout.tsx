import { createSearchParams } from "react-router-dom";
import { setAuthToken } from "../../api/client";
import { PageRoutes } from "../../constants/PageRoutes";
import { SideButtonRoutes } from "../../constants/SideButtonRoutes";
import { useAuth } from "../../auth/AuthContext";
import ResetPasswordModal from "../common/ResetPasswordModal";
import { useState } from "react";
import ProfileAvatar from "../common/ProfileAvatar";

export default function UserLayout() {
  const { username, setToken, setUsername, setRole } = useAuth();
  const [pwOpen, setPwOpen] = useState(false);

  const handleLogout = () => {
    setAuthToken(null);
    setToken(null);
    setUsername(null);
    setRole(null);

    const qs = createSearchParams({ tab: SideButtonRoutes.Login }).toString();
    window.location.assign(`${PageRoutes.Homepage}?${qs}`);
  };

  const displayName = username
    ? username.split(".")[0].charAt(0).toUpperCase() +
      username.split(".")[0].slice(1)
    : "";

  return (
    <div className="main-layout">
      <section className="info-panel">
        <header className="header" style={{ minHeight: 96 }}>
          <ProfileAvatar />
          <h1 style={{ margin: 0, paddingBottom: 12 }}>
            Welcome {displayName}
          </h1>
          <button
            type="button"
            className="animatedButton playNow"
            onClick={() => {
              //TODO add client download logic
              alert("Client not available for downlaod yet");
            }}
          >
            Download Game Client
          </button>
        </header>
        <div className="details-view">
          <h2>This page is under developmenet</h2>
          <button
            className="sectionButton"
            onClick={() => setPwOpen(true)}
            aria-label="Reset password"
            title="Reset password"
          >
            Reset Password
          </button>
          <br />
          <button
            className="sectionButton"
            onClick={handleLogout}
            aria-label="Logout"
            title="Logout"
          >
            Logout
          </button>
        </div>
      </section>

      <ResetPasswordModal open={pwOpen} onClose={() => setPwOpen(false)} />
    </div>
  );
}
