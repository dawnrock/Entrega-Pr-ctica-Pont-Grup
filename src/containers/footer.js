import Footer from '../components/footer';
import  Icon  from '../components/icons';
import logo from '../logo.svg';


export function FooterContainer() {
    return(
      
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Mis proyectos</Footer.Title>
                    <Footer.Link href="https://github.com/dawnrock"><Icon className="fab fa-github"/>GitHub Proyects</Footer.Link>

                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Tecnología</Footer.Title>
                    <Footer.Link href="https://reactjs.org"><Footer.Logo src={logo} alt="logo" /> Creado con React</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://twitter.com/DawnRock86"><Icon className="fab fa-twitter"/>Twitter</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contacto</Footer.Title>
                    <Footer.Link href="mailto:manualbadj@gmail.com"><Icon className="fas fa-at"/>Gmail</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}
