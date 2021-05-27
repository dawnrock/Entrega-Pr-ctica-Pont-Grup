import React from 'react';
import { CarouselContainer, SliderWrapper } from './styles/carousel';


export default function Carousel({ children, ...restProps }) {
  return <CarouselContainer{...restProps}>{children}</CarouselContainer>
}

Carousel.SliderWrapper = function CarouselSliderWrapper({ children, ...restProps }) {
  return <SliderWrapper {...restProps}>{children}</SliderWrapper>
}
