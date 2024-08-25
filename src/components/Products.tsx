'use client';

import Image from 'next/image';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { useProduct } from '@/hooks/useProduct';
import { useRouter } from 'next/navigation';
import Loading from './Loading';

export default function Users() {
  // UseMemo
  const { isLoading, error, products } = useProduct();
  const router = useRouter();

  const [paperElevation, setPaperElevation] = useState<number>();

  const handleElevation = useCallback(
    (id: number) => (paperElevation === id ? 6 : 0),
    [paperElevation]
  );

  const addToCart = async ({ username, password }: any) => {
    console.log('Username', username);
    console.log('Senha', password);
    // await loginUser.mutateAsync({ username: username, password: password });
  };

  if (isLoading) return <Loading fullPage />;

  if (error)
    return (
      <Typography variant="body1">
        Ocorreu um erro ao buscar os produtos. Tente novamente
      </Typography>
    );
  return (
    <Grid container spacing={2}>
      {products?.map(u => (
        <Grid item xl={2} lg={3} md={3} sm={4} xs={6} key={u.id}>
          <Paper
            onMouseLeave={() => setPaperElevation(undefined)}
            onMouseOver={() => setPaperElevation(u.id)}
            elevation={handleElevation(u.id)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: 2,
              // width: 242,
              // height: '120px',
              // maxHeight: 180,
              height: 380,
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => router.push(`/products/${u.id}`)}
          >
            <Image
              src={u.image}
              alt="product picture"
              width="128"
              height="128"
            />
            <TextField
              sx={{ mt: 1 }}
              fullWidth
              variant="standard"
              multiline
              rows={3}
              maxRows={3}
              disabled
              value={u.title}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <Typography variant="subtitle1" textAlign="center">
              Valor:{' '}
              <Typography
                variant="subtitle2"
                display="inline"
                fontWeight="bold"
              >
                {u.price}
              </Typography>
            </Typography>

            <Button variant="contained">Adicionar ao carrinho</Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
