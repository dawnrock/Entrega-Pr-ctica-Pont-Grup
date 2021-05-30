import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  padding: 15vh;
  background: whitesmoke;
  position: relative;
  top: 400px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

`
export const Column = styled.div`
  display: grid;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`
export const Link = styled.a`
  color: black;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: yellowgreen;
    transition: 200ms ease-in;
  }
`
export const Title = styled.p`

font-size: 24px;
margin-bottom: 40px;
font-weight: bold;
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

}
`
