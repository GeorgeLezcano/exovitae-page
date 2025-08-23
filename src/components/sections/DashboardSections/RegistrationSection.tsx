import { useState } from "react";
import { api } from "../../../api/client";

type RegisterRequest = { email: string; password: string };
type LoginResponse = {
  token: string | null;
  username: string | null;
  role: string | null;
};

const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MaxAllowedCharacters = 64;

export default function RegistrationSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const handleRegister = async () => {
    setEmailError("");
    setPasswordError("");
    setConfirmError("");
    setGeneralError("");
    setSuccessMsg("");
    setLoading(true);

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) setEmailError("Email is required.");
    else if (cleanEmail.length > MaxAllowedCharacters)
      setEmailError("Email is too long.");
    else if (!EmailRegex.test(cleanEmail))
      setEmailError("Email format is invalid.");

    if (!password) setPasswordError("Password is required.");
    else if (password.length > MaxAllowedCharacters)
      setPasswordError("Password is too long.");

    if (!confirm) setConfirmError("Please confirm your password.");
    else if (password && confirm && password !== confirm)
      setConfirmError("Passwords do not match.");

    const hasClientErrors =
      !cleanEmail ||
      !password ||
      !confirm ||
      cleanEmail.length > MaxAllowedCharacters ||
      password.length > MaxAllowedCharacters ||
      confirm.length > MaxAllowedCharacters ||
      !EmailRegex.test(cleanEmail) ||
      password !== confirm;

    if (hasClientErrors) {
      setLoading(false);
      return;
    }

    try {
      const res = await api.post<LoginResponse, RegisterRequest>(
        "/api/auth/register",
        {
          email: cleanEmail,
          password,
        }
      );

      const createdUser = res.username ?? cleanEmail.split("@")[0];
      const createdRole = res.role ?? "USER";

      setSuccessMsg(
        `User "${createdUser}" created with role "${createdRole}".`
      );
      setEmail("");
      setPassword("");
      setConfirm("");
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
      } else if (anyErr?.response?.status === 403) {
        setGeneralError("You must be an admin to register users.");
      } else {
        setGeneralError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sectionShell">
      <section className="sectionCard">
        <h1 className="pageTitle">User Registration</h1>
        <p className="pageSubtitle">Admins can add new users here</p>
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
              aria-describedby="reg-email-error"
              maxLength={MaxAllowedCharacters}
              disabled={loading}
            />
            <span id="reg-email-error" className="errorFloat">
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
              aria-describedby="reg-password-error"
              maxLength={MaxAllowedCharacters}
              disabled={loading}
            />
            <span id="reg-password-error" className="errorFloat">
              {passwordError}
            </span>
          </div>

          <div className="field">
            <input
              className={`inputField ${confirmError ? "inputError" : ""}`}
              placeholder="Confirm Password"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              aria-invalid={!!confirmError}
              aria-describedby="reg-confirm-error"
              maxLength={MaxAllowedCharacters}
              disabled={loading}
            />
            <span id="reg-confirm-error" className="errorFloat">
              {confirmError}
            </span>
          </div>

          <button
            onClick={handleRegister}
            className="sectionButton"
            style={{ alignSelf: "center" }}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Registering..." : "Register User"}
          </button>

          <div className="generalErrorSlot" role="status" aria-live="polite">
            {loading ? (
              <span className="spinner" />
            ) : successMsg ? (
              <span style={{ color: "#7CFC00" }}>{successMsg}</span>
            ) : (
              generalError && <span className="errorText">{generalError}</span>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
