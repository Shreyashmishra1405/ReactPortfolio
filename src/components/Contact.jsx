import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.scss";
import Map from "./Map";
export default function Contact() {

  const ref=useRef();

  const [sent, setsent] = useState(null)

  const handlesubmit=e=>{
    e.preventDefault();

    emailjs.sendForm('service_lrwymuu', 'template_w1chxwh', ref.current, 'YTHNOhpQ2uoQVxR_T')
      .then((result) => {
          console.log(result.text);
          setsent(true);
      }, (error) => {
          console.log(error.text);
        setsent(false);
      });


  }

  return (
    <div className="Contact" id="contact">
      <div className="container">
        <div className="left">
          <form ref={ref} onSubmit={handlesubmit}>
            <h1>Contact Me</h1>
            <input type="text" placeholder="Name" name='name'/>
            <input type="email" placeholder="E-mail" name='email'/>
            <textarea
              name="message"
              placeholder="write your message"
              rows={5}
              id=""
            ></textarea>
            <button type="submit">send</button>
            {sent  &&  " Your message has been sent , Thank for your feedback :) " }
          </form>
        </div>
        <div className="right">
          <Map />
        </div>
      </div>
    </div>
  );
}
