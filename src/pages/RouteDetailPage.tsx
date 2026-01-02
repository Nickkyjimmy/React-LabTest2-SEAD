import { useParams, Link } from 'react-router-dom';
import { useRoute } from '@/features/routes/hooks/useRoute';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MapPin, Trash2 } from 'lucide-react';

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

  const handleViewMap = () => {
    // TODO: Implement map view functionality
    console.log('View route on map:', route.id);
  };

  const handleDelete = () => {
    // TODO: Implement delete functionality
    if (confirm('Are you sure you want to delete this route?')) {
      console.log('Delete route:', route.id);
    }
  };

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

        {/* Route Header */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            {/* Route Number Badge */}
            <div className="bg-blue-600 text-white rounded-lg px-4 py-2 text-lg font-semibold shadow-sm">
              {route.number || 'N/A'}
            </div>

            {/* Route Name - Centered */}
            <h1 className="text-2xl font-bold text-gray-900 flex-1 text-center">
              {route.name}
            </h1>

            {/* Service Name - Right aligned */}
            <div className="text-blue-600 font-medium">
              Route Service
            </div>
          </div>

          {/* Stations Accordion */}
          <Accordion type="single" collapsible className="w-full ">
            <AccordionItem value="stations" className="border-b border-gray-200 ">
              <AccordionTrigger className="hover:no-underline py-3 text-gray-700 ">
                <span className="text-lg font-medium text-black">Stations</span>
              </AccordionTrigger>
              <AccordionContent>
                {route.listOfDestinationIds && route.listOfDestinationIds.length > 0 ? (
                  <div className="space-y-3 pt-2">
                    {route.listOfDestinationIds.map((destinationId, index) => (
                      <div
                        key={destinationId}
                        className="flex items-center gap-3"
                      >
                        <div className="bg-blue-600 text-white rounded-lg px-3 py-1.5 text-sm font-semibold min-w-10 text-center shadow-sm">
                          {index + 1}
                        </div>
                        <span className="text-gray-800 font-medium">
                          {destinationId}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 pt-2">No stations available</p>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={handleViewMap}
            className="flex-1 bg-black text-white hover:bg-gray-800"
          >
            <MapPin className="mr-2 h-4 w-4" />
            View route on map
          </Button>
          <Button
            onClick={handleDelete}
            className='flex-1 bg-red-600 hover:bg-red-700 text-white'
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RouteDetailPage;

