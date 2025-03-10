import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import MarketingPage from './body';
import './App.css';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <MarketingPage />
    </StyledEngineProvider>
  );
}

export default App;
