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
        Estás a un clic de crear la web o app web de tus sueños. ¡Envíame los detalles de tu proyecto hoy mismo para una web moderna, adaptable a móviles y de alto rendimiento!
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