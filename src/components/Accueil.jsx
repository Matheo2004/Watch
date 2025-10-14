import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

// Images
import montre from '../assets/montreHome.png'

export default function Accueil() {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 10 }}
        alignItems="center"
        justifyContent="center"
      >

        <Grid item xs={12} md={6}>
          <Box sx={{ px: { xs: 1, md: 4 } }}>
            <Typography
              variant="h4"
              sx={{ fontFamily: 'Raleway, sans-serif', mb: 1 }}
            >
              CUSTOM WATCH
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ fontFamily: 'Merriweather, serif', mb: 3 }}
            >
              Design your dream watch
            </Typography>

            <Button
              variant="contained"
              onClick={() => navigate('/personnalisation')}
              sx={{ fontFamily: 'Lato, sans-serif' }}
            >
              PERSONNALISER MA MONTRE
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={montre}
            alt="Montre - aperçu"
            sx={{
              width: { xs: '50%', md: '100%' },
              maxWidth: 420,
              height: 'auto',
              display: 'block',
              mx: 'auto'
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
