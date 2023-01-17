import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp, BsTelephonePlus } from "react-icons/bs";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
    console.log(process.env.TEMPLATE_ID);
    const form = useRef();
    const notify = () => {
        toast.success("email has been successfully sent", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    const errorNotify = () => {
        toast.error("something went wrong", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_jlp1v3j", "template_ktgd0mo", form.current, "e1JsoHc8eOVmu9CBN").then(
            (result) => {
                notify();
                // console.log(result.text);
            },
            (error) => {
                errorNotify();
                // console.log(error.text);
                // console.log(error);
            }
        );
        e.target.reset();
    };
    return (
        <section id="contact" className="contact">
            <h5 className="contact_heading">Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMailOutline className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5 className="email">arunashok1020@gmail.com</h5>
                        <a href="mailto:arunashok1020@gmail.com" target="_blank" rel="noreferrer">
                            Send a Message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsTelephonePlus className="contact__option-icon" />
                        <h4>Call Me</h4>
                        <h5>+91 7907456800</h5>
                        <a href="tel:7907456800" target="_blank">
                            Click to call
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+91 9961518763</h5>
                        <a href="https://wa.me/+919961518763" target="_blank" rel="noreferrer">
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
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </section>
    );
};

export default Contact;
