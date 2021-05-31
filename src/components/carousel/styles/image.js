import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const forwardImageAnimation = keyframes`

from{
  right: -50%
}
to{
  right: 0%
}
`

const backwardImageAnimation = keyframes`

from{
  right: 50%
}
to{
  right: 0%
}
`

const ContainerImage = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 0;

  ${props => props.imageDir === 'forward' ?
    css`
      animation: ${forwardImageAnimation} 1s ease;
    `: css`
    animation: ${backwardImageAnimation} 1s ease;
    `
  }
`
const ImageStyles = styled.img`
  width: 1000px;
  height: 500px;
  background: url(${(p) => p.image});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;

`
const ImageCarousel = ({ src, imageDir }) => {
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    setCurrentImage(src)
  }, [src])

  return (
    <>
      {
        currentImage === src && (
          <ContainerImage imageDir={imageDir}>
            <ImageStyles src={src} />
          </ContainerImage >)
      }

    </>
  )
}
export default ImageCarousel;
