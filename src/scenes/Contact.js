// import Header from '../components/header/styles/Header';
import styled from 'styled-components/macro';

export default function Contact() {
    return (
      <div>
        <Info>
          <p>
          Contacto
          </p>
          <p>
          Correo electrónico: manualbadj@gmail.com
          </p>
        </Info>



      </div>
    );
}

const Info = styled.div`
  font-family: 'Courier New', Courier, monospace;
  color: yellowgreen;
`
