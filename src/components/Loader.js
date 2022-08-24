import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

function Loader() {
  return (
    <Container>
      <Grid container alignItems={'center'} justifyContent={'center'}>
        <Grid container alignItems={'center'} direction={'column'}>
          <div className="lds-spinner">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Loader;
