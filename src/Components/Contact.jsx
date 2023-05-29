import React from 'react'
import '../stylesheet/Contact.css'
import { useTranslation } from 'react-i18next'
import { DivAnimation } from './Animations/DivAnimation';
import { ListAnimation } from './Animations/ListAnimation';

export const Contact = ({ icons }) => {
    const { t } = useTranslation();

  return (
    <div className='container-fluid py-5 d-flex justify-content-center align-items-center contact' id='contact'>
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-12 text-center text-lg-start d-flex flex-column align-items-center">
                    <h4 className='display-3'>{t('contactTranslations.contactHeader')}</h4>
                    <div className="thin-line"></div>
                </div>
            </div>
            {/* text animation */}
            <DivAnimation>
                <div className="row contact-info-row d-flex justify-content-center">
                    <div className="col-6 d-flex align-items-center justify-content-center py-2 my-2">
                        <p className='text-center fs-5'>
                        {t('contactTranslations.contactP')}
                        </p>
                    </div>
                </div>
            </DivAnimation>
            <div className="row socials-row">
                <ListAnimation 
                    bsClass={"col-lg-12"}
                    ulClass={' d-flex justify-content-center list-unstyled gap-5 fs-3 p-2'}
                    liClass={'p-1'}
                >
                    <a href='https://github.com/Misaponce' target='_blank' rel='noopener noreferrer'>
                        <i className='bi bi-github'></i>
                    </a>
                    <a href='https://twitter.com/Misa_Ponce' target='_blank' rel='noopener noreferrer'>
                        <i className='bi bi-twitter'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/misael-ponce-976aa6240/' target='_blank' rel='noopener noreferrer'>
                        <i className='bi bi-linkedin'></i>
                    </a>
                    <a href='mailto:poncemisael@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <i className='bi bi-envelope-at-fill'></i>
                    </a>
                </ListAnimation>
            </div>
        </div>
    </div>
  )
}
