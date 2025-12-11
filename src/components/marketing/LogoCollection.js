import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useColorScheme } from '@mui/material/styles';

const darkModeLogos = [
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg?color=white",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg?color=white",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg?color=white",
];


const lightModeLogos = [
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg?color=000000",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg?color=000000",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg?color=000000",
];


const logoStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px',
  opacity: 0.7,
};

export default function LogoCollection() {
  const { mode, systemMode } = useColorScheme();
  let logos;
  if (mode === 'system') {
    if (systemMode === 'light') {
      logos = lightModeLogos;
    } else {
      logos = darkModeLogos;
    }
  } else if (mode === 'light') {
    logos = lightModeLogos;
  } else {
    logos = darkModeLogos;
  }

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        sx={{ color: 'text.secondary' }}
      >
        Trusted by the best companies
      </Typography>
      <Grid container sx={{ justifyContent: 'center', my: 4, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
