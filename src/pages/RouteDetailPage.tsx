import { useParams, Link } from 'react-router-dom';
import { useRoute } from '@/features/routes/hooks/useRoute';
import { formatDate } from '@/lib/utils';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

function RouteDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { route, loading, error } = useRoute(id || '');

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-gray-600">Loading route details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/route">Routes</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Error</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
          <div className="text-center">
            <p className="text-red-600 mb-4">Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!route) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/route">Routes</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Not Found</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
          <div className="text-center">
            <p className="text-gray-600 mb-4">Route not found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/route">Routes</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{route.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Route Details</h1>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-500">ID</label>
            <p className="text-sm font-mono text-gray-900 mt-1">{route.id}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">Name</label>
            <p className="text-lg font-medium text-gray-900 mt-1">{route.name}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">Number</label>
            <p className="text-gray-900 mt-1">{route.number}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">Destinations</label>
            {route.listOfDestinationIds && route.listOfDestinationIds.length > 0 ? (
              <div className="mt-2 space-y-1">
                {route.listOfDestinationIds.map((destinationId, index) => (
                  <p key={index} className="text-sm font-mono text-gray-600">
                    {destinationId}
                  </p>
                ))}
                <p className="text-sm text-gray-500 mt-2">
                  Total: {route.listOfDestinationIds.length} destination(s)
                </p>
              </div>
            ) : (
              <p className="text-gray-500 mt-1">No destinations</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">Created At</label>
            <p className="text-gray-900 mt-1">{formatDate(route.createdAt)}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">Updated At</label>
            <p className="text-gray-900 mt-1">{formatDate(route.updatedAt)}</p>
          </div>

          {route.message && (
            <div>
              <label className="text-sm font-medium text-gray-500">Message</label>
              <p className="text-gray-900 mt-1">{route.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RouteDetailPage;

