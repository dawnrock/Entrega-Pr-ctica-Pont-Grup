import Carousel from '../components/carousel/index'
import { CarouselProvider, Slider, Slide, ButtonNext, ButtonBack } from 'pure-react-carousel';



function Galery() {
  return (
    <div>
      <Carousel>
        <Carousel.SliderWrapper>
          <CarouselProvider
            naturalSlideWidth={1000}
            naturalSlideHeight={500}
            // totalSides={slides.length}
            visibleSlides={1}
          >


          </CarouselProvider>
        </Carousel.SliderWrapper>
      </Carousel>

    </div>
  );
}
export default Galery;

