import React from 'react';
import { ProfilePic } from './ProfilePic';
import { useTranslation } from 'react-i18next';
import '../stylesheet/About.css'
import { DivAnimation } from './Animations/DivAnimation';

export const About = () => {
    const { t } = useTranslation();

  return (
    <div className='container-fluid py-5 about d-flex align-items-center' id='about'>
        <div className='container py-5 my-5'>
            <div className='row d-flex justify-content-center justify-content-lg-start about-content'>
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className='row text-center text-lg-start'>
                        <div className="col text-center text-lg-start d-block d-lg-flex align-items-center ">
                            <h4 className='display-3 mx-auto mx-lg-0'>{t('aboutTranslations.aboutHeader')}</h4>
                            <div className="thin-line d-flex justify-content-center mx-auto mx-lg-3 "></div>
                        </div>
                        {/* Text Animation */}
                        <DivAnimation>
                        <div className='py-3 fs-5'>
                            <p>
                            {t('aboutTranslations.aboutP.part1')}
                            </p>
                            <p>
                            {t('aboutTranslations.aboutP.part2')}
                            </p>
                            <p>
                            {t('aboutTranslations.aboutP.part3')}
                            </p>
                            <p>
                            {t('aboutTranslations.aboutP.part4')}
                            </p>
                        </div>
                        </DivAnimation>
                    </div>
                    <div className='row '>
                        <ul className="skill-list d-grid justify-content-center justify-content-lg-start">
                            <li className="skill-item">JavaScript</li>
                            <li className="skill-item">Bootstrap 5</li>
                            <li className="skill-item">Sass</li>
                            <li className="skill-item">React</li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center align-items-center'>
                    <ProfilePic />
                </div>
            </div>
        </div>
    </div>
  )
}
