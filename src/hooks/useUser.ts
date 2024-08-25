import { useRouter } from 'next/navigation';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUsers, showUser } from '@/server/actions';

export const useUserLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: showUser,
    onSuccess: data => {
      queryClient.setQueryData(['user_data'], data);
      router.push('/products');
    },
  });

  return {
    isLoading: mutation.isPending,
    error: mutation.isError,
    loginUser: mutation.mutateAsync,
  };
};

export const useUser = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });

  return {
    users,
    isLoading,
    error,
  };
};

export const useUserData = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user_data'],
    queryFn: () => showUser(1), // Simulating taking a real user data
  });

  return {
    data: data,
    isLoading,
    error,
  };
};
