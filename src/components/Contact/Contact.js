import React from 'react'
import "./Contact.css"
import {HiOutlineMail} from "react-icons/hi"
import {FaFacebookMessenger} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"
import  { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dicp7m4', 'template_dsz52w6', form.current, 'c6NAJ81t208NIjN2j')
    e.target.reset()
  };
  return (
  <section  id="contact">
    <h5>Get Your Food</h5>
    <h2>Contact Us</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
     < HiOutlineMail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>zsultanova03@gmail.com</h5>
        <a href="mailto:zsultanova03@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
     < FaFacebookMessenger className='contact__option-icon' />
        <h4>Messenger</h4>
        <h5></h5>
        <a href="https://m.me/zhyldyz.sultanova" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
     < BsWhatsapp className='contact__option-icon'/>
        <h4>WhapsApp</h4>
        <h5>+34697655783</h5>
        <a href="https://api.whatsapp.com/send?phone=+34697655783" target="_blank">Send a message</a>
        </article>
      </div>
      {/*END OF CONTACT OPTIONS*/}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Leave your comment' required></textarea>
        <button type='submit' className='btn btn-primary'>Send a comment</button>
        
      </form>
    </div>
    </section>
  )
}

export default Contact