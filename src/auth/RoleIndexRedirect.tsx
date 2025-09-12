import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { PageRoutes } from "../constants/PageRoutes";
import { AppRoles } from "../constants/AppRoles";

export default function RoleIndexRedirect() {
  const { role } = useAuth();
  const location = useLocation();

  const r = (role || "").toLowerCase();
  const to =
    r === AppRoles.Admin ? PageRoutes.AdminDashboard : PageRoutes.UserPage;

  return <Navigate to={{ pathname: to, search: location.search }} replace />;
}
