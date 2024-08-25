import { useRouter } from 'next/navigation';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUsers, showUser } from '@/server/actions';
import { UserI } from '@/types/user';

export const useUserLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: showUser,
    onSuccess: data => {
      console.log('Data', data);
      queryClient.setQueryData(['user_data'], { user: data });

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
    queryFn: getUsers,
  });

  return {
    users,
    isLoading,
    error,
  };
};

export const useUserData = () => {
  const { data, isLoading, error } = useQuery<{ user: UserI }>({
    queryKey: ['user_data'], // Define a persister
    enabled: false,
    // queryFn: getUsers,
  });

  return {
    data: data?.user,
    isLoading,
    error,
  };
};
