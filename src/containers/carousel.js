import React, { useState } from 'react';
import styled from 'styled-components/macro';
import CarouselContainer from '../components/carousel/';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/all';
import car from '../components/carousel/img/car.svg';
import beach from '../components/carousel/img/beach.svg';
import tractor from '../components/carousel/img/tractor.svg';
import house from '../components/carousel/img/house.svg';

const images = [car, beach, tractor, house];

function CarouselComponent() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState('forward ');

  const nextImage = () => {
    setCurrentImageIndex((actualIndex) => actualIndex + 1);
    setDirection('forward');
  }

  const preImage = () => {
    setCurrentImageIndex((actualIndex) => actualIndex - 1)
    setDirection('backward');
  }

  return (
    <>
      <Carousel>
        <CarouselContainer>
          {currentImageIndex !== 0 && (
            <CarouselContainer.Arrow onClick={preImage} leftPosition="10%" arrowDir="backward">
              <IoIosArrowDropleft />
            </CarouselContainer.Arrow>
          )}
          <CarouselContainer.ImageContainer src={images[currentImageIndex]} imageDir={direction} />
          {currentImageIndex !== images.length - 1 && (
            <CarouselContainer.Arrow onClick={nextImage} leftPosition="90%" arrowDir="forward">
              <IoIosArrowDropright />
            </CarouselContainer.Arrow>
          )}
        </CarouselContainer>
        <CarouselContainer.IndicatorContainer>
          {images.map((img, index) => (
            <CarouselContainer.Indicator key={img} bgColor={index === currentImageIndex ? '#adb5bd' : '#dee2e6'} />
          )
          )}
        </CarouselContainer.IndicatorContainer>
      </Carousel>


    </>
  )
}

const Carousel = styled.div`
  height: 50vh;
`

export default CarouselComponent;
