import contacts from './data'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Ponte en contacto</h2>
      <p>
        ¡Envíame un mensaje a través de cualquiera de los enlaces que aparecen a continuación!
      </p>
      <div className="container contact__container">
       {contacts.map(contact => (
          <a
            key={contact.id}
            href={contact.link}
            target={contact.link.startsWith('mailto:') ? '_self' : '_blank'}
            rel="noopener noreferrer"
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact