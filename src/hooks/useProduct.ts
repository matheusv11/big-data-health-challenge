import { useRouter } from 'next/navigation'

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts, loginUser } from "@/server/actions";

export const useProduct = () => { // Move mutation to another hook
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: products, isLoading, error } = useQuery({ // Add loading
    queryKey: ['products'],
    queryFn: getProducts
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
    products,
    isLoading,
    error,
    loginUser: mutation
  }
}