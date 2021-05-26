import logo from '../logo.svg';
import styled, { keyframes } from 'styled-components/macro';

function Home() {
  return (
    <Container>
      <div>
        <Logo src={logo} alt="logo" fast={true} />
        <p>
          Lemon Coders!
        </p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
text-align: center;
`


const Link = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: #4cd9f0;
  border: 2px solid #4cd9f0;

`
const spin = keyframes`

  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Logo = styled.img`
height: 10vmin;
pointer-events: none;

@media (prefers-reduced-motion: no-preference) {
  animation: ${spin} infinite 15s alternate;
  ${(props) => {
    if (props.fast) {
      return 'animation-duration: 3s'
    } else {
      return 'animation-duration: 15s'
    }
  }}
}
`

export default Home;
