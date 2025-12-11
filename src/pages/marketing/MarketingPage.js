import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../../theme/AppTheme'
import AppAppBar from '../../components/marketing/AppAppBar';
import Hero from '../../components/marketing/Hero';
import LogoCollection from '../../components/marketing/LogoCollection';
import Footer from '../../components/marketing/Footer';
import AIDetectorGrid from '../../components/marketing/AIDetectorGrid';

export default function MarketingPage(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Divider />
        <AIDetectorGrid
          cards={[
            { id: 1, image: "/1T.jfif", status: "red" },
            { id: 2, image: "/2T.jpeg", status: "red" },
            { id: 3, image: "/3T.jpeg", status: "red" },
            { id: 4, image: "/4T.jpeg", status: "red" },
            { id: 5, image: "/5N.jpg", status: "green" },
            { id: 6, image: "/6R.jpeg", status: "yellow" },
          ]}
        />

        <Divider />
       
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
