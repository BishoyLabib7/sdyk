import { useQuery } from "@tanstack/react-query";
import { getFriendRequests } from "../lib/api";

const useUserFriendRequests = () => {
  const provider = useQuery({
    queryKey: ["FriendRequests"],
    queryFn: getFriendRequests,
  });

  return {
    isLoading: provider.isLoading,
    friendRequests: provider.data,
  };
};
export default useUserFriendRequests;
