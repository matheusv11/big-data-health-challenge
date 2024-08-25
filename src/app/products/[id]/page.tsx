import AddToCartBtn from '@/components/AddToCartBtn';
import { ProductI } from '@/types/product';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import Image from 'next/image';

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  // Cache the api request or not?

  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
    cache: 'force-cache',
  });

  const data = (await res.json()) as ProductI;

  return (
    <Box>
      <Paper elevation={8} sx={{ p: 2, minWidth: '50vw' }}>
        <Grid container gap={2}>
          <Grid item lg="auto" xs={12}>
            <Image
              src={data.image}
              alt="profile picture"
              width={0}
              height={0}
              sizes="25vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid
            item
            lg
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <h2>{data.title}</h2>

            <h2>Valor: {data.price}</h2>
            <TextField
              sx={{ mt: 1 }}
              fullWidth
              variant="standard"
              multiline
              rows={12}
              maxRows={12}
              disabled
              value={data.description}
              InputProps={{
                disableUnderline: true,
              }}
            />

            <AddToCartBtn productId={data.id} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
