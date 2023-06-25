import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/effect-cards';

import CarouselCard from './CarouselCard';

import dataCards from '../assets/card-data.json';

function Carousel() {  
  return (
    <div>
      <SliderWrap>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
        >
          { dataCards.map( (card, index) => <SwiperSlide key={`card${index}`}><CarouselCard progress={index / dataCards.length} content={card} /></SwiperSlide>)}
        </Swiper>
      </SliderWrap>
    </div>
  );
}

const SliderWrap = styled.div `

  .swiper {
    width: 80vw;
    height: 120vw;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #000;
    box-shadow: 0 0 48px rgba(255, 255, 255, 0.5);
  }

  @media (min-width: 700px) {
    .swiper {
      width: 480px;
      height: 640px;
    } 
}`

export default Carousel;