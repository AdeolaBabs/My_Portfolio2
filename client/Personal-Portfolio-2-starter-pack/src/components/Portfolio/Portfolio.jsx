import React from 'react'
import css from './Portfolio.module.scss'

const Portfolio= () => {
  return (
      <section className={css.wrapper}>
      <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
        <div className={css.myPortfolioTxt}>
         <h1 className={css.myPortfolioHd}>
            My Portfolio
        </h1>
        <h2 className={css.myPortfolioShd}>
            Recent Projects
        </h2>
      </div>

      <div className={css.myWorks}>
        <div className={css.myWork1}>
             <img className={css.workImg1} src="./project1.png" alt="Doughnut Shop website" />    
           <div className={css.myWorkDescription}>
            <h1>Gina's Doughnuts</h1>
            <p>Sign-Up Page for a local doughnut shop.aliqua dolor<br/>
              do amet sint. Velit officia consequat duis 
            </p>
            <img className={css.behanceSign} src="./Behance.svg" alt="Link to my Behance" />
          </div>
        </div>

        <div className={css.myWork2}>
             <img className={css.workImg2} src="./project2.png" alt="Perfume Shop website" />    
           <div className={css.myWorkDescription}>
            <h1>Perfume Shop</h1>
            <p>Check-out Page for a Perfume Shop. aliqua dolor do<br/>
             amet sint. Velit officia consequat.
            </p>
            <img className={css.behanceSign} src="./Behance.svg" alt="Link to my Behance" />
          </div>
        </div>

        <div className={css.myWork3}>
             <img className={css.workImg3} src="./project3.png" alt="Doughnut Shop website" />    
           <div className={css.myWorkDescription}>
            <h1>Nigerian Railway App</h1>
            <p>Onboarding Screen for Nig. Railway App. aliqua lor<br/>
              do amet sint. Velit officia mollit.
            </p>
            <img className={css.behanceSign} src="./Behance.svg" alt="Link to my Behance" />
          </div>
        </div>
      </div>

      <button className={css.visitBtn} >Visit My Behance</button>

      </div>
         
    </section>
    
  )
}

export default Portfolio