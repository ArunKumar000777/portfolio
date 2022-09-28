import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_jlp1v3j", "template_ktgd0mo", form.current, "e1JsoHc8eOVmu9CBN").then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset()
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMailOutline className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>arunashok1020@gmail.com</h5>
                        <a href="mailto:arunashok1020@gmail.com" target="_blank">
                            Send a Message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+12346567890</h5>
                        <a href="https://wa.me/+919961518763" target="_blank" >
                            Send a Message
                        </a>
                    </article>
                </div>
                {/* ==END OF CONTACT OPTIONS== */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary button">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
