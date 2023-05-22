import React from 'react'
import '../stylesheet/ProjectCard.css';

export const ProjectCard = ({ reverse, skills, image, projectType, projectName, projectDescription, url }) => {

  // Added custom class to change image, info and text position
  const imageClass = reverse ? 'col-lg-8 col-12 project-img position-absolute z-2 top-50 end-0 translate-middle-y rounded-3' : 'col-lg-8 col-12 project-img position-absolute z-1 top-50 start-0 translate-middle-y rounded-3';
  const infoClass = reverse ? 'col-lg-6 col-12 project-info-reverse position-absolute z-1 top-50 start-0 translate-middle-y rounded-3 pb-3' : 'col-lg-6 col-12  project-info position-absolute z-2 top-50 end-0 translate-middle-y rounded-3'; 

  return (
    <div className='card-wrapper container position-relative d-block'>
        <div className='row'>
            <div className={imageClass} style={{ backgroundImage: `url(${image})` }}>

            </div>
            <div className={infoClass}>
              <h6 className={reverse ? `text-end text-lg-start py-3` :`text-start text-lg-end py-3`}>{projectType}</h6>
              <h2 className={reverse ? `text-end text-lg-start text-decoration-none` : `text-start text-lg-end text-decoration-none`}><strong>{projectName}</strong></h2>
              <div className={reverse ? `project-description-reverse` : `project-description`}>
                <p className={ reverse ? `text-end text-lg-start m-0 fs-6` : `text-start text-lg-end m-0 fs-6`}>
                  {projectDescription}
                </p>
              </div>
              {/* skills list */}
              <ul className={reverse ? `d-flex justify-content-end justify-content-lg-start list-unstyled gap-3 tools-list py-1` : `d-flex justify-content-start justify-content-lg-end list-unstyled gap-3 tools-list py-1`}>
                {/* use map to make skills list reusable */}
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              {/* links list */}
              <ul className={reverse ? `d-flex justify-content-end justify-content-lg-start list-unstyled gap-3 fs-4 project-link` : `d-flex justify-content-start justify-content-lg-end list-unstyled gap-3 fs-4 project-link`}>
                  <li className='px-1'>
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                      <i className='bi bi-github '></i>
                    </a>
                  </li>
              </ul>
              
            </div>
        </div>
    </div>
  )
}
