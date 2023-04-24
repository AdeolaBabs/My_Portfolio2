import React from 'react';
import css from './Footer.module.scss';

export default function Footer() {
  return (
    <section className = {css.wrapper}>
        <div className={css.container}>
            <div className={`flexCenter innerWidth ${css.upperElements}`}>
             
             <div className={css.name}>
                Adeola.
            </div>
            
            {/* <ul className={` flexCenter ${css.menu}`}>
                <li><a href="">Home</a></li>
                <li><a href="">About me</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Contact me</a></li>
            </ul> */}

             <ul className={` flexRight ${css.socails}`}>
                <li><a href=""><img src='InstagramLogo.svg' className={css.socail1} alt='My Instagram'/></a></li>
                <li><a href=""><img src='TwitterLogo.svg' className={css.socail2} alt='My Twitter'/></a></li>
                <li><a href=""><img src='DribbbleLogo.svg' className={css.socail3} alt='My Dribble'/></a></li>
            </ul>

        </div>

        <div className={css.lowerElements}>
            <h1>Do you have an <span>Idea</span> you want to develop ?</h1>
            <h2>Let's Work <span>Together</span></h2>
            <div className={css.contact}>
                 <h3>Contact me at:</h3>
                <h3>Email: chiomababatunde@gmail.com</h3>
                <h3>Phone: 09030470929</h3>
            </div>
        </div>
        <h5>Psst.....this portfolio page was fully designed and developed using Figma & React by Me!</h5>
        </div>
    </section>
  )
}
