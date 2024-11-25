import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank You ${name} for Contacting Us. We will Get Back to You Soon.\n\nYour Mail Id - ${email}.\nYour Message is - ${message}`
    );
    setname("");
    setEmail("");
    setmessage("");
  };

  return (
    <>
      <div className="contactSection">
        <h2>Contact Us</h2>
        <div className="contactMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12951.689345058576!2d10.806492560966296!3d35.752713605117684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302139047d336c5%3A0xbc5257151f3392c8!2sBride&#39;s%20Secret!5e0!3m2!1sfr!2stn!4v1729766086589!5m2!1sfr!2stn"
            width="600"
            height="450"
            style={{ border: 0 }} // Correct style format
            allowFullScreen // Camel case for allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" // Camel case for referrerPolicy
            title="Bride's Secret Location"
          ></iframe>
        </div>
        <div className="contactInfo">
          <div className="contactAddress">
            <div className="address">
              <h3>Store in Monastir</h3>
              <p>
               181 Cité el agba, bretelle route Khniss, près de la mosquée
                <br /> Monastir ,Tunisia 
              </p>
              <p>
                admin@dummymail.com
                <br />
                +216 93 601 103 
              </p>
            </div>
            <div className="address">
              <h3>Store in Sousse </h3>
              <p>
                Rue des orangers 
                <br /> Sousse, Tunisia
              </p>
              <p>
                contact@dummymail.com
                <br />
                +216 93 601 103 
              </p>
            </div>
          </div>
          <div className="contactForm">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Name *"
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Email address *"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                rows={10}
                cols={40}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
