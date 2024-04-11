export type Config = Record<string, { width: number; height: number }>;

export const pwaConfig: Config = {
  "android-chrome-192x192": { width: 192, height: 192 },
  "android-chrome-512x512": { width: 512, height: 512 },
  "apple-touch-icon": { width: 180, height: 180 },
  "favicon-16x16": { width: 16, height: 16 },
  "favicon-32x32": { width: 32, height: 32 },
  "mstile-150x150": { width: 150, height: 150 },
  "safari-pinned-tab": { width: 144, height: 144 },
  "site-logo": { width: 270, height: 270 },
  "site-logo-512x512": { width: 512, height: 512 },
  "site-logo-1024x1024": { width: 1024, height: 1024 },
}

export const defaultConfig: Config = {
  "favicon": { width: 32, height: 32 }, // Default favicon size
  "favicon-16x16": { width: 16, height: 16 },
  "favicon-32x32": { width: 32, height: 32 },
  "favicon-192x192": { width: 192, height: 192 },
}