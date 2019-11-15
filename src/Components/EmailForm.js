import React from 'react';
import emailjs from 'emailjs-com';

import './EmailForm.css';


export default function ContactMe(props) {


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('codyshaben', 'contact_form', e.target, 'user_DaFsDFFNujbiAFbAXnOfv')
      .then((result) => {
          console.log(result.text)
      }
      , (error) => {
          console.log(error.text);
      });
      props.toggleContactFormShowing();

  }
 

  //currently doesnt send email if blank but does not show alert
//   function nameValidation(){
//       const empty = document.user_name.value
//       if (empty === ""){
//         alert("Please input a value")
//         return false;
//       } else {
//         return true
//       }
//   } 

    return (
        <form 
            className="contact-form" 
            onSubmit={sendEmail}
            >
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input 
                    id="input-button" 
                    type="submit" 
                    value="Send"
                />
        </form>
  );
}