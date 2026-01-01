import apiClient from '@/services/api';
import type { AuthResponse, LoginRequest, RegisterRequest } from '@/types';

export const authService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const request: LoginRequest = {
      email,
      password,
    };
    const response = await apiClient.post<AuthResponse>('/api/auth-service/auth/login', request);
    return response.data;
  },

  async register(email: string, password: string, role: string): Promise<AuthResponse> {
    const request: RegisterRequest = {
      email,
      password,
      role,
    };
    const response = await apiClient.post<AuthResponse>('/api/auth-service/auth/register', request);
    return response.data;
  },
};

