import React from 'react';
import { Container, ArrowContainer, IndicatorIndexContainer, IndicatorIndex } from './styles/carousel';
import ImageCarousel  from './styles/image';

export default function CarouselContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children} </Container>
}

CarouselContainer.Arrow = function CarouselArrowContainer({ children, ...restProps }) {
  return <ArrowContainer {...restProps}>{children}</ArrowContainer>
}

CarouselContainer.ImageContainer = function CarouselImageContainer({ children, ...restProps }) {
  return <ImageCarousel {...restProps}>{children} </ImageCarousel>
}

CarouselContainer.IndicatorContainer = function CarouselIndicatorContainer({ children, ...restProps }) {
  return <IndicatorIndexContainer {...restProps}>{children} </IndicatorIndexContainer>
}
CarouselContainer.Indicator = function CarouselIndicator({ children, ...restProps }) {
  return <IndicatorIndex {...restProps}>{children} </IndicatorIndex>
}
