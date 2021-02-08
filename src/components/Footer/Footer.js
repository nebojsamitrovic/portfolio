import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {

	render() {
		return (
			<div id={'footer'} className={'footer'}>
				<span>&#x24B8;	Nebojsa Mitrovic {(new Date().getFullYear())}</span>
			</div>
		);
	}
}

export default Footer;
