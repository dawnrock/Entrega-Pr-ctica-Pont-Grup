import styled, { css } from 'styled-components';
import 'pure-react-carousel/dist/react-carousel.es.css';



export const CarouselContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SliderWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 1000px;
  height: 500px;
  background: white;
  background-color: #ff6f69;
`
export const SliderImage = styled.div`
width: 1000px;
  height: 500px;
  background: url(${(p) => p.image});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;

`
