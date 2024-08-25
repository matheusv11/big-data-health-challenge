import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/server/actions';

export const useProduct = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });
  return {
    products,
    isLoading,
    error,
  };
};
