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
                                pjName: "Tip Calculator",
                                pjInfo: "The tip calculator was made as a solution to a challenge from Frontend Mentor. Users are able to alculate the correct tip and total cost of the bill per person."
                            },
                            pj2: {
                                pjName: "China & Bites",
                                pjInfo: "China & Bites is a chinese food restaurant located in El Salvador who's owner contact me to develope a concept landing page that covers some of the most important details of his bussiness."
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
                                pjName: "Calculadora de Propina",
                                pjInfo: "Tip Calculator por su traducción al inglés, es una solución a un desafío del sitio web Frontend Mentor. Los usuarios pueden calcular la propina correcta y el costo total de la factura por persona."
                            },
                            pj2: {
                                pjName: "China & Bites",
                                pjInfo: "China & Bites es un restaurante de comida china ubicado en El Salvador cuyo dueño me contactó para desarrollar una landing page conceptual que cubra algunos de los detalles más importantes de su negocio."
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