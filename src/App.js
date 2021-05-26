import React from "react";
import styled,{ createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import normalize from 'styled-normalize';
import Home from './scenes/Home';
import About from './scenes/About';
import Contact from './scenes/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { FooterContainer } from "./containers/footer";
import Header from './components/header/index';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
       <Router>
        <Header>
        <Header.Wrapper>
          <Header.Row>
            <Header.Column>
              <HeaderLink
               to="/">Home</HeaderLink
              >
            </Header.Column>
            <Header.Column>
              <HeaderLink
               to="/about">Sobre mí</HeaderLink
              >
            </Header.Column>
            <Header.Column>
              <HeaderLink
               to="/contact">Contacto</HeaderLink
              >
            </Header.Column>
          </Header.Row>
         </Header.Wrapper>
        </Header>

        <BorderRouter />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
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
const HeaderLink
 = styled(Link)`
  color: black;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: yellowgreen;
    transition: 200ms ease-in;
  }
`


const BorderRouter = styled.hr`
  border: 2px solid #4cd9f0;
  padding: 0;
  margin:0;
`

export default App;
