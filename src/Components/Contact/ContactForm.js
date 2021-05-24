import React from 'react';
import './ContactForm.css'
import emailjs from 'emailjs-com';

const ContactForm = () => {
    
    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_fdgj1ti', 'template_19pi5j6', e.target, 'user_nWyMLaWu8CXzk5NEJOfEn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    return (
        <div class="d-flex justify-content-center" >
            <div class="contact-from">
                        <div class="wrapper">
                        <div class="header">
                            <h1>Contact us</h1>
                            <p>Do you have a question? Send us a message and we will respond as soon as possible.</p>
                        </div>
                        <form  onSubmit={sendEmail}>
                            <h4>Name</h4>
                            <input type="text" name="name"/>
                            <h4>Email</h4>
                            <input type="text" name="email"/>
                            <h4>Message</h4>
                            <textarea name="message" />
                            <button type="submit" value="Send">Send</button>
                        </form>
                 </div>
             </div>
        </div>
        
    );
};

export default ContactForm;