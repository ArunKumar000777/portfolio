import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./skills.css";
const Skills = () => {
    return (
        <section id="skills">
            <h5>What skills i have</h5>
            <h2>My Skills</h2>
            <div className="container skills__container">
                <div className="frontend__skills">
                    <h3>Frontend Development</h3>
                    <div className="skills__content">
                        <article className="skills__details">
                            <BsPatchCheckFill className="skills__icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsPatchCheckFill className=" skills__icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsPatchCheckFill className=" skills__icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsPatchCheckFill className=" skills__icon" />
                            <div>
                                <h4>Styled-Components</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsPatchCheckFill className=" skills__icon" />
                            <div>
                                <h4>React JS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsPatchCheckFill className=" skills__icon" />
                            <div>
                                <h4>Redux-Toolkit</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND SKILLS */}
                <div className="backend__skills">
                    <h3>Backend Development</h3>
                    <div className="skills__content">
                        <article className="skills__details">
                            <BsPatchCheckFill className=" skills__icon" />
                            <div>
                                <h4>Node JS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsPatchCheckFill className=" skills__icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsPatchCheckFill className=" skills__icon" />
                            <div>
                                <h4>Express JS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
