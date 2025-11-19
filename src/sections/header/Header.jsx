import { useEffect } from 'react';
import HeaderImage from '../../assets/AvatarAngel1.jpg';
import data from './data';
import CV from '../../assets/cv.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './header.css';
import { HiDownload } from 'react-icons/hi';

const Header = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

    return (
        <header id="header">
        <div className="container header__container">
            <div className="header__profile" data-aos="fade-in">
            <img src={HeaderImage} alt="Header Portait" />
            </div>
            <h3 data-aos="fade-up">Angel Bustamante</h3>
            <p data-aos="fade-up">
            Desarrollador .NET con 4+ años de experiencia en el desarrollo y mantenimiento/mejoras de aplicaciones empresariales. 
            Me apasiona trabajar en equipo, compartir conocimientos y aprender continuamente de mis compañeros, 
            Me destaco por mi compromiso con entregar soluciones de calidad alineadas con objetivos del negocio.
            </p>
            <div className="header__cta" data-aos="fade-up">
            <a href={CV} download className='btn primary'>Curriculum <HiDownload/></a>
            {/* <a href="#contact" className='btn primary'>Hablemos</a> */}
            <a href="#portfolio" className='btn primary'>Proyectos</a>
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