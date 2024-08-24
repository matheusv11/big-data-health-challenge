import { useRouter } from 'next/navigation'

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers, loginUser } from "@/server/actions";

export const useUser = () => { // Move mutation to another hook
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: users, isLoading, error } = useQuery({ // Add loading
    queryKey: ['users'],
    queryFn: getUsers
  });

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      queryClient.setQueryData([`user_${data?.username}`], data?.token)
      console.log("Oi", data)
      router.push('/products')
      // Invalida e refetch o cache 'user' após a mutação
      // queryClient.invalidateQueries(['user']);
    },
  });

  return {
    users,
    isLoading,
    error,
    loginUser: mutation
  }
}