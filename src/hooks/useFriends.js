import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api";

const useFriends = () => {
  const provider = useQuery({
    queryKey: ["Friends"],
    queryFn: getUserFriends,
  });

  return {
    isLoading: provider.isLoading,
    friend: provider.data,
  };
};
export default useFriends;
