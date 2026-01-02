import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import ProtectedRoute from '@/components/ProtectedRoute';
import CountriesPage from '@/pages/CountriesPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import HomePage from '@/pages/HomePage';
import DashboardPage from '@/pages/DashboardPage';
import AnalyticsPage from '@/pages/AnalyticsPage';
import AdminPage from '@/pages/AdminPage';
import UnauthorizedPage from '@/pages/UnauthorizedPage';

// Protected Route Wrapper - groups all protected routes
function ProtectedRoutes({ allowedRoles }: { allowedRoles?: string[] }) {
  return (
    <ProtectedRoute allowedRoles={allowedRoles}>
      <Outlet />
    </ProtectedRoute>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Public routes */}
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="unauthorized" element={<UnauthorizedPage />} />
        
        {/* Protected routes - no specific role required */}
        <Route element={<ProtectedRoutes />}>
          <Route path="countries" element={<CountriesPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
        </Route>
        
        {/* Admin-only protected routes */}
        <Route element={<ProtectedRoutes allowedRoles={['ADMIN']} />}>
          <Route path="admin" element={<AdminPage />} />
        </Route>
        
        {/* 404 */}
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

