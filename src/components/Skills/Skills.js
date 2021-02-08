import React, {Component} from 'react';
import Typical from 'react-typical';
import './Skills.css';

class Skills extends Component {

    render() {
        return (
            <div id={'skills'} className={'skills'}>
                <div className={'heading'}>
                    <h1 className={'heading-text right-tab-heading'}>Skills</h1>
                </div>
                <div className={'content text-content'}>
                    <Typical
                        steps={['Summary']}
                        wrapper="h1"
                    />
                    <Typical
                        steps={['Experienced Full Stack Engineer with a demonstrated history of working in the ' +
                        'information technology and services industry. Strong engineering professional with a ' +
                        'Bachelor\'s degree focused in Information Technology from College of Applied Technology ' +
                        'Science Arandjelovac.']}
                        wrapper="h2"
                    />
                </div>
                <div className={'content'}>
                    <div className={'skills-content-box'}>
                        <div className={'title'}>
                            <div className={'box-heading'}>
                                <i className="fa fa-cog" aria-hidden="true"/>
                                <div className={'cogs'}>
                                    <i className="fa fa-cog small-cog" aria-hidden="true"/>
                                    <i className="fa fa-cog small-cog" aria-hidden="true"/>
                                </div>
                                <span>Web Development</span>
                            </div>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>PHP</h3>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>MySQL</h3>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>HTML (HTML5)</h3>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>CSS (LESS, SASS)</h3>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>JavaScript</h3>
                            <ol className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>jQuery</ol>
                            <ol className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>ReactJS</ol>
                            <ol className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>VueJS</ol>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>API (GraphQl, REST)</h3>
                        </div>
                    </div>
                    <div className={'skills-content-box'}>
                        <div className={'title'}>
                            <div className={'box-heading'}>
                                <i className="fa fa-cog" aria-hidden="true"/>
                                <div className={'cogs'}>
                                    <i className="fa fa-cog small-cog" aria-hidden="true"/>
                                    <i className="fa fa-cog small-cog" aria-hidden="true"/>
                                </div>
                                <span>Tools & Technologies</span>
                            </div>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>Laravel</h3>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>Magento 2</h3>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>GIT</h3>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>PWA</h3>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>Ubuntu OS</h3>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>LAMP</h3>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>PhpStorm</h3>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>VS Code</h3>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>Postman</h3>
                        </div>
                    </div>
                    <div className={'skills-content-box'}>
                        <div className={'title'}>
                            <div className={'box-heading'}>
                                <i className="fa fa-cog" aria-hidden="true"/>
                                <div className={'cogs'}>
                                    <i className="fa fa-cog small-cog" aria-hidden="true"/>
                                    <i className="fa fa-cog small-cog" aria-hidden="true"/>
                                </div>
                                <span>Other Skills</span>
                            </div>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>Game Development</h3>
                            <ol className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>Unity</ol>
                            <ol className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>C#</ol>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>Java SE</h3>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>Embedded Programming</h3>
                            <ol className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>Arduino</ol>
                            <ol className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>MikroE Click Boards</ol>
                            <h3 className={'skills-text'}><i className="fa fa-cog" aria-hidden="true"/>Photoshop</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
