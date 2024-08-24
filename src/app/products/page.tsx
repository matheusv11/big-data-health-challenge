
import Image from "next/image";
import { Box, Grid, Paper } from '@mui/material'
import styles from "./page.module.css";
import { UserI } from "@/types/user";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { getProducts } from "@/server/actions";
import Products from "@/components/Products";

export default async function MainPage() {


  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
      Escolha com qual usuário irá utilizar a plataforma 2


      <HydrationBoundary state={dehydrate(queryClient)}>
        <Products />
      </HydrationBoundary>
      </Box>
  );
}
