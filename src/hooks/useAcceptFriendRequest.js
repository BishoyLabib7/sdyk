import { useMutation, useQueryClient } from "@tanstack/react-query";
import { acceptFriendRequest } from "../lib/api";

const useAcceptFriendRequest = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending, error } = useMutation({
    mutationFn: acceptFriendRequest,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["Friends"] }),
  });

  return { error, isPending, acceptFriend: mutate };
};

export default useAcceptFriendRequest;
