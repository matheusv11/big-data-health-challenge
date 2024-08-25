import { Typography } from '@mui/material';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getUsers } from '@/server/actions';
import Users from '@/components/Users';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  return (
    <>
      <Typography variant="h5" textAlign="center">
        Escolha com qual usuário irá utilizar a plataforma
      </Typography>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Users />
      </HydrationBoundary>
    </>
  );
}
