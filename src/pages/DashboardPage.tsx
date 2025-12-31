import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { useAuthStore } from '@/store/authStore';

export default function DashboardPage() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          This is a protected route. Only authenticated users can access this page.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Name:</span> {user?.name}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Email:</span> {user?.email}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">ID:</span> {user?.id}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Protected Content</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              This content is only visible to authenticated users. The protected route component ensures that unauthenticated users are redirected to the login page.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              <li>Authentication required</li>
              <li>User data from Zustand store</li>
              <li>Protected route implementation</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-gray-600">
            <p>
              <strong>1. Protected Route Component:</strong> The ProtectedRoute component checks if the user is authenticated using Zustand store.
            </p>
            <p>
              <strong>2. Authentication Check:</strong> If not authenticated, users are redirected to the login page with the original destination saved.
            </p>
            <p>
              <strong>3. State Management:</strong> Zustand store manages authentication state and persists it to localStorage.
            </p>
            <p>
              <strong>4. API Client:</strong> Axios client automatically adds authentication tokens to requests via interceptors.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
