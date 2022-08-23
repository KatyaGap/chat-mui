import { Button, Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';

function Login() {
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
            <Button variant={'outlined'}>Login with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
