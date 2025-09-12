import { Environment } from "../constants/Enviroment";
import type { HttpMethod } from "../types/network";

export const BASE_URL = Environment.Production;

let authToken: string | null = null;
export function setAuthToken(token: string | null) {
  authToken = token;
}

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

  const res = await fetch(`${BASE_URL}${endpoint}`, options);

  if (res.status === 204) return null as unknown as TResponse;

  const data: TResponse = await res
    .json()
    .catch(() => null as unknown as TResponse);
  if (!res.ok) throw (data as unknown) || { message: "Request failed" };
  return data;
}

async function apiUploadForm<TResponse>(
  endpoint: string,
  form: FormData
): Promise<TResponse> {
  const headers: Record<string, string> = { Accept: "application/json" };
  if (authToken) headers.Authorization = `Bearer ${authToken}`;

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers,
    body: form,
  });
  if (res.status === 204) return null as unknown as TResponse;

  const data: TResponse = await res
    .json()
    .catch(() => null as unknown as TResponse);
  if (!res.ok) throw (data as unknown) || { message: "Request failed" };
  return data;
}

async function apiGetBlob(endpoint: string): Promise<Blob> {
  const headers: Record<string, string> = {};
  if (authToken) headers.Authorization = `Bearer ${authToken}`;
  const res = await fetch(`${BASE_URL}${endpoint}`, { headers });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return await res.blob();
}

export const api = {
  get: <T>(endpoint: string) => apiRequest<T>("GET", endpoint),
  post: <T, B>(endpoint: string, body: B) =>
    apiRequest<T, B>("POST", endpoint, body),
  put: <T, B>(endpoint: string, body: B) =>
    apiRequest<T, B>("PUT", endpoint, body),
  delete: <T>(endpoint: string) => apiRequest<T>("DELETE", endpoint),
  patch: <T, B>(endpoint: string, body?: B) =>
    apiRequest<T, B>("PATCH", endpoint, body),
  uploadForm: apiUploadForm,
  getBlob: apiGetBlob,
};
