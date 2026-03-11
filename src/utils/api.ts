export const API_BASE_URL = import.meta.env.VITE_API_URL

export async function fetchAPI(endpoint: string, options?: RequestInit) {
  const response = await fetch(\\\\, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(\API Error: \\)
  }

  return response.json()
}
