import Image from 'next/image';
import { Box, Grid, Paper } from '@mui/material';
import styles from './page.module.css';
import { UserI } from '@/types/user';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getProducts } from '@/server/actions';
import Products from '@/components/Products';

export default async function MainPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: getProducts,
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
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Products />
      </HydrationBoundary>
    </Box>
  );
}
