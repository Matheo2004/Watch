import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Images
import montre from '../assets/montreHome.png'

// Components
import CatalogueDialog from './Catalogue_dialog'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Catalogue() {
  const [open, setOpen] = React.useState(false);
  const [categorie, setCategorie] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ textAlign: 'center', p: 2 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 10 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Raleway, sans-serif",
              fontSize: { xs: '2.5rem', md: '5rem' },
              mb: 2
            }}>
            CATALOGUE
          </Typography>

          <Button
            onClick={() => { handleClickOpen(); setCategorie('classique'); }}
            variant="text"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              maxWidth: 420,
              mx: 'auto',
              textTransform: 'none',
              p: 2,
            }}
          >
            <Box
              component="img"
              src={montre}
              alt="Montre - aperçu"
              sx={{
                width: { xs: '40%', md: '30%' },
                height: 'auto',
                display: 'block',
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: '1.25rem',  md: '2rem' },
                fontFamily: "Raleway, sans-serif"
              }}>
              MODELE CLASSIQUE
            </Typography>
          </Button>

          <Button
            onClick={() => { handleClickOpen(); setCategorie('sportif'); }}
            variant="text"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              maxWidth: 420,
              mx: 'auto',
              mt: 5,
              textTransform: 'none',
              p: 2,
            }}
          >
            <Box
              component="img"
              src={montre}
              alt="Montre - aperçu"
              sx={{
                width: { xs: '40%', md: '30%' },
                height: 'auto',
                display: 'block',
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                fontFamily: "Raleway, sans-serif"
              }}>
              MODELE SPORTIF
            </Typography>
          </Button>

        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={montre}
            alt="Montre - aperçu"
            sx={{
              width: { xs: '70%', md: '100%' },
              maxWidth: 420,
              height: 'auto',
              display: {xs: 'none', md: 'block'},
              mx: 'auto'
            }}
          />
        </Grid>
      </Grid>

      <CatalogueDialog open={open} setOpen={setOpen} categorie={categorie} />
    </Box>
  );
}
