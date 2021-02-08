import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import './console.css';
import { Redirect } from "react-router-dom";

class Console extends Component {

    showMsg = () => 'Hello, friend';
    about = () => "I'm Nebojsa Mitrovic Fullstack Web Developer from Serbia.\n\n" +
        "If you're wondering what a full stack developer is, this is the person who can develop both client and server side software.\n\n" +
        "I give my best to do the perfect things in the field of web development.";
    experience = () => "Full Stack Web Developer (May 2019 - August 2020) Alt-E-Solutions LLC \n\nFull Stack Web Developer (August 2020 - Present) Under CTRL";
    summary = () => "Experienced Full Stack Engineer with a demonstrated history of working in the information technology and services industry.\n\n" +
        "Strong engineering professional with a Bachelor's degree focused in Information Technology from College of Applied Technology Science Arandjelovac.";
    skills = () => "Web Development: PHP, MySQL, HTML(LESS, SASS), JavaScript(jQuery, React, Vue), API(GraphQl, REST)\n\n" +
        "Tools & Technologies: Laravel, Magento 2, GIT, PWA, Ubuntu OS, LAMP, PhpStorm, VS Code, Postman\n\n" +
        "Other Skills: Game Development(Unity, C#), JAVA SE, Embedded Programming(Arduino, MikroE Click Boards), Photoshop";

    render() {
        return (
            <div className={"terminal"}>
                <Terminal
                    color='green'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontWeight: "bold", fontSize: "1em", width: "100%", maxWidth:"unset" }}
                    commands={{
                        showMsg: this.showMsg,
                        about: this.about,
                        experience: this.experience,
                        summary: this.summary,
                        skills: this.skills,
                        'gui': () => <Redirect to={'/gui'} />,
                    }}
                    descriptions={{
                        showMsg: 'display message',
                        about: 'about me',
                        experience: 'display working experience',
                        summary: 'display summary',
                        skills: 'display skills',
                        'gui': 'show Portfolio site with Graphical User Interface',
                    }}
                    msg="Hello, friend. I'm Nebojsa Mitrovic Full stack Web Developer (type 'gui'to display GUI version of this site, type 'help' to see available commands)."
                />
            </div>
        );
    }
}

export default Console;
