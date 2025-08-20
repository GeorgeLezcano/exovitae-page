const BASE_URL_DEV = "http://api.exovitae.net";

let authToken: string | null = null;
export function setAuthToken(token: string | null) {
  authToken = token;
}

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

async function apiRequest<TResponse, TBody = undefined>(
  method: HttpMethod,
  endpoint: string,
  body?: TBody
): Promise<TResponse> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (authToken) headers.Authorization = `Bearer ${authToken}`;

  const options: RequestInit = { method, headers };

  if (body !== undefined) options.body = JSON.stringify(body);

  const res = await fetch(`${BASE_URL_DEV}${endpoint}`, options);

  if (res.status === 204) {
    return null as unknown as TResponse;
  }

  const data: TResponse = await res
    .json()
    .catch(() => null as unknown as TResponse);

  if (!res.ok) {
    throw (data as unknown) || { message: "Request failed" };
  }

  return data;
}

export const api = {
  get: <T>(endpoint: string) => apiRequest<T>("GET", endpoint),
  post: <T, B>(endpoint: string, body: B) =>
    apiRequest<T, B>("POST", endpoint, body),
  put: <T, B>(endpoint: string, body: B) =>
    apiRequest<T, B>("PUT", endpoint, body),
  delete: <T>(endpoint: string) => apiRequest<T>("DELETE", endpoint),
};
