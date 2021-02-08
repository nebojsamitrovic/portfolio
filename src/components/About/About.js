import React, {Component} from 'react';
import Typical from 'react-typical';
import './About.css';

class About extends Component {

    render() {
        return (
            <div id={'about'} className={'about'}>
                <div className={'heading'}>
                    <h1 className={'heading-text'}>About me</h1>
                </div>
                <div className={'content about-text'}>
                    <div className={'intro'}>
                        <Typical
                            steps={['Hello, friend']}
                            wrapper="h1"
                        />
                        <Typical
                            steps={['I\'m Nebojsa Mitrovic Full stack Web Developer from Serbia. If you\'re wondering what a full stack ' +
                            'developer is, this is the person who can develop both client and server side software. ' +
                            'I give my best to do the perfect things in the field of web development.']}
                            wrapper="h3"
                        />
                        <Typical
                            steps={['Working experience']}
                            wrapper="h1"
                        />
                        <Typical
                            steps={['↦ Full Stack Web Developer (May 2019 - August 2020) Alt-E-Solutions LLC']}
                            wrapper="h3"
                        />
                        <Typical
                            steps={['↦ Full Stack Web Developer (August 2020 - Present) Under CTRL']}
                            wrapper="h3"
                        />
                    </div>
                </div>
                <div className={'content about-education'}>
                    <div className={'content-box education-panel'}>
                        <div className={'title'}>
                            <p className={'text'}>EDUCATION</p>
                            <p className={'box-heading'}>COLLEGE OF APPLIED <br/>TECHNOLOGY SCIENCE</p>
                            <p className={'text'}>Course : Information Technologies</p>
                            <p className={'text'}>Degree : bachelor</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
