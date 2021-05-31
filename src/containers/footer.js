import Footer from '../components/footer';
import Icon from '../components/icons';
import logo from '../components/footer/images/logo.svg';


export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Mis proyectos</Footer.Title>
            <Footer.Link href="https://github.com/dawnrock">GitHub <Icon className="fab fa-github" /></Footer.Link>          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Tecnología</Footer.Title>
            <Footer.Link href="https://reactjs.org">React <Footer.Logo src={logo} alt="logo" /></Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="https://twitter.com/DawnRock86">Twitter <Icon className="fab fa-twitter" /></Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contacto</Footer.Title>
            <Footer.Link href="mailto:manualbadj@gmail.com">Gmail <Icon className="fas fa-at" /></Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  )
}
