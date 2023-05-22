import React from 'react'
import '../stylesheet/Projects.css'
import { ProjectCard } from './ProjectCard'
import { useTranslation  } from 'react-i18next'
import Tech from '../assets/img/tech-1.png'
import China from '../assets/img/China-1.png'
import Portofolio from '../assets/img/portofolio.png'

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
            
            <div className="row projects-content d-block">
              {/* Project 1 */}
              <div className="col-lg-12 mb-4">
                <ProjectCard 
                  skills={['React', 'Bootstrap 5', 'SASS']}
                  image={Tech}
                  projectType={t('projectsTranslations.projectsList.pj1.pjType')}
                  projectName={t('projectsTranslations.projectsList.pj1.pjName')}
                  projectDescription={t('projectsTranslations.projectsList.pj1.pjInfo')}
                  url={'https://github.com/Jaro1407/React-Project/wiki/TechPlayground-%5BENG%5D'}
                />
              </div>
              {/* Project 2 */}
              <div className="col-lg-12 mb-4">
                <ProjectCard
                  skills={['JavaScript', 'Bootstrap 5', 'Sass', ]}
                  image={China}
                  projectType={t('projectsTranslations.projectsList.pj2.pjType')}
                  projectName={t('projectsTranslations.projectsList.pj2.pjName')}
                  projectDescription={t('projectsTranslations.projectsList.pj2.pjInfo')}
                  url={'https://github.com/Misaponce/China-Bites/wiki/China-&-Bites'}
                  // This reverse prop is to change the position of the project image
                  reverse={true}
                />
              </div>
              {/* Project 3 */}
              <div className="col-lg-12 mb-4">
                <ProjectCard
                  skills={['React', 'Bootstrap 5', 'Styled Components', 'i18n Framework']}
                  image={Portofolio}
                  projectType={t('projectsTranslations.projectsList.pj3.pjType')}
                  projectName={t('projectsTranslations.projectsList.pj3.pjName')}
                  projectDescription={t('projectsTranslations.projectsList.pj3.pjInfo')}
                  url={'https://github.com/Misaponce/China-Bites/wiki/China-&-Bites'}
                />
              </div>
            </div>
        </div>
    </div>
  )
}
