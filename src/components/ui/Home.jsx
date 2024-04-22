import '../scss/Home.scss'

import { home } from '../data/Data'

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Home() {
  return (
    <section className="home" id='home'>
      <div className="home__container container grid">
        {
          home.map((item, index) => (
            <div className="home__data" key={index}>
              <Fade triggerOnce delay={index * 500} duration={1000} direction='down'>
                <h2>{item.title}<span>{item.span}</span></h2>
              </Fade>

              <Zoom triggerOnce delay={index * 500} duration={1000}>
                <p>{item.text}</p>
              </Zoom>

              <Fade triggerOnce delay={index * 500} duration={1000} direction='up'>
                <a href={item.path}>{item.button}</a>
              </Fade>
            </div>
          ))
        }

      </div>
    </section>
  )
}
