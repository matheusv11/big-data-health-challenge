import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import type { Metadata } from 'next';
import Cart from '@/components/Cart';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Produtos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/products" style={{ cursor: 'pointer' }}>
              Produtos
            </Link>
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Seja bem vindo, usuário
          </Typography>

          <Cart />
          <Button color="inherit">Trocar usuário</Button>
        </Toolbar>
      </AppBar>
      <Box>{children}</Box>
    </>
  );
}
