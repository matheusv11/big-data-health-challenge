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
    <Box>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Products />
      </HydrationBoundary>
    </Box>
  );
}
