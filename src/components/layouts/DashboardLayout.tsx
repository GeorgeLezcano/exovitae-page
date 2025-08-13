import { useNavigate, createSearchParams } from "react-router-dom";
import { setAuthToken } from "../../api/client";
import { useAuth } from "../../auth/AuthContext";
import { PageRoutes } from "../../constants/PageRoutes";
import { SideButtonRoutes } from "../../constants/SideButtonRoutes";

export default function DashboardLayout() {
  const nav = useNavigate();
  const { setToken } = useAuth();

  const handleLogout = () => {
    setAuthToken(null);
    setToken(null);

    nav(
      {
        pathname: PageRoutes.Homepage,
        search: `?${createSearchParams({ tab: SideButtonRoutes.Login })}`,
      },
      { replace: true }
    );
  };

  return (
    <div>
      <h1>Dashboard (Private)</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
