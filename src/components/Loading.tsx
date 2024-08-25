import { Box, CircularProgress } from '@mui/material';

export default function Loading({ fullPage }: { fullPage?: boolean }) {
  return (
    <Box
      sx={{
        mt: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: fullPage ? '100vh' : 'auto',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
