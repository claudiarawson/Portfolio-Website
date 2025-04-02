import React from "react";
import "../styles/Footer.css";
import 'boxicons/css/boxicons.min.css';
import logo from "../assets/img/logo.png";

const Footer  = () => {
    return (

        <footer className="body footer container wrapper">
            <div className="container">
                <div className="content__footer">
                    <div className="profil">
                        <div className="logo__area">
                            <img src={logo} alt="logo" className="logo"/>
                            <spam className="logo__name">Claudia's World</spam>
                        </div>
                        <div className="disc__area">
                            <p>Thank you for visiting! If you like my work, please check out my other social media:)</p>
                        </div>
                        <div className="social__media">
                            <a href="https://www.linkedin.com/in/claudiarawson/"><i className='bx bxl-linkedin-square'></i></a>
                            <a href="https://github.com/claudiarawson"><i className='bx bxl-github'></i></a>
                            <a href="claudiarawson2021@gmail.com"><i className='bx bx-envelope'></i></a>
                        </div>
                    </div>
                    <div className="service__area">
                        <ul className="service__header">
                            <li className="service__name">Resources</li>
                            <li><a href="#">Graphics</a></li>
                            <li><a href="#">Github Repo</a></li>
                            <li><a href="#">Other Resources</a></li>
                        </ul>
                        <ul className="service__header">
                            <li className="service__name">Academic Persuit</li>
                            <li><a href="#">Publications</a></li>
                            <li><a href="#">Academic Projects</a></li>
                            <li><a href="#">School Homework</a></li>
                        </ul>
                        <ul className="service__header">
                            <li className="service__name">My Hobbies</li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Photography</a></li>
                            <li><a href="#">Other Projects</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="custom-hr"/>
            <div className="footer__bottom">&copy; {new Date().getFullYear()} My Website. All rights reserved.</div>
        </footer>
    );
};

export default Footer;