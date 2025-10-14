import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Images
import montre from '../assets/montreHome.png';
import PersonnalisationBoitier from './Personnalisation_boitier';
import PersonnalisationCadran from './Personnalisation_cadran';
import PersonnalisationBracelet from './Personnalisation_bracelet';


export default function Personnalisation() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Grid container spacing={{ xs: 2, md: 10 }} alignItems="center" justifyContent='center'>
        <Grid item xs={12} md={6}>
          <Typography
            component="h1"
            sx={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3.5rem' },
              lineHeight: 1.05,
              mb: 1,
              mt: { xs: 0, md: 5 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            PERSONNALISATION
          </Typography>

          <Typography
            sx={{
              fontFamily: 'Merriweather, serif',
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.5rem' },
              color: 'text.secondary',
              mb: 3,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Créez votre montre unique
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2, md: 3 },
              alignItems: 'center',
            }}
          >
            <PersonnalisationBoitier />
            <PersonnalisationCadran />
            <PersonnalisationBracelet />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box
              component="img"
              src={montre}
              alt="Montre - aperçu"
              sx={{
                width: { xs: '70%', md: '100%' },
                maxWidth: 420,
                height: 'auto',
                display: 'block',
                position: 'relative',
                top: { xs: 1, md: 50 },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
