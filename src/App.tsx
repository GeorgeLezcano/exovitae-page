import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PageRoutes } from "./constants/PageRoutes";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import { Home } from "./pages/Home";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PageRoutes.Homepage} element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path={PageRoutes.Dashboard} element={<Dashboard />} />
          </Route>
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} />
      </BrowserRouter>
    </AuthProvider>
  );
}
