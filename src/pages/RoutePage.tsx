import { Link } from 'react-router-dom';
import { useRoutes } from '@/features/routes/hooks/useRoutes';

function RoutePage() {
  const { routes, loading, error } = useRoutes();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-600">Loading routes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Routes</h1>
          <p className="text-gray-600">
            View and manage all routes.
          </p>
        </div>

        {routes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No routes found.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {routes.map((route) => (
              <Link
                key={route.id}
                to={`/route/${route.id}`}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <span className="text-sm font-mono text-gray-500 min-w-[100px]">
                  {route.id}
                </span>
                <span className="text-lg font-medium text-gray-900">
                  {route.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RoutePage;