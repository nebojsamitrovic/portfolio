import React, {Component} from 'react';
import Typical from 'react-typical';
import './Portfolio.css';

class Portfolio extends Component {

	render() {
		return (
			<div id={'portfolio'} className={'portfolio'}>
				<div className={'heading'}>
					<h1 className={'heading-text'}>Portfolio</h1>
				</div>
				<div className={'content'}>
					<div className={'projects'}>
						<div className={'project octagon'}>
							<div className={'octagon-inner'}>
								<h1 className={'project-heading'}>Portfolio site</h1>
								<p>(ReactJS, HTML, CSS)</p>
								<Typical
									steps={['Portfolio site developed in ReactJS.']}
									wrapper="h2"
								/>
							</div>
						</div>
						<div className={'project octagon'}>
							<div className={'octagon-inner'}>
								<a href="http://www.underctrl.eu/"  rel="noopener noreferrer" target="_blank">
									<h1 className={'project-heading'}>Under CTRL</h1>
									<p>(PHP, JAVASCRIPT, HTML, CSS)</p>
									<Typical
										steps={['Software Development Company.']}
										wrapper="h2"
									/>
								</a>
							</div>
						</div>
						<div className={'project octagon'}>
							<div className={'octagon-inner'}>
								<h1 className={'project-heading'}>Net</h1>
								<p>(Laravel, WebSocket, JS, PHP)</p>
								<Typical
									steps={['Social Network package for Laravel.']}
									wrapper="h2"
								/>
							</div>
						</div>
					</div>

					<div className={'projects'}>
						<div className={'project octagon'}>
							<div className={'octagon-inner'}>
								<h1 className={'project-heading'}>PHP MVC</h1>
								<p>(PHP, MYSQL, HTML, CSS)</p>
								<Typical
									steps={['Simple PHP MVC framework.']}
									wrapper="h2"
								/>
							</div>
						</div>
						<div className={'project octagon'}>
							<div className={'octagon-inner'}>
								<h1 className={'project-heading'}>Reservation System</h1>
								<p>(Laravel, FabricJS, VueJS)</p>
								<Typical
									steps={['Reservation system for restaurants.']}
									wrapper="h2"
								/>
							</div>
						</div>
						<div className={'project octagon'}>
							<div className={'octagon-inner'}>
								<h1 className={'project-heading'}>Car Service</h1>
								<p>(Laravel, DomPDF, FullCalendar)</p>
								<Typical
									steps={['Online car services notes.']}
									wrapper="h2"
								/>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}
}

export default Portfolio;
