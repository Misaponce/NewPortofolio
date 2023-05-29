import React from 'react';
import '../stylesheet/Home.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Resume from '../assets/Misael_Ponce_Resume.pdf'

export const Home = () => {
    const { t } = useTranslation();

  return (
        <div className='container-fluid py-5 home d-flex align-items-center' id='home'>
            <div className='container py-5 my-5'>
                <div className='row d-flex justify-content-center  py-5'>
                    <div className="col-lg-6 col-md-6 py-5 text-center">
                        <h2 className='py-2'>Misael Ponce</h2>
                        <div className="thin-line d-flex justify-content-center mx-auto my-2"></div>
                        <h4 className='py-2'>{t('homeTranslations.homeRole')}</h4>
                    </div>
                    <div className="col-lg-12 col-md-12 p-1 text-center">
                        {/* Resume Button */}
                        <a href={Resume} download='Misael_Ponce_Resume'>
                            <motion.button 
                                className='btn btn-outline-dark btn-lg'
                                whileHover={{ scale: 1.1, backgroundColor: '#ffa500', color: '#212529'}}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                {t('commonTranslations.common.resume')}
                            </motion.button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}
