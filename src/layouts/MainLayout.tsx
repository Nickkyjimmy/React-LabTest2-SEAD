import { Link, useNavigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';

export default function MainLayout() {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <Link to="/" className="text-lg font-semibold text-black no-underline">
              React App
            </Link>
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-sm text-black hover:underline no-underline">
                Home
              </Link>
              {isAuthenticated && (
                <>
                  <Link to="/countries" className="text-sm text-black hover:underline no-underline">
                    Countries
                  </Link>
                  <Link to="/dashboard" className="text-sm text-black hover:underline no-underline">
                    Dashboard
                  </Link>
                </>
              )}
              <Link to="/analytics" className="text-sm text-black hover:underline no-underline">
                Analytics
              </Link>
              <Link to="/admin" className="text-sm text-black hover:underline no-underline">
                Admin
              </Link>
              {isAuthenticated ? (
                <Button
                  onClick={handleLogout}
                  className=""
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Link to="/login" className="text-sm text-black hover:underline no-underline">
                    Login
                  </Link>
                  <Link to="/register" className="text-sm text-black hover:underline no-underline">
                    Register
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>
      <main className="min-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}

