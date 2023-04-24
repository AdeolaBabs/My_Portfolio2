import React from 'react'
import css from './Aboutme.module.scss'

const Aboutme = () => {
  return (
    <section className={css.wrapper}>
      <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
        <div className={css.upperElements}>
        <div className={css.upperElementsLogos}> 
            <img className={css.img1} src="./behance.png" alt="behance logo" />
           <img className={css.img2} src="./dribble.png" alt="dribble logo" />
           <img className={css.img3} src="./Linkedin.png" alt="linkedin logo" />
        </div>

        <div className={css.upperElementsLogos2}> 
            <img className={css.img1} src="./BehanceLogo.png" alt="behance logo" />
           <img className={css.img2} src="./DribbbleLogo.png" alt="dribble logo" />
           <img className={css.img3} src="./LinkedinLogo.png" alt="linkedin logo" />
        </div>        
        </div>


         <div className={css.lowerElements}>
              
            <div className={css.whatIDoImg}>
              <img className={css.idea} src="./idea.png" alt="idea" />
            </div>

            <div className={css.whatIDoTxt}>
                <h1 className={css.whatIDoHd}> What I Do.</h1>
               <div className={css.introTextDiv}>
                 <p className={css.introText}>
                " I help <span className={css.introTextWrap}>Startups and Small Businesses</span> create products that satisfy consumers <br/> whilst growing their business "
               </p>
               </div>
                <p className={css.writeUp}>
                    I turn Ideas into products that impact users lives,
                    I enjoy creating products that offer the <span>best user
                    experience</span>,looks appealing and <span>create </span>a
                    positive<span> brand </span>imagery, Amet minim mollit non
                    quizical deseruntullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation 
                    veniam consequat sunt nostrud amet.
                </p>
                <button className={css.hireMeBtn} >Hire Me</button>
            </div>

         </div>

      </div>
    </section>
    
  )
}

export default Aboutme