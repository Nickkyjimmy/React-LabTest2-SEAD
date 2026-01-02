import apiClient from "@/services/api";

export type RouteResponse = {
  id: string;
  name: string;
  number: string;
  listOfDestinationIds: string[];
  createdAt: string;
  updatedAt: string;
  message?: string;
};

export const routeService = {
  async getAllRoutes(): Promise<RouteResponse[]> {
    const response = await apiClient.get<RouteResponse[]>(
      "/api/route/routes"
    );
    return response.data;
  },
  
  async getRouteById(id: string): Promise<RouteResponse> {
    const response = await apiClient.get<RouteResponse>(
      `/api/route/routes/${id}`
    );
    return response.data;
  },
};
