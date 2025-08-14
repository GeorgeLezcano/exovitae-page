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

  const redirectSearch = createSearchParams({
    tab: SideButtonRoutes.Login,
  }).toString();
  const to = { pathname: PageRoutes.Homepage, search: `?${redirectSearch}` };

  return (
    <Navigate
      to={to}
      replace
      state={{ from: location.pathname + location.search }}
    />
  );
}
