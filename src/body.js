import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from './shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoColletion';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Detail from './pages/detail';

export default function Body(props) {
  const [selItem, setSelItem] = React.useState(false);

  const emitClick = (e) => {
    setSelItem(e);
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar selItem={selItem} setSelItem={setSelItem} />
      {!selItem && selItem !== 0 ? (
        <>
          <Hero id="hero" /> 
          <div>
            <LogoCollection id="logos" /> 
            <Features emitClick={emitClick} /> 
            <Divider />
            <Testimonials id="testimonials" /> 
            <Divider />
            <FAQ id="faq" /> 
            <Divider />
            <Footer id="footer" /> 
          </div>
        </>
      ) : ( <Detail /> )}
    </AppTheme>
  );
}