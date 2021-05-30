import styled, { keyframes, css } from 'styled-components';

const backwardArrowAnimation = keyframes`
from{
  left: 50%
}
to{
  left: 10%
}
`

const forwardArrowAnimation = keyframes`
from{
  left: 50%
}
to{
  left: 90%
}
`

export const Container = styled.div`
  width: 90%;
  height: 80vh;
  display: flex;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`

export const ArrowContainer = styled.div`
  font-size: 50px;
  width: 50px;
  height: 50px;
  background-color: #dee2e6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  left: ${props => props.leftPosition};
  position: absolute;

  ${props => props.arrowDir === 'forward' ?
    css`
      animation: ${forwardArrowAnimation} 1s ease;
    `: css`
    animation: ${backwardArrowAnimation} 1s ease;
    `
  }
  z-index: 1;
  :hover {
    background-color: #adb5bd;
  }
`

export const IndicatorIndexContainer = styled.div`
width: 200px;
margin: 0 auto;
display: flex;

`
export const IndicatorIndex = styled.div`
width: 30px;
height: 8px;
margin: 5px;
background-color: ${props=> props.bgColor};
border-radius: 5px ;
`
