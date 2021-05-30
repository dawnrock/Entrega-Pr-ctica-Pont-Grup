import React from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import normalize from 'styled-normalize';
import Home from './scenes/Home';
import Buscador from './scenes/Buscador';
import Galery from './scenes/Galery';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { FooterContainer } from "./containers/footer";
import HeaderContainer from '../src/containers/header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <HeaderContainer />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/buscador">
            <Buscador />
          </Route>
          <Route path="/galery">
            <Galery />
          </Route>
        </Switch>
      </Router>
      <FooterContainer />
    </ThemeProvider>
  );
}

const theme = {
  colors: {
    primary: 'red',
    secondary: 'yellowgreen'
  }
}

const GlobalStyle = createGlobalStyle`
  html, body {
    ${normalize}
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`
export default App;
