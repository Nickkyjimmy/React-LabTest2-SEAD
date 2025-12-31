export const ROUTES = {
  LANDING: '/',
  LOGIN: '/login',
  HOME: '/home',
  DASHBOARD: '/dashboard',
  ANALYTICS: '/analytics',
  ADMIN: '/admin',
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
  },
  USER: {
    PROFILE: '/user/profile',
  },
} as const;

