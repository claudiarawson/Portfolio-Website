import React from "react";
import "../styles/Footer.css";
import 'boxicons/css/boxicons.min.css';
import logo from "../assets/img/logo.png";

const Footer  = () => {
    return (

        <footer className="body footer container wrapper">
            <div class="container">
                <div class="content__footer">
                    <div class="profil">
                        <div className="logo__area">
                            <img src={logo} alt="logo" className="logo"/>
                            <spam class="logo__name">Claudia's World</spam>
                        </div>
                        <div class="disc__area">
                            <p>Thank you for visiting! If you like my work, please check out my other social media:)</p>
                        </div>
                        <div class="social__media">
                            <a href="#"><i class='bx bxl-linkedin-square'></i></a>
                            <a href="#"><i class='bx bxl-github'></i></a>
                            <a href="#"><i class='bx bx-envelope'></i></a>
                            <a href="#"><i class='bx bxl-facebook-square' ></i></a>
                        </div>
                    </div>
                    <div class="service__area">
                        <ul class="service__header">
                            <li className="service__name">Resources</li>
                            <li><a href="#">Graphics</a></li>
                            <li><a href="#">Github Repo</a></li>
                            <li><a href="#">Other Resources</a></li>
                        </ul>
                        <ul class="service__header">
                            <li className="service__name">Academic Persuit</li>
                            <li><a href="#">Publications</a></li>
                            <li><a href="#">Academic Projects</a></li>
                            <li><a href="#">School Homework</a></li>
                        </ul>
                        <ul class="service__header">
                            <li className="service__name">My Hobbies</li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Photography</a></li>
                            <li><a href="#">Other Projects</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </footer>
    );
};

export default Footer;