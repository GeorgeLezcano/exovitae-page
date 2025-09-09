import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { api } from "../../../api/client";
import { useAuth } from "../../../auth/AuthContext";
import { PageRoutes } from "../../../constants/PageRoutes";
import { Endpoints } from "../../../constants/Endpoints";
import type { LoginRequest, LoginResponse } from "../../../types/login";
import { AppRoles } from "../../../constants/AppRoles";

const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MaxAllowedCharacters = 64;

export default function LoginSection() {
  const nav = useNavigate();
  const location = useLocation();
  const { setToken, setUsername, setRole } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");
    setGeneralError("");
    setLoading(true);

    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setEmailError("Email is required.");
    } else if (cleanEmail.length > MaxAllowedCharacters) {
      setEmailError("Email is too long.");
    } else if (!EmailRegex.test(cleanEmail)) {
      setEmailError("Email format is invalid.");
    }

    if (!password) {
      setPasswordError("Password is required.");
    } else if (password.length > MaxAllowedCharacters) {
      setPasswordError("Password is too long.");
    }

    if (
      !cleanEmail ||
      !password ||
      cleanEmail.length > MaxAllowedCharacters ||
      password.length > MaxAllowedCharacters
    ) {
      setLoading(false);
      return;
    }

    try {
      const res = await api.post<LoginResponse, LoginRequest>(Endpoints.Login, {
        email: cleanEmail,
        password,
      });

      if (!res.token) {
        setGeneralError("Login succeeded but no token was returned.");
        return;
      }

      setToken(res.token);
      setUsername(res.username ?? null);
      setRole(res.role ?? null);

      const role = res.role ?? "";
      const from = (location.state as { from?: string } | null)?.from;

      if (from) {
        nav(from, { replace: true });
      } else if (role === AppRoles.Admin) {
        nav(PageRoutes.AdminDashboard, { replace: true });
      } else {
        nav(PageRoutes.UserPage, { replace: true });
      }
    } catch (err: unknown) {
      const anyErr = err as { response?: { data?: any; status?: number } };

      if (anyErr?.response?.status === 400 && anyErr.response.data?.errors) {
        const errors = anyErr.response.data.errors as Record<string, string[]>;
        if (errors.email?.length) setEmailError(errors.email[0]);
        if (errors.password?.length) setPasswordError(errors.password[0]);
        if (errors.general?.length) setGeneralError(errors.general[0]);
        if (
          !errors.email?.length &&
          !errors.password?.length &&
          !errors.general?.length
        ) {
          setGeneralError("Invalid input.");
        }
      } else if (anyErr?.response?.status === 401) {
        setGeneralError("Invalid email or password.");
      } else {
        setGeneralError("Login failed. Please try again.");
      }

      setPassword("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sectionShell flushTop">
      <section className="sectionCard">
        <h1 className="pageTitle">Login</h1>
        <p className="pageSubtitle">No public accounts yet, stay tuned</p>
        <div className="accentDivider" />

        <div className="formColumn formColumnWide">
          <div className="field">
            <input
              className={`inputField ${emailError ? "inputError" : ""}`}
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={!!emailError}
              aria-describedby="email-error"
              maxLength={MaxAllowedCharacters}
            />
            <span id="email-error" className="errorFloat">
              {emailError}
            </span>
          </div>

          <div className="field">
            <input
              className={`inputField ${passwordError ? "inputError" : ""}`}
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={!!passwordError}
              aria-describedby="password-error"
              maxLength={MaxAllowedCharacters}
            />
            <span id="password-error" className="errorFloat">
              {passwordError}
            </span>
          </div>

          <button
            onClick={handleLogin}
            className="sectionButton"
            style={{ alignSelf: "center" }}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="generalErrorSlot" role="alert">
            {loading ? (
              <span className="spinner"></span>
            ) : (
              generalError && <span className="errorText">{generalError}</span>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
