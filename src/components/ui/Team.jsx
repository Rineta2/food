import { teamHeading, teamData } from '../data/Data'

import '../scss/Team.scss'

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="team__container container grid">
        {
          teamHeading.map((item) => (
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

        <div className="content">
          {
            teamData.map((item) => (
              <div className="data" key={item.id}>
                <Zoom triggerOnce duration={1000} delay={500}>
                  <img src={item.img} alt="" />
                </Zoom>
                <div className="text">
                  <Fade triggerOnce duration={1000} delay={500} direction='down'>
                    <h3>{item.name}</h3>
                  </Fade>

                  <Fade triggerOnce duration={1000} delay={500} direction='up'>
                    <p>{item.position}</p>
                  </Fade>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
