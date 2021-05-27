import Header from '../components/header';

 function HeaderContainer() {
  return(
    <Header>
          <Header.Wrapper>
            <Header.Row>
              <Header.Column>
                <Header.HeaderLink
                  to="/">Home
               </Header.HeaderLink>
              </Header.Column>
              <Header.Column>
                <Header.HeaderLink
                  to="/buscador">Buscador de personajes Rick & Morty
               </Header.HeaderLink>
              </Header.Column>
              <Header.Column>
                <Header.HeaderLink
                  to="/contact">Galery
               </Header.HeaderLink>
              </Header.Column>
            </Header.Row>
            <Header.BorderRouter />
          </Header.Wrapper>
        </Header>

  )
}

export default HeaderContainer;
