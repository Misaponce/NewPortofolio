import React from 'react'
import '../stylesheet/Contact.css'
import { useTranslation } from 'react-i18next'
import { DivAnimation } from './Animations/DivAnimation';

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
                <div className="col-lg-12">
                    <ul className=' d-flex justify-content-center list-unstyled gap-5 fs-3 p-2'>
                        {/* using map un UL to render each icon  */}
                        {icons.map((icon, index) => (
                            <li key={index} className='p-1'>
                                {/* pass an <a> tag with icon.url have a different link on each icon */}
                                <a href={icon.url} target='_blank' rel='noopener noreferrer'>
                                    <i className={`bi bi-${icon.name}`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
