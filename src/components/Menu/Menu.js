import React, {Component} from 'react';
import SlideToggle from 'react-slide-toggle';
import { Link, animateScroll as scroll } from 'react-scroll';
import ReactRotatingText from 'react-rotating-text';
import './Menu.css';
import { Link as HrefLink} from "react-router-dom";

class Menu extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    toggleClass = (event) => {
        if (event.target.classList.contains('fa-bars')) {
            event.target.classList.add('fa-times');
            event.target.classList.remove('fa-bars');
        } else {
            event.target.classList.add('fa-bars');
            event.target.classList.remove('fa-times');
        }
    };

    render() {
        return (
            <nav className='nav' id='navbar'>
                <div className='menu'>
                    <div className='desktop-menu'>
                        <div className='logo' onClick={this.scrollToTop}>
                            <i className="fa fa-terminal" aria-hidden="true"/>
                            <ReactRotatingText items={[' Nebojsa Mitrovic', ' nebojsa.it@gmail.com']} pause={5000} />
                        </div>
                        <SlideToggle
                            duration={800}
                            collapsed
                            render={({toggle, setCollapsibleElement}) => (
                            <div className='mobile-menu'>
                                <div className='slide-toggle__header'>
                                    <div className='slide-toggle__button' onClick={toggle}>
                                        <i className='fa fa-bars' id='menu-mobile-icon' aria-hidden="true" onClick={this.toggleClass} />
                                    </div>
                                </div>
                                <div className='slide-toggle__box' ref={setCollapsibleElement}>
                                    <div className="slide-toggle__box-inner">
                                        <div className='menu-items mobile-menu-items'>
                                            <Link
                                                activeClass="active"
                                                to="about"
                                                spy={true}
                                                smooth={true}
                                                offset={-250}
                                                duration={500}
                                            >
                                                <span className='menu-item'>About Me</span>
                                            </Link>
                                            <Link
                                                activeClass="active"
                                                to="skills"
                                                spy={true}
                                                smooth={true}
                                                offset={-250}
                                                duration={500}
                                            >
                                                <span className='menu-item'>Skills</span>
                                            </Link>
                                            <Link
                                                activeClass="active"
                                                to="portfolio"
                                                spy={true}
                                                smooth={true}
                                                offset={-250}
                                                duration={500}
                                            >
                                                <span className='menu-item'>Portfolio</span>
                                            </Link>
                                            <Link activeClass="active"
                                                  to="contact"
                                                  spy={true}
                                                  smooth={true}
                                                  offset={-250}
                                                  duration={500}
                                            >
                                                <span className='menu-item'>Contact</span>
                                            </Link>
                                            <HrefLink to="/">
                                                <span className='menu-item'>Console</span>
                                            </HrefLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                        />
                        <div className='menu-items menu-top'>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >
                                <span className='menu-item'>About Me</span>
                            </Link>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >
                                <span className='menu-item'>Skills</span>
                            </Link>
                            <Link
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >
                                <span className='menu-item'>Portfolio</span>
                            </Link>
                            <Link activeClass="active"
                                  to="contact"
                                  spy={true}
                                  smooth={true}
                                  offset={-50}
                                  duration={500}
                            >
                                <span className='menu-item'>Contact</span>
                            </Link>
                            <HrefLink to="/">
                                <span className='menu-item'>Console</span>
                            </HrefLink>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;
