import React from 'react'
import css from './Myskills.module.scss'

const Myskills = () => {
  return (
    <section className={css.wrapper}> 
    <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
      <div className={css.mySkillsTxt}>
         <h1 className={css.mySkillsHd}>
            My Skills
        </h1>
      </div>
        <div className={css.skills}>
           <div className={css.skills1}>
            <h2 className={css.skillTitle}>Project Management</h2>
            <img className={css.pinkSign} src="./pink_sign.svg" alt="pink loading sign" />
            <img className={css.skillImg1} src="./projectmng.png" alt="project managment skill" />
           
           </div>  

           <div className={css.skills2}>
            <h2 className={css.skillTitle}>UI/UX Design</h2>
            <img className={css.pinkSign} src="./pink_sign.svg" alt="pink loading sign" />
            <img className={css.skillImg2} src="./uiux.png" alt="UI/UX Design skill" />
           </div>  

           <div className={css.skills3}>
            <h2 className={css.skillTitle}>Branding & Brand <br/> Strategizing</h2>
            <img className={css.pinkSign3} src="./pink_sign.svg" alt="pink loading sign" />
            <img className={css.skillImg3} src="./Girl_Tablet.png" alt="Brand Design skill" />
           </div>  

           <div className={css.skills4}>
            <h2 className={css.skillTitle}>Frontend Web Dev</h2>
            <img className={css.pinkSign} src="./pink_sign.svg" alt="pink loading sign" />
            <img className={css.skillImg4} src="./Laptop_Screen.png" alt="Front-end Web development skill" />
           </div>  
        </div>

    </div>
    </section>
  )
}

export default Myskills