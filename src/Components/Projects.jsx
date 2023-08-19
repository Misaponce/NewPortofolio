import React from 'react'
import '../stylesheet/Projects.css'
import ProjectCard from './ProjectCard'
import { useTranslation  } from 'react-i18next'
import Tech from '../assets/img/tech-1.png'
import China from '../assets/img/China-1.png'
import TipCalc from '../assets/img/Tip-Calculator.png';

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className='container-fluid projects py-5' id='projects'>
        <div className="container py-5 my-5">
            <div className="row tittle-container d-flex justify-content-center align-items-center mb-4">
                <div className="col text-center text-lg-start d-block d-lg-flex align-items-center ">
                    <h4 className='display-3 mx-auto mx-lg-0'>{t('projectsTranslations.projectsHeader')}</h4>
                    <div className="thin-line d-flex justify-content-center mx-auto mx-lg-3"></div>
                </div>
            </div>
            
            <div className="row row-cols-1 row-cols-md-2 g-4">
            {/* each cardd goes on a different col */}
              {/* Card 1 */}
              <div className="col">
                <ProjectCard 
                  image={Tech}
                  modalImage={Tech}
                  projectName={t('projectsTranslations.projectsList.pj1.pjName')}
                  url={'link'}
                  projectDescription={t('projectsTranslations.projectsList.pj1.pjInfo')}
                  projectTools={['React', 'Bootstrap 5', 'Kodigo API', ]}
                  alt={'TechPlayground'}
                />
              </div>
              {/* Card 2 */}
              <div className="col">
                <ProjectCard 
                  image={China}
                  modalImage={China}
                  projectName={t('projectsTranslations.projectsList.pj2.pjName')}
                  url={'link'}
                  projectDescription={t('projectsTranslations.projectsList.pj2.pjInfo')}
                  projectTools={['JavaScript', 'Bootstrap 5', 'Sass', ]}
                  alt={'China-Bites'}
                />
              </div>
              {/* Card 3 */}
              <div className="col">
                <ProjectCard 
                  image={TipCalc}
                  modalImage={TipCalc}
                  projectName={t('projectsTranslations.projectsList.pj3.pjName')}
                  url={'https://github.com/Misaponce/tip-calculator'}
                  projectDescription={t('projectsTranslations.projectsList.pj3.pjInfo')}
                  projectTools={['TypeScript', 'Tailwind', 'NextJS', ]}
                  alt={'Tip-Calculator'}
                />
              </div>
            </div>
        </div>
    </div>
  )
}
