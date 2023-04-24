import React from 'react'
import css from './Hero.module.scss'
import {motion} from 'framer-motion';
import { staggerContainer } from '../../utils/motion';

const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
        <div  className={`innerWidth ${css.container}`}>
        {/* Elements to the left */}
          <div className={css.leftElements}>
            <div className={css.heroText}>
              <h4 className={css.preText} >ABOUT ME</h4>
             <span className={css.introMe}>
                Hello, I'm Adeola Babatunde <br/> I'm a Product Designer.
             </span>
             <p className={css.introText}>
                I help <span className={css.introTextWrap}>Startups and Small Businesses</span> create products that satisfy consumers <br/> whilst growing their business
             </p>
             </div>
             <button className={css.contactMeBtn}>Contact Me</button>
          </div>


          
          {/* Image in Right */}
          
          <div className={css.rightElements}>
             <div className={css.person}>
            <img src='./woman.png' alt="Woman in Tech"/>
          </div>
         </div> 
           
        
        </div>
        </section>
    )
}

export default Hero