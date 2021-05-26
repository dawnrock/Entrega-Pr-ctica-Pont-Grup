import { useState } from 'react';
// import Header from '../components/header/styles/Header';
import styled from 'styled-components/macro';

export default function About() {
  const [showInfo, setShowInfo] = useState(false);

    return (
      <div>
        <Info>INFO</Info>
        <button onClick={() => setShowInfo(true)}>Información Extra</button>
        {showInfo && <Info> {miTexto}</Info>}
      </div>
    );
}


const Info = styled.div`
  font-family: 'Courier New', Courier, monospace;
  color: yellowgreen;
`
const miTexto = "Soy un máquina, te miro y te programo";
