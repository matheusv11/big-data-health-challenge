'use client';

import Image from 'next/image';
import { Grid, Paper, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { useUser, useUserLogin } from '@/hooks/useUser';
import Loading from './Loading';

export default function Users() {
  const { isLoading: isUsersLoading, error, users } = useUser();
  const { isLoading, loginUser } = useUserLogin();
  const [paperElevation, setPaperElevation] = useState<number>();

  const handleElevation = useCallback(
    (id: number) => (paperElevation === id ? 6 : 0),
    [paperElevation]
  );

  if (isUsersLoading) return <Loading />;

  console.log('ERROR', error);
  if (error)
    return (
      <Typography variant="body1">
        Ocorreu um erro ao buscar os usuários. Tente novamente
      </Typography>
    );

  return (
    <Grid container spacing={2}>
      {users?.map(u => (
        <Grid item xl="auto" lg="auto" md={2} sm={4} xs={6} key={u.id}>
          <Paper
            onMouseLeave={() => setPaperElevation(undefined)}
            onMouseOver={() => setPaperElevation(u.id)}
            elevation={handleElevation(u.id)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: 2,
              gap: 1,
              justifyContent: 'center',
              alignItems: 'center',
              // width: '100%',
              opacity: isLoading ? 0.2 : 1,
              pointerEvents: isLoading ? 'none' : 'all',
              cursor: 'pointer',
            }}
            onClick={() => loginUser(u.id)}
          >
            <Image
              src={`/profile-picture.jpg`}
              alt="profile picture"
              width="128"
              height="128"
            />
            <Typography variant="subtitle1" textAlign="center">
              {u.username}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
