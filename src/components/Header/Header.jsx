import React from "react";
import CTA from "./CTA";
import "./header.css";
import myPhoto from "../../assets/myPic.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5 className="hello">Hello I'm</h5>
                <h1 className="my_name">ArunKumar.k</h1>
                <h5 className="text-light job">Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />

                {/* <div className="me">
                    <img src={myPhoto} alt="me" className="myPic"/>
                </div> */}
                <a href="#contact" className="scroll__down" rel="noreferrer">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;
