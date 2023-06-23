import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Carousel.css';
import CarouselCard from './CarouselCard';

function Carousel() {
  const cards = [1,2,3,4,5,6];
  return (
    <div>
      <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      { cards.map( (card, index) => <SwiperSlide key={`card${index}`}><CarouselCard content={card} /></SwiperSlide>)}
    </Swiper>
    </div>
  );
}

export default Carousel;