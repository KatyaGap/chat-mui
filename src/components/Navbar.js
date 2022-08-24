import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid } from '@mui/material';

import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/constants';
import { AuthContext } from './Context/Context';

export default function MenuAppBar() {
  const { auth } = useContext(AuthContext);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color={'secondary'} position="static">
        <Toolbar variant={'dense'}>
          <Grid container justifyContent={'flex-end'}>
            {user ? (
              <>
                <NavLink to={CHAT_ROUTE}>
                  <Button
                    onClick={() => navigate('/chat')}
                    variant={'outlined'}
                  >
                    Chat
                  </Button>
                </NavLink>
                <NavLink to="/">
                  <Button onClick={() => auth.signOut()} variant={'outlined'}>
                    Logout
                  </Button>
                </NavLink>
                <NavLink to="/">
                  <Button variant={'outlined'}>Home</Button>
                </NavLink>
              </>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <Button variant={'outlined'}>Login</Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
