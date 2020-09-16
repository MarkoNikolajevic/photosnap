import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Features from './pages/Features';
import Pricing from './pages/Pricing';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/stories'>
          <Stories />
        </Route>
        <Route path='/features'>
          <Features />
        </Route>
        <Route path='/pricing'>
          <Pricing />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
