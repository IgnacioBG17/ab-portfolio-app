import { FaCode } from "react-icons/fa"
import { FaDatabase } from "react-icons/fa"
import { FaCloud } from "react-icons/fa"
import { FaLaptopCode } from "react-icons/fa"
import { FaTools } from "react-icons/fa"
import { FaRegSmileBeam } from "react-icons/fa"

const data = [
    {
        id: 1,
        icon: <FaCode />,
        title: 'Backend',
        desc: '.NET Framework, .NET Core (2.1 → 8), C#, VB, WCF, ASP.NET MVC/Web API, Dapper, ' +
              'EF Core, AutoMapper, Identity, JWT, OAuth2, OpenID Connect, FluentValidation, API Versioning, Background Services, Clean Architecture, N-Layer Architecture.'
    },
    {
        id: 2,
        icon: <FaDatabase />,
        title: 'Databases and caching',
        desc: 'SQL Server, Execution Plans, SQL Profiler, T-SQL, Stored Procedures, SSRS, Tuning, Redis, Migrations y Seeding con EF Core.'
    },
    {
        id: 3,
        icon: <FaCloud />,
        title: 'Cloud & DevOps',
        desc: 'Azure (App Service, Storage, Service Bus, Application Insights, Key Vault), Docker Desktop, Deployment manual (WebDeploy), Git & GitHub, Azure DevOps.'
    },
    {
        id: 4,
        icon: <FaLaptopCode />,
        title: 'Frontend Web & Desktop',
        desc: 'React, Redux Toolkit, HTML5, CSS3, JavaScript, JQuery, Bootstrap, Razor Pages, Blazor, Windows Forms.'
    },
    {
        id: 5,
        icon: <FaTools />,
        title: 'Tools',
        desc: 'Draw.io, dotPeek, Redis Insight, Telerik Fiddler, Postman, Swagger UI, Service Bus Explorer, Azure Storage Explorer, WCF Test Client, SoapUI, Visual Studio / VS Code, Beyond Compare.'
    },
    {
        id: 6,
        icon: <FaRegSmileBeam />,
        title: 'Soft Skills',
        desc: 'Trabajo en equipo, Resolución de problemas, Comunicación, Aprendizaje continuo, Empatía profesional.'
    }
]

export default data;
