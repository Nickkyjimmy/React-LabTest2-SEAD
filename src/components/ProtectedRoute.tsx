import type { ReactNode } from 'react';
import { useProtectedRoute } from '@/hooks/useProtectedRoute';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
  redirectTo?: string;
  unauthorizedRedirectTo?: string;
}

export default function ProtectedRoute({ 
  children, 
  allowedRoles, 
  redirectTo,
  unauthorizedRedirectTo 
}: ProtectedRouteProps) {
  const redirect = useProtectedRoute({ allowedRoles, redirectTo, unauthorizedRedirectTo });

  if (redirect) {
    return redirect;
  }

  return <>{children}</>;
}

