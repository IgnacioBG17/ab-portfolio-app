
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__center">
            {/* <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div> */}
            <div className="about__right">
                <h2>Habilidades</h2>
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

                </p>
                <p>
                {/* Hola, me llamo Angel Bustamante y soy de Managua, Nicaragua.
                Estudie la carrera de ingenieria de sistemas y soy desarrollador de aplicaciones.
                Me destaco por mi enfoque en la mejora continua, mi capacidad de adaptación y mi compromiso con entregar soluciones de calidad alineadas a los objetivos del negocio. */}
                </p>
                {/* <a href={CV} download className='btn primary'>Download CV <HiDownload/></a> */}
            </div>
        </div>
    </section>
  )
}

export default About