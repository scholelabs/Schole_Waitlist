const baseHeaders: HeadersInit = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const mergeOptions = (options: RequestInit = {}): RequestInit => ({
  ...options,
  headers: {
    ...baseHeaders,
    ...options.headers,
  },
});

interface RequestParams {
  body?: unknown;
  options?: RequestInit;
  isClient?: boolean;
}

const createHttpRequestFunction = (
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
) =>
  async function <T>(endpoint: string, params?: RequestParams): Promise<T> {
    const { body, options, isClient } = params ?? {};
    const mergedOptions = mergeOptions({
      ...options,
      method,
      ...(body !== undefined && { body: JSON.stringify(body) }),
    });

    try {
      const response = await fetch(endpoint, mergedOptions);

      if (!response.ok) {
        const error = await response.json();
        console.error("Error:", error);
        throw new Error("Failed to fetch");
      }

      return response.json();
    } catch (error) {
      console.error("Error:", error);
      throw new Error("Failed to fetch");
    }
  };

const get = createHttpRequestFunction("GET");
const post = createHttpRequestFunction("POST");
const put = createHttpRequestFunction("PUT");
const patch = createHttpRequestFunction("PATCH");
const del = createHttpRequestFunction("DELETE");

export { get, post, put, patch, del };
