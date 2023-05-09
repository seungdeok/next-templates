export const DEVICE_SIZES = {
  mobile: 320, // iPhone 5/SE
  tablet: 1024, // ipad
} as const;

export const COLORS = {
  while: '#fff',
  black: '#000',
} as const;

export type DEVICE_SIZES = (typeof DEVICE_SIZES)[keyof typeof DEVICE_SIZES];
export type COLORS = (typeof COLORS)[keyof typeof COLORS];
