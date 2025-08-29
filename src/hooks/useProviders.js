import { useQuery } from "@tanstack/react-query";
import { getRecommendedUsers } from "../lib/api";

const useProviders = () => {
  const provider = useQuery({
    queryKey: ["providers"],
    queryFn: getRecommendedUsers,
  });

  return {
    isLoading: provider.isLoading,
    provider: provider.data?.recommendedUsers,
  };
};
export default useProviders;
