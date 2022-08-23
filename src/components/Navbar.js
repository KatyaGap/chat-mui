import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/constants';

export default function MenuAppBar() {
  const user = true;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color={'secondary'} position="static">
        <Toolbar variant={"dense"}>
          <Grid container justifyContent={'flex-end'}>
            {user ? (
              <NavLink to={LOGIN_ROUTE}>
                <Button variant={'outlined'}>Logout</Button>
              </NavLink>
            ) : (
              <NavLink to={CHAT_ROUTE}>
                <Button variant={'outlined'}>Login</Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
