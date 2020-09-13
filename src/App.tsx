import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
