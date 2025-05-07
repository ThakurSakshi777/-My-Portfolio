import React from 'react'
import con from '../../assets/contact.png'
import "./Contact.css"
function Contact() {
  return (
   <div id='conact'>
    <div className="leftcontact">
        <img src={con} alt="" />
    </div>
    <div className="rightcontact">
        <form action="https://formspree.io/f/movddbpv" method='post'>
       <input name='username' type="text" placeholder='Name'/>
       <input name='Email' type="Email" placeholder='Email'/>
       <textarea name="message" id="textarea" placeholder='Mesage Me'></textarea>
       <input type="submit"  id="btn" value= "Submit" />
        </form>
    </div>
   </div>
  )
}

export default Contact