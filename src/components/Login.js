import { Button, Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useContext, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Context/Context';

function Login() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const user = await auth.signInWithPopup(provider);
    navigate('/chat');
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid
          style={{ width: 400, background: 'lightgray' }}
          container
          alignItems={'center'}
          direction={'column'}
        >
          <Box p={5}>
            <Button onClick={login} variant={'outlined'}>
              Login with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
