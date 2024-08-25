import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import Image from 'next/image';

export default async function ProductDetail({ params }) {
  // Cache the api request or not?
  return (
    <Box>
      <Paper elevation={8} sx={{ p: 2, minWidth: '50vw' }}>
        <Grid container gap={2}>
          {/* <Paper elevation={8}></Paper> */}
          <Grid item lg="auto" xs={12}>
            <Image
              src={`/profile-picture.jpg`}
              alt="profile picture"
              width={0}
              height={0}
              sizes="25vw"
              style={{ width: '100%', height: 'auto' }} // optional
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
            <h2>Produto xxxxxx</h2>

            <h2>Valor: 2222</h2>
            <TextField
              sx={{ mt: 1 }}
              fullWidth
              variant="standard"
              multiline
              rows={12}
              maxRows={12}
              disabled
              color="success"
              placeholder={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              InputProps={{
                disableUnderline: true,
              }}
            />

            <Button variant="contained" sx={{ minWidth: '50%' }}>
              Adicionar ao carrinho
            </Button>
          </Grid>
        </Grid>
      </Paper>
      {/* <HydrationBoundary state={dehydrate(queryClient)}>
      <Users />
    </HydrationBoundary> */}
    </Box>
  );
}
