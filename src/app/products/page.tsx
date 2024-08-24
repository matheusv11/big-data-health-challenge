
import Image from "next/image";
import { Box, Grid, Paper } from '@mui/material'
import styles from "./page.module.css";
import { UserI } from "@/types/user";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { getUsers } from "@/server/actions";

export default async function Home() { // Use this page as async SSR // The cart to // Skeleton loading


  // const queryClient = new QueryClient()

  // await queryClient.prefetchQuery({
  //   queryKey: ['users'],
  //   queryFn: async () => {
  //     await fetch('https://fakestoreapi.com/users', { cache: 'force-cache' })
  //     .then(res=>res.json())
  //   }
  // })


  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
      Escolha com qual usuário irá utilizar a plataforma 2

      </Box>
  );
}
