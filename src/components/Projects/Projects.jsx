import React from "react";
import "./project.css";
import pro1Scrshot from "../../assets/project1Screenshot.png";
import disneyClone from "../../assets/disney-clone.png"
import blogApp from "../../assets/blop-app.png"
import socialMedia from "../../assets/social-media-app.png"
import techNotes from "../../assets/TechNotes.png";
import ecommerce from "../../assets/ecommerce-app.png";
import acmeRockets from "../../assets/acme-rockets.png";
import admindashboard from "../../assets/admindashboard.png"
const Projects = () => {
    return (
        <section id="project">
            <h2>My Projects</h2>
            <div className="container project__container">
                <article className="project__item"  data-aos="fade-up" data-aos-duration="1300">
                    <div className="project__item-image">
                        <img src={pro1Scrshot} alt="" />
                    </div>
                    <h3>Tesla Web Page Design</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/ArunKumar000777/tesla" className="btn" target="_blank" rel="noreferrer">
                            Github
                        </a>
                        <a href="https://project-tesla-60d2e.firebaseapp.com/" className="btn btn-primary" target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="project__item"  data-aos="fade-up" data-aos-duration="1000">
                    <div className="project__item-image">
                        <img src={techNotes} alt="" />
                    </div>
                    <h3>TechNotes Fullstack Project</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/ArunKumar000777/technotes" className="btn" target="_blank" rel="noreferrer">
                            Github
                        </a>
                        <a href="https://technotess-0c9r.onrender.com/" className="btn btn-primary" target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="project__item"  data-aos="fade-up" data-aos-duration="1200">
                    <div className="project__item-image">
                        <img src={acmeRockets} alt="" />
                    </div>
                    <h3>Responsive website using Tailwind css</h3>
                    <div className="project__item-cta">
                        <a
                            href="https://github.com/ArunKumar000777/responsive_website_tailwind"
                            className="btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                        <a href="https://acme-rockets-di4k.onrender.com/" className="btn btn-primary" target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="project__item"  data-aos="fade-up" data-aos-duration="1000">
                    <div className="project__item-image">
                        <img src={disneyClone} alt="" />
                    </div>
                    <h3>Disney-clone-app</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/ArunKumar000777" className="btn" target="_blank" rel="noreferrer">
                            Github
                        </a>
                        <a href="https://disney-clone-000.onrender.com" className="btn btn-primary" target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    </div>
                </article>
                {/* //*blog app */}
                <article className="project__item" data-aos="fade-up" data-aos-duration="1200">
                    <div className="project__item-image">
                        <img src={blogApp} alt="" />
                    </div>
                    <h3>Blog-app</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/ArunKumar000777" className="btn" target="_blank" rel="noreferrer">
                            Github
                        </a>
                        <a href="https://blog-app-arun.onrender.com" className="btn btn-primary" target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    </div>
                </article>
                {/* //* social media app */}
                <article className="project__item" data-aos="fade-up" data-aos-duration="1000">
                    <div className="project__item-image">
                        <img src={socialMedia} alt="" />
                    </div>
                    <h3>Social Media App</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/ArunKumar000777" className="btn" target="_blank" rel="noreferrer">
                            Github
                        </a>
                        <a href="https://social-media-app-arun.onrender.com" className="btn btn-primary" target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    </div>
                </article>
                {/* //* ecommerce */}
                <article className="project__item" data-aos="fade-up" data-aos-duration="1000">
                    <div className="project__item-image">
                        <img src={ecommerce} alt="" />
                    </div>
                    <h3>Ecommerce App</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/ArunKumar000777" className="btn" target="_blank" rel="noreferrer">
                            Github
                        </a>
                        <a href="https://arun-ecommerce-app.onrender.com" className="btn btn-primary" target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    </div>
                </article>
                {/* //* admin dashboard */}
                <article className="project__item" data-aos="fade-up" data-aos-duration="1000">
                    <div className="project__item-image">
                        <img src={admindashboard} alt="" />
                    </div>
                    <h3>Admin Dashboard</h3>
                    <div className="project__item-cta">
                        <a href="https://github.com/ArunKumar000777/react-admin-dashboard" className="btn" target="_blank" rel="noreferrer">
                            Github
                        </a>
                        <a href="https://arunadmindashboard.onrender.com/" className="btn btn-primary" target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Projects;
