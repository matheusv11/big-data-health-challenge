import { Box, Grid, Paper } from '@mui/material';
import styles from './page.module.css';
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      Escolha com qual usuário irá utilizar a plataforma
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Users />
      </HydrationBoundary>
    </Box>
  );
}
