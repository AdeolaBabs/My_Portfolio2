import React from 'react'
import {useState} from 'react'
import axios from "axios"
// import {useDispatch} from 'react-redux'
import css from './ContactMe.module.scss'

function ContactMe() {
  const [form, setForm] = useState({
    name:"",
    email:"",
    phoneNumber:"",
    location:"",
    message:""

  })
 const { name,email,phoneNumber,location,message} = form;
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setForm({
  ...form,
      [name]:value

    })

    // if(!!!errors[field])setErrors({
    //   ...errors,
    //   [field]:null

    // })
  }

  // const dispatch = useDispatch()

  // const validateForm = ()=>{
  //   const { name, phone, email, location, message} = form
  //   const newErrors = {}

  //   if(!name || name === '') newErrors.name = 'Please enter your Name'
  //   if(!phone || phone.len < 11 ) newErrors.phone = 'Please enter your Phone Number'
  //   if(!email || email === '') newErrors.email = 'Please enter your Email'
  //   if(!location || location === '') newErrors.location = 'Please enter your Location'
  //   if(!message || message === '') newErrors.name = 'Please Write Something'
    
  // }
  
  const handleSubmit = (e) => {
    const endpoint = "http://localhost:3000/contact"
    const json={
      name,
      email,
      phoneNumber,
      location,
      message
     
    }
 axios.post(endpoint,json).then((res)=>{
console.log(res.data);
 }).catch((err)=>{
console.log(err, "something went wrong");
 })
    e.preventDefault();
  }
  return (
    <section className={css.wrapper}>
       <div  className ={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
            <div className={css.secondContainer}>
                <div className= {css.leftElements}>
                    <div className={css.contactMeHd}>
                        <h1>Contact Me.</h1>
                        <img className={css.idea} src='idea.svg' alt='Light Bulb Icon'/>
                        <p>Let's create something new, impactful and <br/>authentic together</p>
                    </div>
                    <div className= {css.detailsList}>
                    <img src='telephone.svg' className={css.img1} alt='Telephone Icon'/>
                    <h2 className={css.details1}>+09030470929</h2>
                    <span className={css.span1}></span>
                    <img src='mail.svg' className={css.img2} alt='Email Icon'/>
                    <h2 className={css.details2}>chiomababatunde@gmail.com</h2>
                    <span className={css.span2}></span>
                    <img src='location.svg' className={css.img3} alt='Location Icon'/>
                    <h2 className={css.details3}>Abuja</h2>
                    <span className={css.span3}></span>
                    </div>
                </div>

                <div className= {css.rightElements}>
                  <div className= {css.elements}>
                       <form>
                       <input type="text" name="name" placeholder="Name" value = {form.name} onChange={handleChange} className={css.name}/>
                       <input type="text" name="phoneNumber" placeholder="Phone No." value = {form.phone} onChange={handleChange} className={css.phone} />
                       <input type="email" name="email" placeholder='E-mail' value = {form.email} onChange={handleChange} className={css.email}/>
                       <input type="text" name="location" placeholder='Location' value = {form.location} onChange={handleChange} className={css.location} />
                       <textarea name="message" placeholder="message" valure = {form.message} onChange={handleChange} className={css.message} cols="60" rows="15"></textarea>
                       <button type='submit' name="submitButton" onClick={handleSubmit} className={css.submitBtn} >Submit Message</button>
                    </form>
                  </div>          
                </div>

                 

            </div>     
       </div>
    </section>
    
  )
}

export default ContactMe