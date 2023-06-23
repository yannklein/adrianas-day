import { Swiper, SwiperSlide  } from 'swiper/react';
import { EffectCards } from 'swiper';
import './App.css'
import 'swiper/css';
import "swiper/css/effect-cards";

function App() {
  return (
    <>
      <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
    </Swiper>
    </>
  )
}

export default App
