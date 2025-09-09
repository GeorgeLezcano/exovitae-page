import { createSearchParams } from "react-router-dom";
import { setAuthToken } from "../../api/client";
import { PageRoutes } from "../../constants/PageRoutes";
import { SideButtonRoutes } from "../../constants/SideButtonRoutes";

export default function UserLayout() {
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
  return (
    <div className="main-layout">
      <section className="info-panel">
        <header className="header" style={{ minHeight: 96 }}>
          <h1 style={{ margin: 0 }}>Welcome</h1>
          <p style={{ opacity: 0.8 }}>
            This is the user section. We’ll add content here later.
          </p>
        </header>
        <div className="details-view">
          <h2>User Home</h2>
          <p>Blank for now, just a header—wired for future expansion.</p>
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
function setToken(arg0: null) {
  throw new Error(`Function not implemented.${arg0}`);
}

function setUsername(arg0: null) {
  throw new Error(`Function not implemented.${arg0}`);
}
