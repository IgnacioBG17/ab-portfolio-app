import HeaderImage from '../../assets/header.jpg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3>Angel Bustamante</h3>
        <p>
        Desarrollador .NET con 4+ años de experiencia en el desarrollo y mantenimiento de aplicaciones empresariales. 
        Me apasiona trabajar en equipo, compartir conocimientos y aprender continuamente de mis compañeros, 
        lo cual me ha permitido crecer tanto técnica como profesionalmente. Me destaco por mi enfoque en la mejora continua, 
        mi capacidad de adaptación y mi compromiso con entregar soluciones de calidad alineadas a los objetivos del negocio.
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Hablemos</a>
          <a href="#portfolio" className='btn light'>Mi trabajo</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header