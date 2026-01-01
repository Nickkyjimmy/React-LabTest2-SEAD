import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

interface UseProtectedRouteOptions {
  allowedRoles?: string[];
  redirectTo?: string;
  unauthorizedRedirectTo?: string;
}

export function useProtectedRoute({ 
  allowedRoles, 
  redirectTo = '/login',
  unauthorizedRedirectTo = '/unauthorized'
}: UseProtectedRouteOptions = {}) {
  const location = useLocation();
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  if (allowedRoles && allowedRoles.length > 0) {
    if (!user || !allowedRoles.includes(user.role)) {
      return <Navigate to={unauthorizedRedirectTo} replace />;
    }
  }

  return null;
}

