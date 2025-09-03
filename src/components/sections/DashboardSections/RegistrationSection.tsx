import { useState } from "react";
import { api } from "../../../api/client";
import { Endpoints } from "../../../constants/Endpoints";

type RegisterRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
type LoginResponse = {
  token: string | null;
  username: string | null;
  role: string | null;
};

const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MaxAllowedCharacters = 64;

export default function RegistrationSection() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const [showPasswords, setShowPasswords] = useState(false);

  function generateTempPassword(length = 12): string {
    const lowers = "abcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";
    const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const pool = lowers + digits + uppers;

    function rng() {
      const buf = new Uint32Array(1);
      window.crypto.getRandomValues(buf);
      return buf[0] / (0xffffffff + 1);
    }
    const pick = (s: string) => s[Math.floor(rng() * s.length)];

    const targetLen = Math.max(8, length);
    const chars: string[] = [pick(lowers), pick(digits)];

    while (chars.length < targetLen) chars.push(pick(pool));
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    return chars.join("");
  }

  const handleGeneratePassword = async () => {
    const p = generateTempPassword(12);
    setPassword(p);
    setConfirm(p);
    setPasswordError("");
    setConfirmError("");
    setGeneralError("");

    try {
      await navigator.clipboard.writeText(p);
      setSuccessMsg("Temporary password generated and copied to clipboard.");
    } catch {
      setGeneralError("Password generated but could not copy to clipboard.");
    }
  };

  const handleRegister = async () => {
    setEmailError("");
    setFirstNameError("");
    setLastNameError("");
    setPasswordError("");
    setConfirmError("");
    setGeneralError("");
    setSuccessMsg("");
    setLoading(true);

    const cleanEmail = email.trim().toLowerCase();
    const cleanFirst = firstName.trim();
    const cleanLast = lastName.trim();

    if (!cleanEmail) setEmailError("Email is required.");
    else if (cleanEmail.length > MaxAllowedCharacters)
      setEmailError("Email is too long.");
    else if (!EmailRegex.test(cleanEmail))
      setEmailError("Email format is invalid.");

    if (!cleanFirst) setFirstNameError("First name is required.");
    else if (cleanFirst.length > MaxAllowedCharacters)
      setFirstNameError("First name is too long.");

    if (!cleanLast) setLastNameError("Last name is required.");
    else if (cleanLast.length > MaxAllowedCharacters)
      setLastNameError("Last name is too long.");

    if (!password) setPasswordError("Password is required.");
    else if (password.length > MaxAllowedCharacters)
      setPasswordError("Password is too long.");
    else if (password.length < 8)
      setPasswordError("Password must be at least 8 characters.");
    else if (!/[a-z]/.test(password))
      setPasswordError("Password must include at least one lowercase letter.");
    else if (!/\d/.test(password))
      setPasswordError("Password must include at least one digit.");

    if (!confirm) setConfirmError("Please confirm your password.");
    else if (password && confirm && password !== confirm)
      setConfirmError("Passwords do not match.");

    const hasClientErrors =
      !cleanEmail ||
      !cleanFirst ||
      !cleanLast ||
      !password ||
      !confirm ||
      cleanEmail.length > MaxAllowedCharacters ||
      cleanFirst.length > MaxAllowedCharacters ||
      cleanLast.length > MaxAllowedCharacters ||
      password.length > MaxAllowedCharacters ||
      confirm.length > MaxAllowedCharacters ||
      !EmailRegex.test(cleanEmail) ||
      password.length < 8 ||
      !/[a-z]/.test(password) ||
      !/\d/.test(password) ||
      password !== confirm;

    if (hasClientErrors) {
      setLoading(false);
      return;
    }

    try {
      const res = await api.post<LoginResponse, RegisterRequest>(
        Endpoints.Register,
        {
          email: cleanEmail,
          password,
          firstName: cleanFirst,
          lastName: cleanLast,
        }
      );

      const createdUser =
        res.username ??
        `${cleanFirst}.${cleanLast}`.toLowerCase().replace(/\s+/g, "");
      const createdRole = res.role ?? "USER";

      setSuccessMsg(
        `User "${createdUser}" created with role "${createdRole}".`
      );
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      setConfirm("");
    } catch (err: unknown) {
      const anyErr = err as { response?: { data?: any; status?: number } };

      if (anyErr?.response?.status === 400 && anyErr.response.data?.errors) {
        const errors = anyErr.response.data.errors as Record<string, string[]>;
        if (errors.email?.length) setEmailError(errors.email[0]);
        if (errors.firstName?.length) setFirstNameError(errors.firstName[0]);
        if (errors.lastName?.length) setLastNameError(errors.lastName[0]);
        if (errors.password?.length) setPasswordError(errors.password[0]);
        if (errors.general?.length) setGeneralError(errors.general[0]);

        if (
          !errors.email?.length &&
          !errors.firstName?.length &&
          !errors.lastName?.length &&
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
              className={`inputField ${firstNameError ? "inputError" : ""}`}
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              aria-invalid={!!firstNameError}
              aria-describedby="reg-firstname-error"
              maxLength={MaxAllowedCharacters}
              disabled={loading}
            />
            <span id="reg-firstname-error" className="errorFloat">
              {firstNameError}
            </span>
          </div>

          <div className="field">
            <input
              className={`inputField ${lastNameError ? "inputError" : ""}`}
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              aria-invalid={!!lastNameError}
              aria-describedby="reg-lastname-error"
              maxLength={MaxAllowedCharacters}
              disabled={loading}
            />
            <span id="reg-lastname-error" className="errorFloat">
              {lastNameError}
            </span>
          </div>

          <div
            className="field"
            style={{ display: "flex", gap: 8, alignItems: "center" }}
          >
            <input
              className={`inputField ${passwordError ? "inputError" : ""}`}
              placeholder="Password"
              type={showPasswords ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={!!passwordError}
              aria-describedby="reg-password-error"
              maxLength={MaxAllowedCharacters}
              disabled={loading}
              style={{ flex: 1 }}
            />
            <button
              type="button"
              onClick={handleGeneratePassword}
              className="sectionButton"
              disabled={loading}
              title="Generate Temp Password"
              aria-label="Generate Temp Password"
              style={{ whiteSpace: "nowrap" }}
            >
              Generate Temp Password
            </button>
            <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <input
                type="checkbox"
                checked={showPasswords}
                onChange={(e) => setShowPasswords(e.target.checked)}
                aria-controls="reg-password reg-confirm"
              />
              Show
            </label>
          </div>
          <span id="reg-password-error" className="errorFloat">
            {passwordError}
          </span>

          <div className="field">
            <input
              id="reg-confirm"
              className={`inputField ${confirmError ? "inputError" : ""}`}
              placeholder="Confirm Password"
              type={showPasswords ? "text" : "password"}
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
