import { createSearchParams } from "react-router-dom";
import { setAuthToken } from "../../api/client";
import { PageRoutes } from "../../constants/PageRoutes";
import { SideButtonRoutes } from "../../constants/SideButtonRoutes";
import { useAuth } from "../../auth/AuthContext";

export default function UserLayout() {
  const { username, setToken, setUsername, setRole } = useAuth();

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
          <h1 style={{ margin: 0 }}>Welcome {displayName}</h1>
          <p style={{ opacity: 0.8 }}>This is the user section</p>
        </header>
        <div className="details-view">
          <h2>User Home</h2>
          <p>Blank for now...</p>
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
    </div>
  );
}
