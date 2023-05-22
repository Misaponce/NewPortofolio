import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    .init({
        // This will show all Lngs and any error on console, should be false in production
        debug: false,
        // if any other language is not shoose 'en' will be set by default
        fallbackLng: 'en',
        // translation resourses
        resources: {
            // ***************************
            // for english
            // ***************************
            en: {
                translation: {
                    // Common Translations
                    commonTranslations:{
                        navBar: {
                            home: 'Home',
                            about: 'About',
                            projects: 'Projects',
                            contact: 'Contact',
                        },
                        common: {
                            languages: 'Languanges',
                            resume: 'Resume',
                        }
                    },
                    // Home Translations
                    homeTranslations: {
                        homeRole: "Frontend developer.",
                    },
                    // About Translations
                    aboutTranslations: {
                        aboutHeader: "About me",
                        aboutP: {
                            part1: "Hello, my name is Misael Ponce and I always feel atracted about technology, it all started back in 2010 when I was able to assamble my first computer by my self.",
                            part2: "Eventually I follow my curiosity and end up self-teaching web development, focusing on the frontend looking forward to improve my knowledge.",
                            part3: "I recently was able to finish my own portofolio along with different projects that I'm also sharing here.",
                            part4: "Below are a few technologies that I have worked within this portofolio and other projects:"
                        }
                    },
                    // Projects Translations 
                    projectsTranslations: {
                        projectsHeader: "Projects",
                        projectsList: {
                            pj1: {
                                pjType: "Cooperative Project",
                                pjName: "TechPlayground",
                                pjInfo: "This project was developed with the porpouse of put in practice concept and knowledge adquire in the Web Developer Bootcamp by Kodigo (https://kodigo.org/) in which we were able to learn, work and level up our skills in HTML, CSS & JavaScript along with libraries such as ReacJS and CSS frameworks like Bootstrap."
                            },
                            pj2: {
                                pjType: "Freelance Project",
                                pjName: "China & Bites",
                                pjInfo: "China & Bites is a chinese food restaurant located in El Salvador who's owner contact me to develope a concept landing page that covers some of the most important details of his bussiness."
                            },
                            pj3: {
                                pjType: "Personal Project",
                                pjName: "Portofolio",
                                pjInfo: "I design this portofolio with the pourpose of show some of the technologies I have experience with and a littlle description about my self and educational experience. The language change option allowed me to implement the use of internationalization framework and thus make the project more iteractive."
                            },
                        }
                    },
                    // Contact Translations
                    contactTranslations: {
                        contactHeader: "Contact",
                        contactP: "Whether you want to share any idea to work together or just want to say hi, I'll be ready to answer on the following channels:"
                    },
                }
            },
            // ***************************
            // for spanish
            // ***************************
            es: {
                translation: {
                    // Common Translations
                    commonTranslations:{
                        navBar: {
                            home: 'Inicio',
                            about: 'Sobre Mi',
                            projects: 'Proyectos',
                            contact: 'Contacto',
                        },
                        common: {
                            languages: 'Idioma',
                            resume: 'Hoja de Vida',
                        }
                    // Home Translations
                    },
                    homeTranslations: {
                        homeRole: "Desarrollador Frontend.",
                    },
                    // About Translations
                    aboutTranslations: {
                        aboutHeader: "Sobre mi",
                        aboutP: {
                            part1: "Hola, mi nombre es Misael Ponce y siempre me sentí atraído por la tecnología, todo comenzó allá por el 2010 cuando pude armar mi primera computadora por mi cuenta.",
                            part2: "Eventualmente mi interes en la programacion crecio y  decidi enfocarme en la programacion web especificamente como desarrollador Frontend",
                            part3: "Recientemente pude terminar mi propio portafolio, junto con diferentes proyectos que también estoy compartiendo aquí.",
                            part4: "A continuación se presentan algunas tecnologías en las que he trabajado dentro de este portafolio y otros proyectos:"
                        }
                    },
                    // Projects Translations 
                    projectsTranslations: {
                        projectsHeader: "Proyectos",
                        projectsList: {
                            pj1: {
                                pjType: "Proyecto Cooperativo",
                                pjName: "TechPlayground",
                                pjInfo: "Este proyecto fue desarrollado con el propósito de poner en práctica los conocimientos adquiridos en el Web Developer Bootcamp by Kodigo (https://kodigo.org/) en el cual pudimos aprender, desarrollar y nivelar nuestras habilidades en HTML, CSS & JavaScript junto con bibliotecas como ReacJS y frameworks CSS como Bootstrap."
                            },
                            pj2: {
                                pjType: "Proyecto Freelance",
                                pjName: "China & Bites",
                                pjInfo: "China & Bites es un restaurante de comida china ubicado en El Salvador cuyo dueño me contactó para desarrollar una landing page conceptual que cubra algunos de los detalles más importantes de su negocio."
                            },
                            pj3: {
                                pjType: "Proyecto Personal",
                                pjName: "Portofolio",
                                pjInfo: "Diseñé este portafolio con el propósito de mostrar algunas de las tecnologías con las que tengo experiencia y una pequeña descripción sobre mi experiencia educativa y personal. La opcion del cambio de idioma me permitio poner en practica el uso de nuevas librerias y asi agregar interactividad al proyecto."
                            },
                        }
                    },
                    // Contact Translations
                    contactTranslations: {
                        contactHeader: "Contacto",
                        contactP: "Ya sea que desee presentar una propuesta de colaboración o simpletemente tenga interés en comunicarse, puede contactarme a través de los siguientes canales de comunicación, en los cuales estaré a su disposición para responder de manera oportuna y eficiente."
                    },
                }
            }
        },

});

export default i18next;