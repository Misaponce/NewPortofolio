import React from 'react';
import '../stylesheet/Navbar.css';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { ListAnimation } from './Animations/ListAnimation';


export const Navbar = () => {
    const { t } = useTranslation();


  return (
    <div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand ms-lg-2 px-lg-2" href="#">
                    <strong className='logo-letter'>M</strong>
                    <strong className='logo-dot'>.</strong>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="toggle-bar"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                        <strong className='logo-letter'>M</strong>
                        <strong className='logo-dot'>.</strong>
                    </h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <ListAnimation
                // Prop class to keep bootstrap navbar style
                    bsClass={"offcanvas-body"}
                    ulClass={"navbar-nav justify-content-end flex-grow-1 pe-3"}
                    liClass={"nav-item"}
                >
                    <a className={`nav-link ms-lg-5 ms-md-5 ms-0`} aria-current="page" href='#about'>
                        {t('commonTranslations.navBar.about')}
                    </a>
                    <a className={`nav-link ms-lg-5 ms-md-5 ms-0`} aria-current="page" href='#projects'>
                        {t('commonTranslations.navBar.projects')}
                    </a>
                    <a className={`nav-link ms-lg-5 ms-md-5 ms-0`} aria-current="page" href='#contact'>
                        {t('commonTranslations.navBar.contact')}
                    </a>
                    {/* Language Switcher */}
                    <LanguageSwitcher/>
                </ListAnimation>
                </div>
            </div>
        </nav>
    </div>
  )
}
