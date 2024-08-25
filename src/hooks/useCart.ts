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
        (prev: ProductI[] | undefined) => (prev ? [data, ...prev] : [data])
      );
    },
  });

  return {
    isLoading: mutation.isPending,
    error: mutation.isError,
    addToCart: mutation.mutateAsync,
  };
};

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: showProduct, // Only to simulate a request
    onSuccess: data => {
      const user = queryClient.getQueryData(['user_data']) as UserI;

      queryClient.setQueryData(
        [`user_${user.id}_cart`],
        (prev: ProductI[] | undefined) =>
          prev ? prev.filter(c => c.id !== data?.id) : [data]
      );
    },
  });

  return {
    isLoading: mutation.isPending,
    error: mutation.isError,
    removeFromCart: mutation.mutateAsync,
  };
};

export const useGetCart = () => {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData(['user_data']) as UserI;

  const { data, isLoading, error } = useQuery<ProductI[]>({
    queryKey: [`user_${user.id}_cart`],
  });

  return {
    data,
    isLoading,
    error,
  };
};
