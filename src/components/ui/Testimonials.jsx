import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import '../scss/Testimonials.scss'
import { testimonialsHeading, testimonialsData } from '../data/Data'

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container container grid">
        {
          testimonialsHeading.map((item) => (
            <div className="heading">
              <Fade triggerOnce duration={1000} delay={500} direction='down'>
                <h1>{item.title}</h1>
              </Fade>

              <Fade triggerOnce duration={1000} delay={500} direction='up'>
                <p>{item.text}</p>
              </Fade>
            </div>
          ))
        }

        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {
            testimonialsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="data">
                  <Zoom triggerOnce duration={1000} delay={500}>
                    <img src={item.img} alt="" />
                  </Zoom>
                  <div className="text">
                    <Fade triggerOnce duration={1000} delay={500} direction='down'>
                      <h3>{item.name}</h3>
                    </Fade>

                    <Fade triggerOnce duration={1000} delay={500} direction='up'>
                      <p>" {item.text} "</p>
                    </Fade>
                    <div className="icons">
                      <Zoom triggerOnce duration={1000} delay={500}>
                        <i>{item.icons1}</i>
                        <i>{item.icons2}</i>
                        <i>{item.icons3}</i>
                        <i>{item.icons4}</i>
                        <i>{item.icons5}</i>
                      </Zoom>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}
