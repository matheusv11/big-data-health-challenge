import { Box, Typography } from '@mui/material';
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xl: '6rem', lg: '6rem', md: '4rem', sm: '2rem', xs: '1rem' }, // Export that style
        minHeight: '100vh',
        gap: 2,
      }}
    >
      <Typography variant="h5">
        Escolha com qual usuário irá utilizar a plataforma
      </Typography>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Users />
      </HydrationBoundary>
    </Box>
  );
}
