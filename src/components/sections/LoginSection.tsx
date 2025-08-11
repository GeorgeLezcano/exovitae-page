import { useState } from "react";

export default function LoginSection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const handleLogin = () => {
    // clear previous errors
    setUsernameError("");
    setPasswordError("");
    setGeneralError("");

    // simple client-side rules; replace with real validation later
    if (!username) setUsernameError("Username is required.");
    else if (username.length > 24) setUsernameError("Username is too long.");

    if (!password) setPasswordError("Password is required.");

    // stop if any field errors exist
    if (!username || !password || username.length > 24) return;

    // mock auth; replace with API call
    if (username !== "admin" || password !== "1234") {
      setGeneralError("Login failed.");
      return;
    }

    alert("Login successful! (demo)");
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
          />
          <span id="password-error" className="errorFloat">
            {passwordError}
          </span>
        </div>

        <button
          onClick={handleLogin}
          className="sectionButton"
          style={{ alignSelf: "center" }}
        >
          Login
        </button>

        {/* block-level, centered, announced by screen readers */}
        <div className="generalErrorSlot" role="alert">
          {generalError}
        </div>
      </div>
    </div>
  );
}
