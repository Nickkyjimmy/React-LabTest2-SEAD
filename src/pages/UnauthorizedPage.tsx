import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/authStore';

export default function UnauthorizedPage() {
  const { user } = useAuthStore();

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-red-600">Access Denied</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              You don't have permission to access this page.
            </p>
            {user && (
              <p className="text-sm text-gray-500 mb-4">
                Your current role: <span className="font-medium">{user.role}</span>
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <Link to="/dashboard">
              <Button variant="default" className="w-full">
                Go to Dashboard
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="w-full">
                Go to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

