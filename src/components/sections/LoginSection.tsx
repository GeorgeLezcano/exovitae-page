import { useState } from "react";
import { api } from "../../api/client";

type LoginRequest = {
  username: string;
  password: string;
};

type LoginResponse = {
  token: string;
  expiresIn: number;
};

export default function LoginSection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const MaxAllowedCharaters = 64;

  const handleLogin = async () => {
    setUsernameError("");
    setPasswordError("");
    setGeneralError("");
    setLoading(true);

    const cleanUsername = username.trim();

    if (!cleanUsername) setUsernameError("Username is required.");
    else if (cleanUsername.length > MaxAllowedCharaters)
      setUsernameError("Username is too long.");

    if (!password) setPasswordError("Password is required.");
    else if (password.length > MaxAllowedCharaters)
      setPasswordError("Password is too long.");

    if (
      !cleanUsername ||
      !password ||
      cleanUsername.length > MaxAllowedCharaters ||
      password.length > MaxAllowedCharaters
    ) {
      setLoading(false);
      return;
    }

    try {
      const loginResponse = await api.post<LoginResponse, LoginRequest>(
        "/api/auth/login",
        { username: cleanUsername, password }
      );

      console.log(loginResponse);
      // Do something later on successful login
    } catch (err) {
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
            className={`inputField ${usernameError ? "inputError" : ""}`}
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-invalid={!!usernameError}
            aria-describedby="username-error"
            maxLength={MaxAllowedCharaters}
          />
          <span id="username-error" className="errorFloat">
            {usernameError}
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
