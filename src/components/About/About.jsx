import React from "react";
import aboutImg from "../../assets/aboutMe.jpg";
import "./about.css";

const About = () => {
    return (
        <section id="about" className="about_section">
            <h5 className="about_heading">Get To Know</h5>
            <h2>About Me</h2>
            <div className="container containerr">
                <div className="left">
                    <div className="aboutImage">
                        <img src={aboutImg} alt=""  className="about__img box_shadow"/>
                    </div>
                </div>
                <div className="right">
                    {/* <div className="cards__container">
                        <Card />
                        <Card />
                        <Card />
                    </div> */}
                    <p className="right__desc">
                       <span className="i">I</span>'am a Frontend React developer from Kannur , Kerala, India. i am a Self taught developer I use several online facility to develop my coding skills. I enjoy taking complex problem and turning them into simple and beutiful interface designs. I also have the logic and structure of coding and always strive to write elegent and efficient code
                    </p>
                    <a href="#contact" className="btn btn-primary right__btn">Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;
