import { useState, useEffect } from 'react';
import { routeService, type RouteResponse } from '@/features/routes/services/routeService';

export function useRoute(id: string) {
  const [route, setRoute] = useState<RouteResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchRoute = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await routeService.getRouteById(id);
        setRoute(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch route');
      } finally {
        setLoading(false);
      }
    };

    fetchRoute();
  }, [id]);

  return { route, loading, error };
}

