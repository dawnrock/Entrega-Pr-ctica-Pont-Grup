import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import normalize from 'styled-normalize';
import Home from './scenes/Home';
import Buscador from './scenes/Buscador';
import Contact from './scenes/Galery';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { FooterContainer } from "./containers/footer";
import HeaderContainer from '../src/containers/header';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
      <HeaderContainer>
        
      </HeaderContainer>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/buscador">
            <Buscador />
          </Route>
          <Route path="/contact">
            <Contact />
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
  /* box-sizing: border-box; */

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`
// const HeaderLink
//   = styled(Link)`
//   color: black;
//   margin-bottom: 20px;
//   font-size: 24px;
//   text-decoration: none;

//   &:hover {
//     color: yellowgreen;
//     transition: 200ms ease-in;
//   }
// `


// const BorderRouter = styled.hr`
//   border: 2px solid #4cd9f0;
//   padding: 0;
//   margin:0;
// `

export default App;
