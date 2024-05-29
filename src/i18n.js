// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Hello, I'm Zaken": "Hello, I'm Zaken",
          "Professional Web Developer": "Professional Web Developer",
          "Home": "Home",
          "About": "About",
          "Projects": "Projects",
          "My Projects": "My Projects",
          "Contact": "Contact",
          "About Me": "About Me",
          "Although I tend to create new things on Github, these are some of my best projects so far!": "Although I tend to create new things on Github, these are some of my best projects so far!",
          "OpenDevTools": "OpenDevTools",
          "I created this page to gather open source web resources that people around the world could use for free and selflessly.": "I created this page to gather open source web resources that people around the world could use for free and selflessly.",
          "Find out more": "Find out more",
          "Stock Story Reporter": "Stock Story Reporter",
          "A simple python program that uses GUI, pandas and quantstats to generate a full company report. With an input of an initial investment, you can see how much your capital would have increased/decreased.": "A simple python program that uses GUI, pandas and quantstats to generate a full company report. With an input of an initial investment, you can see how much your capital would have increased/decreased.",
          "Metamask Wallet Connect": "Metamask Wallet Connect",
          "With this simple code, we use a simple app made with React to connect our wallet through Metamask and get both address and balance, simple but extremely useful for future projects or simple wallet implementations!": "With this simple code, we use a simple app made with React to connect our wallet through Metamask and get both address and balance, simple but extremely useful for future projects or simple wallet implementations!",
          "Hello! I'm Guillermo Martínez, known as Zaken_dev, and I'm a passionate web developer with a focus on creating efficient and visually appealing web applications. My passion for technology drives me to constantly face new challenges, allowing me to grow and improve in my field. If you are looking for someone with creativity and dedication to take your projects to the next level, do not hesitate to contact me. Together we can achieve incredible things!": "Hello! I'm Guillermo Martínez, known as Zaken_dev, and I'm a passionate web developer with a focus on creating efficient and visually appealing web applications. My passion for technology drives me to constantly face new challenges, allowing me to grow and improve in my field. If you are looking for someone with creativity and dedication to take your projects to the next level, do not hesitate to contact me. Together we can achieve incredible things!"
        
        }
      },
      es: {
        translation: {
          "Hello, I'm Zaken": "Hola, soy Zaken",
          "Professional Web Developer": "Desarrollador Web Profesional",
          "Home": "Inicio",
          "About": "Sobre mí",
          "Projects": "Proyectos",
          "My Projects": "Mis Proyectos",
          "Contact": "Contacto",
          "About Me": "Sobre mí",
          "Although I tend to create new things on Github, these are some of my best projects so far!": "Aunque tiendo a crear cosas nuevas en Github, ¡estos son algunos de mis mejores proyectos hasta ahora!",
          "OpenDevTools": "OpenDevTools",
          "I created this page to gather open source web resources that people around the world could use for free and selflessly.": "Creé esta página para recopilar recursos web de código abierto que pudieran usar personas de todo el mundo, de forma gratuita y desinteresada.",
          "Find out more": "Descubre más",
          "Stock Story Reporter": "Informe de Historia de Acciones",
          "A simple python program that uses GUI, pandas and quantstats to generate a full company report. With an input of an initial investment, you can see how much your capital would have increased/decreased.": "Un programa simple en Python que utiliza GUI, pandas y quantstats para generar un informe completo de la empresa. Con una inversión inicial, puedes ver cuánto habría aumentado/disminuido tu capital.",
          "Metamask Wallet Connect": "Conexión de Billetera Metamask",
          "With this simple code, we use a simple app made with React to connect our wallet through Metamask and get both address and balance, simple but extremely useful for future projects or simple wallet implementations!": "Con este código simple, usamos una aplicación simple hecha con React para conectar nuestra billetera a través de Metamask y obtener tanto la dirección como el saldo, ¡simple pero extremadamente útil para futuros proyectos o implementaciones de billetera simples!",
          "Hello! I'm Guillermo Martínez, known as Zaken_dev, and I'm a passionate web developer with a focus on creating efficient and visually appealing web applications. My passion for technology drives me to constantly face new challenges, allowing me to grow and improve in my field. If you are looking for someone with creativity and dedication to take your projects to the next level, do not hesitate to contact me. Together we can achieve incredible things!": "¡Hola! Soy Guillermo Martínez, conocido como Zaken_dev, y soy un apasionado desarrollador web con un enfoque en la creación de aplicaciones web eficientes y visualmente atractivas. Mi pasión por la tecnología me impulsa a enfrentar constantemente nuevos desafíos, permitiéndome crecer y mejorar en mi campo. Si buscas a alguien con creatividad y dedicación para llevar tus proyectos al siguiente nivel, no dudes en ponerte en contacto conmigo. ¡Juntos podemos lograr cosas increíbles!"
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;