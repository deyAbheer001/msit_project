import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180,
          opacity: 0.7
          }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://www.svgheart.com/wp-content/uploads/2021/12/where-words-fail-music-speaks-headphone-music-lover-svg-file-SVGHEART.COM.png"
                alt="suitcase"
                sx={{ height: 200}}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                The best Quality Songs
              </Typography>
              <Typography variant="h5">
                {
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero`
                }

                {
                  ', go for a mini-vacation just a few subway stops away from your home.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://static.thenounproject.com/png/1265766-200.png"
                alt="graph"
                sx={{ height: 200 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                New experiences
              </Typography>
              <Typography variant="h5">
                {
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero`
                }

                {'your Workouts will not be alike.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://www.svgrepo.com/download/146896/price-tag.svg"
                alt="clock"
                sx={{ height: 200 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Exclusive rates
              </Typography>
              <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
