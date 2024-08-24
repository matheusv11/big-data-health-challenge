"use client"

import Image from "next/image";
import { Box, Grid, Paper, Typography } from '@mui/material'
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/server/actions";
import { useCallback, useState } from "react";
import { useUser } from "@/hooks/useUser";

export default function Users() {
  const { users, loginUser } = useUser();
  const [paperElevation, setPaperElevation] = useState<number>();

  const handleElevation = useCallback((id: number) => paperElevation === id ? 6 : 0, [paperElevation]);

  const makeLogin = async ({username, password} : any) => {
    console.log("Username", username);
    console.log("Senha", password)
    await loginUser.mutateAsync({ username: username, password: password })
  }

  return (

      <Grid container spacing={2}>
        {users?.map(u => (
          <Grid item md="auto" key={u.id}>
            <Paper onMouseLeave={() => setPaperElevation(undefined)} onMouseOver={() => setPaperElevation(u.id)} elevation={handleElevation(u.id)} sx={{display: 'flex', flexDirection: 'column', p: 2, cursor: 'pointer'}} 
            onClick={() => makeLogin({username: u.username, password: u.password})}>
              <Image  src={`/profile-picture.jpg`} alt="profile picture" width="128" height="128"/>
              <Typography variant="subtitle1" textAlign="center">
                {u.username}
              </Typography>
              
            </Paper>
          </Grid>
        ))}

      </Grid>

  );
}