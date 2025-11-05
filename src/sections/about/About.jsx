import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>Acerca de mí</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Crear proyectos que encanten a mis clientes siempre ha sido mi pasión.
                Con más de 3 años de experiencia en el sector del desarrollo web y más de 70 clientes satisfechos en todo el mundo,
                ¡siempre estoy motivado para lograr más!
                </p>
                <p>
                Hola, me llamo Angel Bustamante y soy de Managua, Nicaragua.
                Soy desarrollador web full-stack e ingeniero en sistemas.
                Mi prioridad es que tu negocio tenga presencia online de la mejor manera, ofreciéndote un diseño profesional y todas las funcionalidades necesarias para operar sin problemas en internet.
                ¡Contáctame hoy mismo y cuéntame los detalles de tu proyecto! ¡Empecemos! Consulta mi currículum a continuación.
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About