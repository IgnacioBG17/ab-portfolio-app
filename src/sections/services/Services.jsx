import { FaBriefcase } from 'react-icons/fa'
import Card from '../../components/Card'
import data from './data'
import './services.css'
import experiences from './data'

const Services = () => {
  return (
    // <section id="services">
    //   <h2>Mi experiencia</h2>
    //   <p>Te doy lo mejor en todos los servicios a continuación.</p>
    //   <div className="container services__container" data-aos="fade-up">
    //     {
    //       data.map(item => (
    //         <Card key={item.id} className="service light">
    //           <div className="service__icon">{item.icon}</div>
    //           <div className="service__details">
    //             <h4>{item.title}</h4>
    //               <p>{item.desc}</p>
    //           </div>
    //         </Card>
    //       ))
    //     }
    //   </div>
    // </section>
     <section id="services">
      <h2>Experiencia</h2>
      <p></p>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 200}>
            <div className="timeline-icon"><FaBriefcase /></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span className="timeline-date">{exp.date} · {exp.mode}</span>
              <ul>
                {exp.details.map((d, i) => (<li key={i}>{d}</li>))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services