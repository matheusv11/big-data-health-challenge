import { useRouter } from 'next/navigation';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProducts, loginUser } from '@/server/actions';

export const useProduct = () => {
  // Move mutation to another hook
  // const router = useRouter();
  // const queryClient = useQueryClient();

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  return {
    products,
    isLoading,
    error,
  };
};
