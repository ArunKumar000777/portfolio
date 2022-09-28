import React from "react";
import "./footer.css";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return (
        <footer>
            <h2 className="logo">ArunKumar k</h2>

            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#project">Project</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer__socials">
                <a href="https://wa.me/+919961518763" target="_blank">
                    <BsWhatsapp />
                </a>
            </div>
            <div className="footer__copyright">
                <small>&copy; All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
