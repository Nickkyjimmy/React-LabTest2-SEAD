import { useState } from 'react';
import { authService } from '@/features/auth/services/authService';
import { useAuthStore } from '@/store/authStore';
import type { User } from '@/types';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setUser, setToken } = useAuthStore();

  const register = async (email: string, password: string, role: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await authService.register(email, password, role);

      if (!response.token || !response.email) {
        const errorMsg = response.message || 'Invalid response from server';
        throw new Error(errorMsg);
      }

      const user: User = {
        id: response.email,
        email: response.email,
        role: response.role || role,
      };

      setToken(response.token);
      setUser(user);

      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Registration failed. Please try again.';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await authService.login(email, password);

      if (!response.token || !response.email) {
        const errorMsg = response.message || 'Invalid response from server';
        throw new Error(errorMsg);
      }

      const user: User = {
        id: response.email,
        email: response.email,
        role: response.role || 'USER',
      };

      setToken(response.token);
      setUser(user);

      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed. Please try again.';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    login,
    loading,
    error,
  };
}

