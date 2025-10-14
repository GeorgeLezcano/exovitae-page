import { useEffect, useRef, useState } from "react";
import { api } from "../../api/client";
import { Endpoints } from "../../constants/Endpoints";
import type { LoginResponse, RegisterRequest } from "../../types/login";

const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MaxAllowedCharacters = 64;

export default function RegistrationModal({
  open,
  onClose,
  onRegistered,
}: {
  open: boolean;
  onClose: () => void;
  onRegistered?: (res: LoginResponse) => void;
}) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPasswords, setShowPasswords] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<
    Partial<
      Record<
        "email" | "firstName" | "lastName" | "password" | "confirm",
        string
      >
    >
  >({});

  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => firstInputRef.current?.focus(), 0);
    } else {
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      setConfirm("");
      setShowPasswords(false);
      setSubmitting(false);
      setGeneralError("");
      setFieldErrors({});
    }
  }, [open]);

  if (!open) return null;

  const generateTempPassword = (length = 12): string => {
    const lowers = "abcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";
    const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const pool = lowers + digits + uppers + "!@#$%^&*()-_=+[]{};:',.<>/?\\|`~";
    const rng = () => {
      const buf = new Uint32Array(1);
      window.crypto.getRandomValues(buf);
      return buf[0] / (0xffffffff + 1);
    };
    const pick = (s: string) => s[Math.floor(rng() * s.length)];
    const targetLen = Math.max(8, length);
    const chars: string[] = [
      pick(lowers),
      pick(uppers),
      pick(digits),
      pick("!@#$%^&*()-_=+[]{};:',.<>/?\\|`~"),
    ];
    while (chars.length < targetLen) chars.push(pick(pool));
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    return chars.join("");
  };

  const handleGeneratePassword = async () => {
    const p = generateTempPassword(12);
    setPassword(p);
    setConfirm(p);
    setFieldErrors((f) => ({ ...f, password: "", confirm: "" }));
    setGeneralError("");
    try {
      await navigator.clipboard.writeText(p);
    } catch {}
  };

  const validate = () => {
    const errs: Partial<
      Record<
        "email" | "firstName" | "lastName" | "password" | "confirm",
        string
      >
    > = {};

    const cleanEmail = email.trim().toLowerCase();
    const cleanFirst = firstName.trim();
    const cleanLast = lastName.trim();

    if (!cleanEmail) errs.email = "Email is required.";
    else if (cleanEmail.length > MaxAllowedCharacters)
      errs.email = "Email is too long.";
    else if (!EmailRegex.test(cleanEmail))
      errs.email = "Email format is invalid.";

    if (!cleanFirst) errs.firstName = "First name is required.";
    else if (cleanFirst.length > MaxAllowedCharacters)
      errs.firstName = "First name is too long.";

    if (!cleanLast) errs.lastName = "Last name is required.";
    else if (cleanLast.length > MaxAllowedCharacters)
      errs.lastName = "Last name is too long.";

    if (!password) errs.password = "Password is required.";
    else if (password.length > MaxAllowedCharacters)
      errs.password = "Password is too long.";
    else if (password.length < 8)
      errs.password = "Password must be at least 8 characters.";
    else if (!/[a-z]/.test(password))
      errs.password = "Password must include at least one lowercase letter.";
    else if (!/[A-Z]/.test(password))
      errs.password = "Password must include at least one uppercase letter.";
    else if (!/\d/.test(password))
      errs.password = "Password must include at least one digit.";
    else if (!/[^A-Za-z0-9]/.test(password))
      errs.password = "Password must include at least one symbol.";

    if (!confirm) errs.confirm = "Please confirm your password.";
    else if (password && confirm && password !== confirm)
      errs.confirm = "Passwords do not match.";

    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submit = async () => {
    setGeneralError("");
    setFieldErrors({});
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await api.post<LoginResponse, RegisterRequest>(
        Endpoints.Register,
        {
          email: email.trim().toLowerCase(),
          password,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
        }
      );

      onRegistered?.(res);
      onClose();
    } catch (err: any) {
      const errors =
        err?.response?.data?.errors ||
        err?.errors ||
        (err?.response?.data?.detail
          ? { general: [err.response.data.detail] }
          : undefined);

      const status = err?.response?.status as number | undefined;

      const mapped: Partial<
        Record<
          "email" | "firstName" | "lastName" | "password" | "confirm",
          string
        >
      > = {};

      if (errors && typeof errors === "object") {
        const pw =
          errors.password ??
          errors.Password ??
          errors.newPassword ??
          errors.NewPassword ??
          errors.confirmNewPassword ??
          errors.ConfirmNewPassword;

        if (Array.isArray(errors.email) && errors.email.length)
          mapped.email = errors.email[0];
        if (Array.isArray(errors.firstName) && errors.firstName.length)
          mapped.firstName = errors.firstName[0];
        if (Array.isArray(errors.lastName) && errors.lastName.length)
          mapped.lastName = errors.lastName[0];
        if (Array.isArray(pw) && pw.length) mapped.password = pw[0];
        if (Array.isArray(errors.confirm) && errors.confirm.length)
          mapped.confirm = errors.confirm[0];
      }

      setFieldErrors(mapped);

      if (status === 403) setGeneralError("Registration is restricted.");
      else if (status === 400 && !Object.keys(mapped).length)
        setGeneralError("Invalid input.");
      else
        setGeneralError(
          err?.response?.data?.title ||
            err?.title ||
            err?.message ||
            "Registration failed. Please try again."
        );
    } finally {
      setSubmitting(false);
    }
  };

  const disabledSubmit =
    submitting ||
    !email.trim() ||
    !firstName.trim() ||
    !lastName.trim() ||
    !password.trim() ||
    !confirm.trim() ||
    password !== confirm;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reg-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        backdropFilter: "blur(2px)",
      }}
    >
      <div
        className="card"
        style={{
          width: "100%",
          maxWidth: 640,
          backgroundColor: "rgba(17, 24, 39, 0.96)",
          borderColor: "#2196f3",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cardHeader">
          <strong id="reg-title">Create an Account</strong>
        </div>

        <div className="stack-v" style={{ gap: "0.75rem" }}>
          <div className="field">
            <input
              ref={firstInputRef}
              className={`inputField ${fieldErrors.email ? "inputError" : ""}`}
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={MaxAllowedCharacters}
              aria-invalid={!!fieldErrors.email}
              aria-describedby="err-email"
              disabled={submitting}
            />
            <span id="err-email" className="errorFloat">
              {fieldErrors.email}
            </span>
          </div>

          <div className="field">
            <input
              className={`inputField ${
                fieldErrors.firstName ? "inputError" : ""
              }`}
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              maxLength={MaxAllowedCharacters}
              aria-invalid={!!fieldErrors.firstName}
              aria-describedby="err-first"
              disabled={submitting}
            />
            <span id="err-first" className="errorFloat">
              {fieldErrors.firstName}
            </span>
          </div>

          <div className="field">
            <input
              className={`inputField ${
                fieldErrors.lastName ? "inputError" : ""
              }`}
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              maxLength={MaxAllowedCharacters}
              aria-invalid={!!fieldErrors.lastName}
              aria-describedby="err-last"
              disabled={submitting}
            />
            <span id="err-last" className="errorFloat">
              {fieldErrors.lastName}
            </span>
          </div>

          <div
            className="field"
            style={{ display: "flex", gap: 8, alignItems: "center" }}
          >
            <input
              className={`inputField ${
                fieldErrors.password ? "inputError" : ""
              }`}
              placeholder="Password"
              type={showPasswords ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={MaxAllowedCharacters}
              aria-invalid={!!fieldErrors.password}
              aria-describedby="err-pass"
              disabled={submitting}
              style={{ flex: 1 }}
            />
            <button
              type="button"
              onClick={handleGeneratePassword}
              className="sectionButton"
              disabled={submitting}
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
                aria-controls="reg-pass reg-confirm"
              />
              Show
            </label>
          </div>
          <span id="err-pass" className="errorFloat">
            {fieldErrors.password}
          </span>

          <div className="field">
            <input
              id="reg-confirm"
              className={`inputField ${
                fieldErrors.confirm ? "inputError" : ""
              }`}
              placeholder="Confirm Password"
              type={showPasswords ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              maxLength={MaxAllowedCharacters}
              aria-invalid={!!fieldErrors.confirm}
              aria-describedby="err-confirm"
              disabled={submitting}
            />
            <span id="err-confirm" className="errorFloat">
              {fieldErrors.confirm}
            </span>
          </div>

          <div className="generalErrorSlot" role="alert">
            {submitting ? (
              <span className="spinner" />
            ) : (
              generalError && <span className="errorText">{generalError}</span>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "0.5rem",
            marginTop: "0.75rem",
          }}
        >
          <button
            className="sectionButton"
            onClick={submit}
            disabled={disabledSubmit}
            aria-busy={submitting}
            title="Create Account"
          >
            {submitting ? "Creating…" : "Create Account"}
          </button>
          <button
            className="sectionButton"
            onClick={onClose}
            disabled={submitting}
            title="Close"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
