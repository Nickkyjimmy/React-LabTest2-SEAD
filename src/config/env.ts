export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:10000',
  appName: import.meta.env.VITE_APP_NAME || 'React App',
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
} as const;



