import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProducts, addToCart } from '@/server/actions';

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addToCart,
    onSuccess: data => {
      const user = queryClient.getQueryData(['user_data']); // Type
      const cartData = {
        id: 1,
        name: 'Oi produto',
      };
      queryClient.setQueryData(
        [`user_${user.id}_cart`],
        (
          prev // Custom hook for this
        ) => (prev ? [cartData, ...prev] : [cartData])
      );

      // queryClient.setQueryData(['cart'], {
      //   id: 1,
      //   name: 'Carlinhos De Dalva',
      //   username: 'carlinhos',
      // });
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

  const user = queryClient.getQueryData(['user_data']); // Type

  console.log('USER', user);
  const { data, isLoading, error } = useQuery({
    queryKey: [`user_${user?.id}_cart`], // Define a persister
    // enabled: false,
    // queryFn: getUsers,
  });

  return {
    data,
    isLoading,
    error,
  };
};
