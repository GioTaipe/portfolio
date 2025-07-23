import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    greeting: "Backend developer with experience building REST APIs and scalable services using Node.js, applying advanced JavaScript along with frameworks like Express.js. Strong knowledge of relational and non-relational databases, cloud deployment (especially AWS), and containerization with Docker to streamline integration and continuous delivery. Additionally, I have frontend skills with Vue.js, which helps me understand the full application development lifecycle. My focus is on writing clean, maintainable, and performance-oriented code.",
    projectsTitle: "My Projects",
    projects: [
      {
        title: 'CHRONO TASK',
        description: 'Chrono Task is a responsive web application that allows you to manage tasks with time tracking. Users can create, start, stop, and complete tasks, ensuring that only one task can be active at a time.',
        tech: [
          { name: 'Node.js', icon: 'mdi-nodejs' },
          { name: 'Express', icon: 'mdi-alpha-e-circle' },
          { name: 'MongoDB', icon: 'mdi-database' },
          { name: 'Vue.js', icon: 'mdi-vuejs' },
          { name: 'Vuetify', icon: 'mdi-vuetify' }
        ],
        link: 'https://github.com/GioTaipe/TASK_MANAGER',
      },
      {
        title: 'BLOG APP',
        description: 'A complete blog application with user authentication, post system, comments, likes, profile management, and cloud image storage.',
        tech: [
          { name: 'Node.js', icon: 'mdi-nodejs' },
          { name: 'Express', icon: 'mdi-alpha-e-circle' },
          { name: 'MongoDB', icon: 'mdi-database' },
          { name: 'Vue.js', icon: 'mdi-vuejs' },
          { name: 'JWT', icon: 'mdi-lock' },
          { name: 'Pinia', icon: 'mdi-pine-tree' },
          { name: 'AWS', icon: 'mdi-cloud' },
          { name: 'Vuetify', icon: 'mdi-vuetify' }
        ],
        link: 'https://github.com/GioTaipe/blog-project',
      },
      {
        title: 'TAKE AWAY API',
        description: 'API for a takeaway app where users can register, browse products, add them to a cart, and easily place purchase orders.',
        tech: [
          { name: 'Node.js', icon: 'mdi-nodejs' },
          { name: 'Express', icon: 'mdi-alpha-e-circle' },
          { name: 'MySQL', icon: 'mdi-database' },
          { name: 'JWT', icon: 'mdi-lock' },
          { name: 'AWS', icon: 'mdi-cloud' },
          { name: 'Docker', icon: 'mdi-docker' }
        ],
        link: 'https://github.com/GioTaipe/take_away_project',
      },
    ],
    viewProject: "View Project",
    experienceTitle: "Experience",
    experience: [
      {
        title: "Backend Developer (Intern)",
        company: "The Hotels Network",
        date: "Sep 2023 - Jun 2024",
        description: "I was part of the technology team, managing tickets related to issues on hotelier websites. My work involved professional use of JavaScript for programming and SQL for addressing database issues and script functionality. Additionally, we collaborated on project management through platforms like Jira and maintained version control using GitHub."
      }
    ],
    studyTitle: "Studies and Certifications",
    studies: [
      {
        title: "Degree in Cross-Platform Application Development",
        place: "Pedralbes",
        date: "2022 - 2024"
      },
      {
        title: "AWS Cloud Quest: Cloud Practitioner",
        place: "Online Platform",
        date: "2025"
      },
      {
        title: "Frontend Course",
        place: "Fundación Esplai",
        date: "2024"
      }
    ],
    skillsTitle: "Skills",
    skills: [
      { logo: "javascript.png" },
      { logo: "Vuejs.png" },
      { logo: "Nodejs.png" },  
      { logo: "docker.png" },
      { logo: "mysql.png" },
      { logo: "MongoDB.png" },
      { logo: "postman.svg" },
      { logo: "Aws.png" },
      { logo: "github.png" },
      { logo: "Pinia.png" }
    ],
    contactTitle: "Contact Me",
    contactName: "Your Name",
    contactEmail: "Your Email",
    contactMessage: "Your Message",
    contactInfo: "Contact me and I will respond as soon as possible",
    contactSend: "Send",
    contactSent: "Message sent successfully!",
    resume: "Download Resume",
  },
  es: {
    greeting: "Programador backend con experiencia construyendo REST APIs y servicios escalables con Node.js, aplicando JavaScript de manera avanzada junto con frameworks como Express.js. Con sólidos conocimientos en bases de datos relacionales y no relacionales, despliegue en la nube (especialmente AWS) y contenedorización con Docker para facilitar la integración y entrega continua. Además, poseo conocimientos en frontend con Vue.js, lo que me permite comprender el ciclo completo de desarrollo de una aplicación. Mi enfoque está en escribir código limpio, mantenible y orientado al rendimiento.",
    projectsTitle: "Mis Proyectos",
    projects: [
      {
        title: 'CHRONO TASK',
        description: 'Chrono Task es una aplicación web responsiva que permite gestionar tareas con seguimiento de tiempo. Los usuarios pueden crear, iniciar, detener y completar tareas, asegurando que solo una tarea pueda estar activa a la vez.',
        tech: [
          { name: 'Node.js', icon: 'mdi-nodejs' },
          { name: 'Express', icon: 'mdi-alpha-e-circle' },
          { name: 'MongoDB', icon: 'mdi-database' },
          { name: 'Vue.js', icon: 'mdi-vuejs' },
          { name: 'Vuetify', icon: 'mdi-vuetify' }
        ],
        link: 'https://github.com/GioTaipe/TASK_MANAGER',
      },
      {
        title: 'BLOG APP',
        description: 'Una aplicación de blog completa con autenticación de usuarios, sistema de publicaciones, comentarios, likes, gestión de perfiles y almacenamiento de imágenes en la nube.',
        tech: [
          { name: 'Node.js', icon: 'mdi-nodejs' },
          { name: 'Express', icon: 'mdi-alpha-e-circle' },
          { name: 'MongoDB', icon: 'mdi-database' },
          { name: 'Vue.js', icon: 'mdi-vuejs' },
          { name: 'JWT', icon: 'mdi-lock' },
          { name: 'Pinia', icon: 'mdi-pine-tree' },
          { name: 'AWS', icon: 'mdi-cloud' },
          { name: 'Vuetify', icon: 'mdi-vuetify' }
        ],
        link: 'https://github.com/GioTaipe/blog-project',
      },
      {
        title: 'TAKE AWAY API',
        description: 'API para una app de comida para llevar, donde los usuarios pueden registrarse, explorar productos, añadirlos a un carrito y realizar pedidos de compra fácilmente.',
        tech: [
          { name: 'Node.js', icon: 'mdi-nodejs' },
          { name: 'Express', icon: 'mdi-alpha-e-circle' },
          { name: 'MySQL', icon: 'mdi-database' },
          { name: 'Vue.js', icon: 'mdi-vuejs' },
          { name: 'JWT', icon: 'mdi-lock' },
          { name: 'Pinia', icon: 'mdi-pine-tree' },
          { name: 'AWS', icon: 'mdi-cloud' },
          { name: 'Vuetify', icon: 'mdi-vuetify' },
          { name: 'Docker', icon: 'mdi-docker' }
        ],
        link: 'https://github.com/GioTaipe/take_away_project',
      },
    ],
    viewProject: "Ver Proyecto",
    studyTitle: "Estudios y certificaciones",
    experienceTitle: "Experiencia",
    experience: [
      {
        title: "Desarrollador Backend (interno)",
        company: "The Hotels Network",
        date: "Sep 2023 - Jun 2024",
        description: "Formé parte del equipo de tecnología, gestionando tickets relacionados con problemas en las páginas web de los hoteleros. Mi trabajo involucró el uso profesional de JavaScript para la programación y SQL  para abordar cuestiones de base de datos y funcionalidad de scripts. Además, colaboramos en la gestión de proyectos a través de plataformas como Jira y mantuvimos el control de versiones utilizando GitHub."
      }
    ],
    studies: [
      {
        title: "Desarrollo de Aplicaciones Multiplataforma",
        place: "Pedralbes",
        date: "2022 - 2024"
      },
      {
        title: "AWS Cloud Quest: Cloud Practitioner",
        place: "Plataforma Online",
        date: "2025"
      },
      {
        title: "Curso de Frontend",
        place: "Fundación esplai",
        date: "2024"
      }
    ],
    skillsTitle: "Habilidades",
    skills: [
      { logo: "javascript.png" },
      { logo: "Vuejs.png" },
      { logo: "Nodejs.png" },  
      { logo: "docker.png" },
      { logo: "mysql.png" },
      { logo: "MongoDB.png" },
      { logo: "postman.svg" },
      { logo: "Aws.png" },
      { logo: "github.png" },
      { logo: "Pinia.png" }
    ],
    contactTitle: "Contáctame",
    contactName: "Tu Nombre",
    contactEmail: "Tu Correo",
    contactMessage: "Tu Mensaje",
    constactInfo: "Envíame un mensaje y te responderé lo antes posible",
    contactSend: "Enviar",
    contactSent: "¡Mensaje enviado correctamente!",
    resume: "Descargar CV",
  }
}




export default createI18n({ locale: 'es', fallbackLocale: 'en', messages })
