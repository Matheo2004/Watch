import * as React from 'react';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  gap: '1rem',
  [`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
      borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
      borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
    },
  [`& .${toggleButtonGroupClasses.lastButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
      borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
      borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
      borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`,
    },
  [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled}, & .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]:
    {
      borderLeft: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`,
    },
}));

export default function PersonnalisationBoitier() {
  const [alignment, setAlignment] = React.useState('gold');

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Box sx={{ width: { xs: '100%', md: '65%' } }}>
        <Typography
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            fontSize: { xs: '1.5rem', md: '2rem' },
          }}
        >
          Boîtier
        </Typography>

        <StyledToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="Choix du boîtier"
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          <ToggleButton
            value="gold"
            aria-label="Or"
            sx={{
              flex: { xs: '0 1 28%', md: '0 1 10rem' },
              minWidth: 72,
              border: '0.13rem solid rgba(0,0,0,0.7) !important',
              textTransform: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 1,
            }}
          >
            <PanoramaFishEyeIcon
              sx={{
                fontSize: { xs: 28, md: 30 },
                color: 'gold',
                backgroundColor: 'gold',
                borderRadius: '10%',
                p: '6px',
              }}
            />
          </ToggleButton>

          <ToggleButton
            value="gray"
            aria-label="Gris"
            sx={{
              flex: { xs: '0 1 28%', sm: '0 1 30%', md: '0 1 10rem' },
              minWidth: 72,
              border: '0.13rem solid rgba(0,0,0,0.7) !important',
              textTransform: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 1,
            }}
          >
            <PanoramaFishEyeIcon
              sx={{
                fontSize: { xs: 28, md: 30 },
                color: 'gray',
                backgroundColor: 'gray',
                borderRadius: '10%',
                p: '6px'
              }}
            />
          </ToggleButton>

          <ToggleButton
            value="black"
            aria-label="Noir"
            sx={{
              flex: { xs: '0 1 28%', sm: '0 1 30%', md: '0 1 10rem' },
              minWidth: 72,
              border: '0.13rem solid rgba(0,0,0,0.7) !important',
              textTransform: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 1,
            }}
          >
            <PanoramaFishEyeIcon
              sx={{
                fontSize: { xs: 28, md: 30 },
                color: 'black',
                backgroundColor: 'black',
                borderRadius: '10%',
                p: '6px'
              }}
            />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Box>
    </Box>
  );
}
