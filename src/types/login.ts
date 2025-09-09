export type LoginRequest = { email: string; password: string };

export type LoginResponse = {
  token: string | null;
  username: string | null;
  role: string | null;
};

export type RegisterRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type UserInfo = {
  id?: string | null;
  username: string | null;
  email: string | null;
  role: string | null;
  enabled: boolean;
};

export type SetRoleForm = {
  email: string;
  role: "Admin" | "User";
  replaceExisting?: boolean;
};

export type SetUserStatusForm = {
  email: string;
  enabled: boolean;
};

export type AuthContextType = {
  token: string | null;
  setToken: (t: string | null) => void;
  username: string | null;
  setUsername: (u: string | null) => void;
  role: string | null;
  setRole: (r: string | null) => void;
};