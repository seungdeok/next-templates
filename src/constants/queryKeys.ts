export const QUERY_KEYS = {
  HOME: '/',
} as const;

export type QUERY_KEYS = (typeof QUERY_KEYS)[keyof typeof QUERY_KEYS];
