import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, setAuthToken } from "../../api/client";
import { useAuth } from "../../auth/AuthContext";
import { PageRoutes } from "../../constants/PageRoutes";

type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string | null;
  username: string | null;
};

const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MaxAllowedCharaters = 64;

export default function LoginSection() {
  const nav = useNavigate();
  const { setToken, setUsername } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const cleanEmail = email.trim();

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");
    setGeneralError("");
    setLoading(true);

    if (!cleanEmail) {
      setEmailError("Email is required.");
    } else if (cleanEmail.length > MaxAllowedCharaters) {
      setEmailError("Email is too long");
    } else if (!EmailRegex.test(cleanEmail)) {
      setEmailError("Email format is invalid.");
    }

    if (!password) {
      setPasswordError("Password is required.");
    } else if (password.length > MaxAllowedCharaters) {
      setPasswordError("Password is too long.");
    }

    if (
      !cleanEmail ||
      !password ||
      cleanEmail.length > MaxAllowedCharaters ||
      password.length > MaxAllowedCharaters
    ) {
      setLoading(false);
      return;
    }

    try {
      const res = await api.post<LoginResponse, LoginRequest>(
        "/api/auth/login",
        {
          email: cleanEmail,
          password,
        }
      );

      if (!res.token) {
        setGeneralError("Login succeeded but no token was returned.");
        return;
      }

      setToken(res.token);
      setAuthToken(res.token);
      setUsername(res.username ?? null);

      nav(PageRoutes.Dashboard, { replace: true });
    } catch {
      setGeneralError("Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <h1>Login</h1>

      <div className="formColumn">
        <div className="field">
          <input
            className={`inputField ${emailError ? "inputError" : ""}`}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!emailError}
            aria-describedby="username-error"
            maxLength={MaxAllowedCharaters}
          />
          <span id="username-error" className="errorFloat">
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
            maxLength={MaxAllowedCharaters}
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
    </div>
  );
}
