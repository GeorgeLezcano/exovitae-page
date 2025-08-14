import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { setAuthToken } from "../api/client";

type AuthContextType = {
  token: string | null;
  setToken: (t: string | null) => void;
  username: string | null;
  setUsername: (u: string | null) => void;
  role: string | null;
  setRole: (r: string | null) => void;
};

const AuthContext = createContext<AuthContextType>(null!);

const TOKEN_KEY = "auth.token";
const USERNAME_KEY = "auth.username";
const ROLE_KEY = "auth.role";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, _setToken] = useState<string | null>(() =>
    localStorage.getItem(TOKEN_KEY)
  );
  const [username, _setUsername] = useState<string | null>(() =>
    localStorage.getItem(USERNAME_KEY)
  );
  const [role, _setRole] = useState<string | null>(() =>
    localStorage.getItem(ROLE_KEY)
  );

  useEffect(() => {
    setAuthToken(token);
  }, [token]);

  const setToken = (t: string | null) => {
    _setToken(t);
    if (t) localStorage.setItem(TOKEN_KEY, t);
    else localStorage.removeItem(TOKEN_KEY);
  };

  const setUsername = (u: string | null) => {
    _setUsername(u);
    if (u) localStorage.setItem(USERNAME_KEY, u);
    else localStorage.removeItem(USERNAME_KEY);
  };

  const setRole = (r: string | null) => {
    _setRole(r);
    if (r) localStorage.setItem(ROLE_KEY, r);
    else localStorage.removeItem(ROLE_KEY);
  };

  const value = useMemo(
    () => ({ token, setToken, username, setUsername, role, setRole }),
    [token, username, role]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
