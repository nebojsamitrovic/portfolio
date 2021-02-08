import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import Typical from 'react-typical';
import './Header.css';

class Header  extends Component {

	render() {
		return (
			<div className={'header'}>
				<div className={'video-container'}>
					<video src={require('./header-bg.mp4')}  autoPlay={true} loop={true} className={'video'}/>
				</div>
				<div className={'top-header'}>
					<div className={'name-logo'} />
					<Menu />
				</div>
				<div className={"general-info"}>
					<div className={'header-content'}>
						<div className={'photo-frame'}>
							<div className={'photo'} />
						</div>
						<div className={'info'}>
							<h1 className={'name'}>Nebojsa Mitrovic</h1>
							<h3 className={'position'}>Full Stack Web Developer</h3>
						</div>
					</div>
					<div className={'general'}>
						<div className={'general-row birth'}>
							<h2 className={'general-text general-text-static'}>Date of Birth:</h2>
							<Typical
								className={'general-text general-writing-text'}
								steps={['May, 1st 1993']}
								wrapper="h2"
							/>
						</div>
						<a href={'mailto:nebojsa.it@gmail.com'} target={'_blank'} className={'general-row email'} rel="noopener noreferrer">
							<h2 className={'general-text general-text-static'}>Email:</h2>
							<Typical
								className={'general-text general-writing-text'}
								steps={['nebojsa.it@gmail.com']}
								wrapper="h2"
							/>
						</a>
						<a  href={'https://github.com/nebojsamitrovic'} target={'_blank'} className={'general-row github'} rel="noopener noreferrer">
							<h2 className={'general-text general-text-static'}>GitHub:</h2>
							<Typical
								className={'general-text general-writing-text'}
								steps={['Nebojsa Mitrovic']}
								wrapper="h2"
							/>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
