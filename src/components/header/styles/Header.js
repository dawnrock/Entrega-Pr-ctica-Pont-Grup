import styled, { keyframes } from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  padding: 15vh;
  background: whitesmoke;
  /* position: relative; */
  bottom: 50px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* max-width: 1000px; */
  margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  margin-right: 60px;

`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  grid-template-columns: repeat( minmax(150px, 1fr));
  grid-gap: 40px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat( minmax(150px, 1fr));
  }

`


const spin = keyframes`

  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const Logo = styled.img`
  height: 2vmin;
  pointer-events: none;

@media (prefers-reduced-motion: no-preference) {
  animation: ${spin} infinite 5s linear;
  /* ${(props) => {
    if (props.fast) {
      return 'animation-duration: 3s'
    } else {
      return 'animation-duration: 15s'
    }
  }} */
}
`
export const HeaderLink
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
