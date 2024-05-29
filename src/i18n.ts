import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        
        Home: 'Home',
        About: 'About',
        Contact: 'Contact',
        Skills: 'Skills',
        Projects:'Projects',
        Knowledge:'Knowledge',
        Bienvenido: 'Welcome',
        textoPresent: 'I am a software engineer with training in international business administration and finance, backed by a master’s degree in statistics. My passion for Muay-Thai and running is complemented by my dedication to developing web solutions, plus data science and R management skills, seek to make the most of data to drive innovation and growth in the field of software engineering',
        SobreMi :' I am Juan Camilo López ',
        textoSobre: 'As a software engineer with experience in international business management and finance, backed by a master’s degree in statistics and experience in various fields of research, my focus is on leveraging technology to drive innovative solutions. Outside of the professional realm, my passion for Muay-Thai and running is intertwined with my ability to extract valuable insights from data, using tools like R to empower strategic decision-making.',
        previos:'Previous Studies',
        firstStudies:'International Business Manager',
        secondStudies:'Financial Manager',
        thirdStudies:'Software Engineer',
        quarterStudies:'Magister in Applied Statistics',
        firstAcademic:'CEIPA University Institution',
        secondAcademic: 'CEIPA University Institution',
        thirdAcademic:'Cooperative University of Colombiaa',
        quarterAcademic:'University of Nariño',
        contact: 'Contact me ',
        nombreContact: 'Name',
        apellidoConatct: 'Lastname',
        emailContact: 'Email',
        mensajeConatct:'Mesagge',
        enviarContact:'Send message',
        hecho:'Handcrafted by me :)',
        project1: 'Project 1',
        description1:'Description 1',
        project2: 'Project 2',
        description2:'Description 2',
        project3: 'Project 3',
        description3:'Description 3',
        skills1: 'Data Science',
        skills2: 'Software Development',
        skills3: 'AI',
        experience1: 'Administrative intern',
        experience2: 'Investsigation aid',
        descripExp1:'Observatorio de Internacionalización Empresarial y Regional (OIER)',
        descripExp2:'Institución Universitaria CEIPA',
      },
    },
    es: {
      translation: {
        Home: 'Inicio',
        About: 'Acerca de',
        Contact: 'Contacto',
        Skills: 'Habilidades',
        Projects:'Proyectos',
        Knowledge:'Experiencia',
        Bienvenido: 'Bienvenido',
        textoPresent: 'Soy un ingeniero de software con formación en administración de negocios internacionales y finanzas, respaldada por una maestría en estadística. Mi pasión por el Muay-Thai y el running se complementa con mi dedicación al desarrollo de soluciones web, además de habilidades en ciencias de datos y manejo de R, busco aprovechar al máximo los datos para impulsar la innovación y el crecimiento en el campo de la ingeniería de software',
        SobreMi :'Yo soy Juan Camilo López',
        textoSobre:'Como ingeniero de software con experiencia en administración de negocios internacionales y finanzas, respaldado por una maestría en estadística y experiencia en distintos campos de investigación, mi enfoque se centra en aprovechar la tecnología para impulsar soluciones innovadoras. Fuera del ámbito profesional, mi pasión por el Muay-Thai y el running se entrelaza con mi habilidad para extraer conocimientos valiosos de los datos, utilizando herramientas como R para potenciar la toma de decisiones estratégicas.',    
        previos:'Estudios Previos',
        firstStudies:'Administrador de Negocios Internacionales',
        secondStudies:'Administrador Financiero',
        thirdStudies:'Ingeniero de Software',
        quarterStudies:'Magister en Estadística Aplicada',
        firstAcademic:'Institución Universitaria CEIPA',
        secondAcademic: 'Institución Universitaria CEIPA',
        thirdAcademic:'Universidad Cooperativa de Colombia',
        quarterAcademic:'Universidad de Nariño',
        contact: 'Contáctame',
        nombreContact: 'Nombre',
        apellidoConatct: 'Apellido',
        emailContact: 'Correo electrónico',
        mensajeConatct:'Mensaje',
        enviarContact:'Enviar mensaje',
        hecho:'Hecho por mi',
        project1: 'Proyecto 1',
        description1:'Descripción del Proyecto 1',
        project2: 'Proyecto 2',
        description2:'Descripción del Proyecto 2',
        project3: 'Proyecto 3',
        description3:'Descripción del Proyecto 3',
        skills1: 'Ciencia de datos',
        skills2: 'Desarrollo de software',
        skills3: 'Inteligencia artificial',
        experience: 'Experiencia Laboral',
        experience1: 'Interno Administrativo',
        experience2: 'Asistente de Investigación',
        descripExp1:'Observatorio de Internacionalización Empresarial y Regional (OIER)',
        descripExp2:'Institución Universitaria CEIPA',

      },
          },

    },

  },
);

export default i18n;