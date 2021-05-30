import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: auto ;
  margin: 20px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

`
export const Title = styled.p`
font-size: 18px;
margin-bottom: 1px;
font-weight: bold;
`
export const Logo = styled.img`

border: 1px solid #000;
width: 250px;
height: 250px;

`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  text-align: left;
  margin: 40px;

`

export const InputTitle = styled.p`
  font-size: 24px;
  margin-left: 40px;
  font-weight: bold;
`

export const Input = styled.input`

  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`
