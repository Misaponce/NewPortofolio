import React from 'react';
import '../stylesheet/ProjectCard.css';

const ProjectCard = ({ projectTools, image, projectName, projectDescription, url, modalImage }) => {

  // Generate a unique modal ID for each card to pop-up the right image
  const modalId = `modal-${Math.random().toString(36).substring(2, 10)}`;

  return (
    <>
    {/* Card Body */}
        <div className="card h-100">
            <img 
                src={image} 
                className="card-img-top main-card"
                alt='China-Projects'
                data-bs-toggle="modal"
                data-bs-target={`#${modalId}`}
            />
            <div className="card-body">
                {/* Project tittle */}
                <div className="project-tittle d-flex align-items-center">
                    <h5 className="card-title"><strong>{projectName}</strong></h5>
                    <div className="line col mx-2"></div>
                    <a 
                        href={url} 
                        className="card-link fs-4"
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                            <i className='bi bi-github bi-lg'></i>
                    </a>
                </div>
                {/* Project Tech */}
                <h6 className="card-subtitle mb-2 text-body-secondary">
                    <ul className='list-group list-group-horizontal list-unstyled tools-list'>
                        {projectTools.map((projectTool, index) => (
                            <li className='pe-2' key={index}>{projectTool}</li>
                        ))}
                    </ul>
                </h6>
                {/* Project Description */}
                <p className="card-text">{projectDescription}</p>
            </div>
        </div>

    {/* Modal */}
        <div className="modal fade" id={modalId} data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
            <button type="button" className="btn-close btn-close-white close-button m-2" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-body">
                    <div className="card h-100">
                        <img 
                            src={modalImage} 
                            className="card-img-top" 
                            alt='China-Projects'
                        />
                        <div className="card-body">
                            {/* Project tittle */}
                            <div className="project-tittle d-flex align-items-center">
                                <h5 className="card-title"><strong>{projectName}</strong></h5>
                            </div>
                            {/* Project Tech */}
                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                <ul className='list-group list-group-horizontal list-unstyled tools-list'>
                                {projectTools.map((projectTool, index) => (
                                    <li className='pe-2' key={index}>{projectTool}</li>
                                ))}
                                </ul>
                            </h6>
                            {/* Project Description */}
                            <p className="card-text">{projectDescription}</p>
                        </div>
                        <div className="card-footer">
                            <h5>Project links</h5>
                            <a 
                                href={url} 
                                className="card-link fs-4"
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                <i className='bi bi-github bi-2x'></i>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ProjectCard;
