import Image1 from '../../assets/project1.png'
import Image2 from '../../assets/project2.png'
import Image3 from '../../assets/project3.png'
import Image4 from '../../assets/project4.jpg'
import Image5 from '../../assets/project5.png'
import Image6 from '../../assets/project6.png'
import Image7 from '../../assets/project7.jpg'
import Image8 from '../../assets/project8.jpg'
import Image9 from '../../assets/project9.jpg'

const data = [
    {
        id: 1,
        category: 'backend',
        image: Image1,
        title: "Ecommerce .NET - Clean Architecture (Backend)",
        desc: "Backend con ASP.NET Core Web API 8 y Clean Architecture, usando Specification Pattern, paginación avanzada y buenas prácticas de desarrollo. Para la integracion con Ecommerce FrontEnd realizado con React Js 17.",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/IgnacioBG17/AB-EcommerceBackEnd_APP'
    },
    {
        id: 2,
        category: 'frontend',
        image: Image2,
        title: "Ecommerce React JS (Frontend)",
        desc: "Frontend de un clon estilo Amazon construido con React 17 y Create React App, orientado a componentes reutilizables, Redux Toolkit para estado global, Stripe para pagos, y diseño responsivo con Bootstrap/MDBReact.",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/IgnacioBG17/AB-EcommerceFrontEnd_APP'
    },
    {
        id: 3,
        category: 'backend',
        image: Image3,
        title: "Transferencia Bancaria T (Backend)",
        desc: "Solución end-to-end para transferencias bancarias basada en microservicios y eventos, con despliegue en Azure mediante Terraform. El sistema prioriza seguridad, consistencia, resiliencia y observabilidad.",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/IgnacioBG17/AB-BankTransaction_APP'
    },
    {
        id: 4,
        category: 'backend',
        image: Image5,
        title: "WhatsappIntegration.API (Backend)",
        desc: "API desarrollada con .NET 8 para la integración con WhatsApp Cloud API, permitiendo la comunicación bidireccional entre aplicaciones y usuarios a través de mensajes de texto, imágenes, audio, video, documentos, ubicación y botones interactivos.",
        demo: 'https://whatsappintegrationapi-hmatgufwb7d5edef.centralus-01.azurewebsites.net/swagger/index.html',
        github: 'https://github.com/IgnacioBG17/AB-WhatsappIntegration_APP'
    },
    {
        id: 5,
        category: 'backend',
        image: Image6,
        title: ".NET 8 Microservices E-Commerce (Backend)",
        desc: "Solucion de comercio electronico basada en microservicios construida con .NET 8, ASP.NET Core MVC, Entity Framework Core, .NET Identity, Ocelot API Gateway y Azure Service Bus.",
        demo: 'https://github.com/IgnacioBG17/AB-MicroservicesArchitecture_APP',
        github: 'https://github.com/IgnacioBG17/AB-MicroservicesArchitecture_APP'
    }
]


export default data