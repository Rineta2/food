import { headingServices, dataServices } from "../data/Data"

import '../scss/Services.scss'

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Services() {
  return (
    <section className="services" id="services">

      <div className="services__container container grid">

        {
          headingServices.map((item) => (
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


        <div className="data__content">
          {
            dataServices.map((item) => (
              <div className="data" key={item.id}>
                <Fade triggerOnce duration={1000} delay={500} direction='down'>
                  <i className="icons">{item.icons}</i>
                </Fade>
                <Zoom triggerOnce duration={1000} delay={500}>
                  <h3>{item.title}</h3>
                </Zoom>
                <Fade triggerOnce duration={1000} delay={500} direction='up'>
                  <p>{item.text}</p>
                </Fade>
              </div>
            ))
          }
        </div>

      </div>

    </section>
  )
}
