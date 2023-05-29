import React, {useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const ListAnimation = ({ children, bsClass, ulClass, liClass }) => {

        const ref = useRef(null);

        const isInView = useInView(ref, { once: true });
    
        const mainControls = useAnimation();
    
        useEffect(() => {
            if(isInView) {
                // Animation is trigger
                mainControls.start('visible')
            }
        }, [isInView]);
    
        const variants = {
            hidden: { opacity: 0, y: -25 },
            visible: { opacity: 1, y: 0 },
        }


    return (
        <div ref={ref} className={bsClass}>
        <motion.ul
            className={ulClass}
        >
          {React.Children.map(children, (child, index) => (
            <motion.li
              variants={variants}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.35 + index * 0.2 }}
              className={liClass}
            >
              {child}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    );
}
