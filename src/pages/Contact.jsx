import React from "react";
import "../styles/Contact.css";

const Contacts = () => {
    return (
        <div className="container">
            <div className="text floated">
                <h1>Let's Connect!</h1>
                <h3>I would love to hear from you.</h3>
                <p>Got a question, a project idea, or just want to say hello? Feel free to reach out! Whether it's about collaboration, coding, or just a friendly chat, I'm always open to connecting. Drop me a message through the form below, or find me directly through one of these social media links. I'll do my best to get back to you as soon as possible!</p>
            </div>
            <div className="image">
                <img src="src/assets/img/headshot.JPG" alt="Head Shot"/>
            </div>
        </div>
    );
};

export default Contacts;