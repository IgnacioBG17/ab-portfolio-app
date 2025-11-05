import {SiAdobexd} from 'react-icons/si'
import {RiReactjsLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiFillAppstore} from 'react-icons/ai'

const data = [
    {
        id: 1, icon: <SiAdobexd/>, title: 'UI/UX Design', desc: "Mis diseños son modernos e intuitivos. Utilizo estándares de la industria para garantizar que tus usuarios disfruten usando tu producto."
    },
    {
        id: 2, icon: <RiReactjsLine/>, title: 'Frontend Development', desc: "Su producto tendrá buen aspecto y será accesible en todos los dispositivos, incluidos teléfonos móviles, tabletas y ordenadores de sobremesa."
    },
    {
        id: 3, icon: <FaServer/>, title: 'Backend Development', desc: "La seguridad de su negocio/producto es una prioridad desde el inicio del proyecto. Me aseguraré de que su sitio web/aplicación esté protegido contra ataques."
    },
    {
        id: 4, icon: <AiFillAppstore/>, title: 'App Development', desc: 'A diferencia de otros desarrolladores del mercado, yo crearé una aplicación que funcione tanto en dispositivos iOS como Android sin ningún coste adicional para usted.'
    }
]

export default data