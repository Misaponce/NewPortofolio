import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export const DivAnimation = ({ children }) => {
      // This ref will be use in the wrapper div
      const ref = useRef(null);
      // the once value will trigger animation just once
      const isInView = useInView(ref, { once: true });
  
      // use the useAnimation to have access to manually set the animations
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
    <div ref={ref}>
      <motion.div
        //variants define how the animation will behave 
        variants={variants}

        // to trigger animations use initial?
        initial='hidden'
        animate={mainControls}
        
        // This define the duration of the transition
        transition={{duration: 0.5, delay: 0.35}}
      >
        {children}
      </motion.div>
    </div>
  )
}
