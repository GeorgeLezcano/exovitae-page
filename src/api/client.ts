const BASE_URL = "http://localhost:5000"; //Temp url for local development

async function apiRequest<TResponse, TBody = undefined>(
  method: string,
  endpoint: string,
  body?: TBody
): Promise<TResponse> {
  const options: RequestInit = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, options);

  // Try to parse JSON, fallback to null
  const data: TResponse = await res
    .json()
    .catch(() => null as unknown as TResponse);

  if (!res.ok) {
    throw data || { message: "Request failed" };
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
