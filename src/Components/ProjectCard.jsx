import React from 'react';
import '../stylesheet/ProjectCard.css';
import { motion } from 'framer-motion';
import { DivAnimation } from './Animations/DivAnimation';

const ProjectCard = ({ projectTools, image, projectName, projectDescription, url, modalImage, alt }) => {

  // Generate a unique modal ID for each card to pop-up the right image
  const modalId = `modal-${Math.random().toString(36).substring(2, 10)}`;

  return (
    <DivAnimation>
    {/* Card Body */}
        <motion.div 
            className="card h-100"
            whileHover={{scale: 1.01, boxShadow:'0px 0px 10px rgba(0, 0, 0, 0.5)'}}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "tween"}}
        >
            <img 
                src={image} 
                className="card-img-top main-card"
                alt={alt}
                data-bs-toggle="modal"
                data-bs-target={`#${modalId}`}
            />
            <div className="card-body user-select-none">
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
        </motion.div>

    {/* Modal */}
        <div className="modal fade" id={modalId} data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
            <button type="button" className="btn-close btn-close-white close-button m-2" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-body">
                    <div className="card">
                        <img 
                            src={modalImage} 
                            className="card-img-top" 
                            alt={alt}
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
    </DivAnimation>
  );
};

export default ProjectCard;
