'use client';

import { Typography } from '@mui/material';
import { useUserData } from '@/hooks/useUser';

export default function Welcome() {
  const { data } = useUserData();

  console.log('Dado', data);
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      Seja bem vindo, {data?.name}
    </Typography>
  );
}
