import {
  Navigate,
  Outlet,
  useLocation,
  createSearchParams,
} from "react-router-dom";
import { useAuth } from "./AuthContext";
import { PageRoutes } from "../constants/PageRoutes";
import { SideButtonRoutes } from "../constants/SideButtonRoutes";

export default function ProtectedRoute() {
  const { token } = useAuth();
  const location = useLocation();

  if (token) return <Outlet />;

  return (
    <Navigate
      to={{
        pathname: PageRoutes.Homepage,
        search: `?${createSearchParams({ tab: SideButtonRoutes.Login })}`,
      }}
      replace
      state={{ from: location.pathname + location.search }}
    />
  );
}
