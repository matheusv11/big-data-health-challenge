'use client';

import Image from 'next/image';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { useProduct } from '@/hooks/useProduct';
import { useAddToCart, useGetCart } from '@/hooks/useCart';

import { useRouter } from 'next/navigation';
import Loading from './Loading';

export default function Users() {
  const { isLoading, error, products } = useProduct();
  const { data: cartData } = useGetCart();
  const { addToCart, isLoading: loadingCart } = useAddToCart();

  const router = useRouter();

  const [paperElevation, setPaperElevation] = useState<number>();
  const [productBeingAdded, setProductBeingAdded] = useState<number>();

  const handleElevation = useCallback(
    (id: number) => (paperElevation === id ? 6 : 0),
    [paperElevation]
  );

  const hasAdded = useCallback(
    (id: number) => !!cartData?.find(c => c.id === id),
    [cartData]
  );

  const productIsBeingAdded = useCallback(
    (id: number) => productBeingAdded === id && loadingCart,
    [loadingCart, productBeingAdded]
  );

  const handleCart =
    (id: number) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      setProductBeingAdded(id);
      addToCart(id);
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
              disabled
              value={u.title}
              InputProps={{
                disableUnderline: true,
              }}
            />

            <Box>
              <Typography
                variant="subtitle1"
                textAlign="center"
                display="inline"
              >
                Valor:{' '}
              </Typography>

              <Typography
                variant="subtitle2"
                display="inline"
                fontWeight="bold"
              >
                {u.price}
              </Typography>
            </Box>

            {hasAdded(u.id) ? (
              <Button variant="contained" disabled>
                Adicionado
              </Button>
            ) : (
              <Button
                variant="contained"
                disabled={productIsBeingAdded(u.id)}
                onClick={handleCart(u.id)}
              >
                Adicionar ao carrinho
              </Button>
            )}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
