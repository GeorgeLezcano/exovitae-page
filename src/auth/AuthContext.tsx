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
};

const AuthContext = createContext<AuthContextType>(null!);

const TOKEN_KEY = "auth.token";
const USERNAME_KEY = "auth.username";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, _setToken] = useState<string | null>(() =>
    localStorage.getItem(TOKEN_KEY)
  );
  const [username, _setUsername] = useState<string | null>(() =>
    localStorage.getItem(USERNAME_KEY)
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

  const value = useMemo(
    () => ({ token, setToken, username, setUsername }),
    [token, username]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
