import React from 'react'
import { useTranslation } from 'react-i18next';

// Languages to be used
const lngs = {
    en: { nativeName: 'English', flag: 'fi fi-gb me-2' },
    es: { nativeName: 'Spanish', flag: 'fi fi-sv me-2' }
  };


export const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();


  return (
    <div>
    <div className="dropdown ms-lg-5 ms-md-5 ms-0">
        <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {t('commonTranslations.common.languages')}
        </button>
        <ul className="dropdown-menu">
            <li>
                {Object.keys(lngs).map((lng, index) => (
                    <button className='dropdown-item' key={index} type='button' style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} onClick={() => i18n.changeLanguage(lng)}>
                        {/* Rendering a flag for each language */}
                        <span className={lngs[lng].flag}></span>
                        {/* Rendering each language name */}
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </li>
        </ul>
    </div>

    </div>
  )
}
