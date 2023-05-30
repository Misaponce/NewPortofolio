import React, { useState, useEffect } from 'react';
import '../stylesheet/Navbar.css';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { ListAnimation } from './Animations/ListAnimation';
import { color } from 'framer-motion';


export const Navbar = () => {
    const { t } = useTranslation();

    // Setting 'active' class
    // This CustomClass will be trigger when scrolling and will add 'active' to enable bootstrap style for active elements
    function CustomClass({ sectionId, children }) {
        const [isActive, setIsActive] = useState(false);
        const handleScroll = () => {
          const section = document.getElementById(sectionId);
          if (section) {
            const rect = section.getBoundingClientRect();
            // rect.top and rect.bottom represents the position of the section relative to the viewport
            // window.innerHeight viewport height
            // this if statement calculates half of the viewport to determine whether the section is visible or not
            const isVisible = rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5;
            setIsActive(isVisible);
          } 
        };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

        return (
            // Return a link with an 'active' class with paremeter defined above
            <a className={`nav-link ms-lg-5 ms-md-5 ms-0 ${isActive ? 'active' : ''}`} aria-current="page" href={`#${sectionId}`}>
                {children}
            </a>
        )
    }
  

  return (
    <div>
        <nav className="navbar bg-dark navbar-dark  navbar-expand-lg bg-body-tertiary fixed-top mb-5">
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
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
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
                    <CustomClass sectionId='about'>{t('commonTranslations.navBar.about')}</CustomClass>
                    <CustomClass sectionId='projects'>{t('commonTranslations.navBar.projects')}</CustomClass>
                    <CustomClass sectionId='contact'>{t('commonTranslations.navBar.contact')}</CustomClass>
                    {/* Language Switcher */}
                    <LanguageSwitcher/>
                </ListAnimation>
                </div>
            </div>
        </nav>
    </div>
  )
}
