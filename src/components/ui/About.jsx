import { about } from '../data/Data'

import '../scss/About.scss'

import { Fade, Zoom } from 'react-awesome-reveal'

export default function About() {
  return (
    <section className="about" id='about'>
      <div className="about__container container grid">
        {
          about.map((item) => (
            <div className="content">
              <div className="img">
                <Zoom triggerOnce duration={1000} delay={500} >
                  <img src={item.img} alt="" />
                </Zoom>
              </div>

              <div className="text">
                <Fade triggerOnce duration={1000} delay={500} direction='down'>
                  <h1>{item.title}</h1>
                </Fade>

                <Fade triggerOnce duration={1000} delay={500} direction='right'>
                  <h3>{item.text}</h3>
                </Fade>

                <Fade triggerOnce duration={1000} delay={500} direction='up'>
                  <div className="btn">
                    <a href={item.path}>{item.button}</a>
                  </div>
                </Fade>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
