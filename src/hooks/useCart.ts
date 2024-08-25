import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { showProduct } from '@/server/actions';
import { UserI } from '@/types/user';
import { ProductI } from '@/types/product';

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: showProduct,
    onSuccess: data => {
      const user = queryClient.getQueryData(['user_data']) as UserI;

      queryClient.setQueryData(
        [`user_${user.id}_cart`],
        (
          prev: ProductI[] | undefined // Custom hook for this
        ) => (prev ? [data, ...prev] : [data])
      );
    },
  });

  return {
    isLoading: mutation.isPending,
    error: mutation.isError,
    addToCart: mutation.mutateAsync,
  };
};

export const useGetCart = () => {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData(['user_data']) as UserI;

  const { data, isLoading, error } = useQuery<ProductI[]>({
    queryKey: [`user_${user.id}_cart`], // Define a persister
    // enabled: false,
    // queryFn: getUsers,
  });

  console.log('Data22', data);

  return {
    data,
    isLoading,
    error,
  };
};
