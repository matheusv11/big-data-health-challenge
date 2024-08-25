import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Inter } from 'next/font/google';
import './globals.css';
import theme from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { Box } from '@mui/material';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Big Data Health Challenge',
  description: 'Login',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: {
                  xl: '6rem',
                  lg: '6rem',
                  md: '4rem',
                  sm: '2rem',
                  xs: '1rem',
                },
                minHeight: '100vh',
                gap: 2,
              }}
            >
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
