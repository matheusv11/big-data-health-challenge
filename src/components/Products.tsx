'use client';

import Image from 'next/image';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { useProduct } from '@/hooks/useProduct';
import { useRouter } from 'next/navigation';

export default function Users() {
  const { products, loginUser } = useProduct();
  const router = useRouter();

  const [paperElevation, setPaperElevation] = useState<number>();

  const handleElevation = useCallback(
    (id: number) => (paperElevation === id ? 6 : 0),
    [paperElevation]
  );

  const addToCart = async ({ username, password }: any) => {
    console.log('Username', username);
    console.log('Senha', password);
    await loginUser.mutateAsync({ username: username, password: password });
  };

  return (
    <Grid container spacing={2}>
      {products?.map(u => (
        <Grid item md="auto" key={u.id}>
          <Paper
            onMouseLeave={() => setPaperElevation(undefined)}
            onMouseOver={() => setPaperElevation(u.id)}
            elevation={handleElevation(u.id)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: 2,
              maxWidth: 162,
              // maxHeight: 180,
              cursor: 'pointer',
            }}
            onClick={() => router.push(`/products/${u.id}`)}
            // onClick={() => makeLogin({username: u.username, password: u.password})}
          >
            <Image
              src={u.image}
              alt="profile picture"
              width="128"
              height="128"
            />
            <Typography
              sx={{
                overflow: 'hidden',
                display: '-webkit-box',
                '-webkit-line-clamp': 1 /* number of lines to show */,
                'line-clamp': 2,
                '-webkit-box-orient': 'vertical',
              }}
              variant="subtitle1"
              textAlign="center"
            >
              {u.title}
            </Typography>
            <Typography variant="subtitle1" textAlign="center">
              Valor: {u.price}
            </Typography>

            <Button variant="contained">Adicionar ao carrinho</Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
