'use client';

import { Typography } from '@mui/material';
import { useUserData } from '@/hooks/useUser';

export default function Welcome() {
  const { data } = useUserData();

  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      Seja bem vindo, {data?.name?.firstname}
    </Typography>
  );
}
