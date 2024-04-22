import { kontakData, kontakHeading } from '../data/Data'

import { Fade } from 'react-awesome-reveal'

import '../scss/Kontak.scss'
export default function Kontak() {
  return (
    <section className="kontak" id="kontak">
      <div className="kontak__container container grid">

        {
          kontakHeading.map((item) => (
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

        <div className="kontak__data">
          {
            kontakData.map((item) => (
              <div className="data" key={item.id}>
                <Fade triggerOnce duration={1000} delay={500} direction='down'>
                  <i>{item.icons}</i>
                </Fade>
                <Fade triggerOnce duration={1000} delay={500} direction='left'>
                  <h3>{item.title}</h3>
                </Fade>

                <Fade triggerOnce duration={1000} delay={500} direction='right'>
                  <p>{item.text}</p>
                </Fade>

                <Fade triggerOnce duration={1000} delay={500} direction='up'>
                  <a href={item.path} target='_blank'>{item.button}</a>
                </Fade>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}
