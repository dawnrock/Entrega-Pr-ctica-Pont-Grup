import Header from '../components/header';

function HeaderContainer() {
  return (
    <>
      <Header>
        <Header.Wrapper>
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
              to="/galery">Galery
               </Header.HeaderLink>
          </Header.Column>
        </Header.Wrapper>
      </Header>
      <Header.BorderRouter />
    </>
  )
}

export default HeaderContainer;
