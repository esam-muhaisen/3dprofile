import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Map from "../Map";

function Contact() {
  const ref = useRef();
  const [success, setsuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rfj2w5i",
        "template_0xip6id",
        ref.current,
        "Os_CkZ9LAnUVqMrJg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setsuccess(true);
        },
        (error) => {
          console.log(error.text);
          setsuccess(false);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="section">
        <div className="contianercontact">
          <div className="left">
            <form ref={ref} onSubmit={handleSubmit}>
              <h1 className="title">Contact Us</h1>
              <input placeholder="Name" name="name" type="text" className="input" />
              <input placeholder="Email" name="email" type="email" className="input" />
              <textarea name="message" placeholder="write your message" rows="10"></textarea>
              <button type="submit" className="button">
                Send
              </button>
              {success &&
                "Your message has been sent. Well get back to you soon :)"}
            </form>
          </div>
          <div className="right">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
